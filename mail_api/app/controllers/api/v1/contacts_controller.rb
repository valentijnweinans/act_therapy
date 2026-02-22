module Api
  module V1
    class ContactsController < ApplicationController
      def create
        client = authenticate_client
        return render json: { error: "Ongeldige API-sleutel" }, status: :unauthorized unless client

        # Honeypot: verborgen veld ingevuld → hoogstwaarschijnlijk een bot
        return head :ok if honeypot_filled?

        # Tijdscheck: formulier te snel verstuurd → hoogstwaarschijnlijk een bot
        return head :ok if submitted_too_fast?

        unless params_valid?
          return render json: { error: "Naam, e-mailadres en bericht zijn verplicht" }, status: :unprocessable_entity
        end

        ContactMailer.submission(contact_params, client[:recipient], client[:name]).deliver_now
        ContactMailer.confirmation(contact_params, client[:name], client[:header_name], client[:confirmation_message]).deliver_now
        render json: { success: true, message: "Bericht verzonden" }
      rescue => e
        Rails.logger.error "Fout bij verzenden e-mail: #{e.message}"
        render json: { error: "Verzenden mislukt, probeer het later opnieuw" }, status: :internal_server_error
      end

      private

      def authenticate_client
        api_key = request.headers["X-Api-Key"] || params[:api_key]
        MAIL_CLIENTS[api_key]
      end

      # Veldnamen komen overeen met het HTML-formulier (Nederlands)
      def contact_params
        params.permit(:naam, :email, :telefoon, :bericht)
      end

      def params_valid?
        %i[naam email bericht].all? { |k| params[k].present? } &&
          params[:email].match?(URI::MailTo::EMAIL_REGEXP)
      end

      # Honeypot: het verborgen 'website'-veld mag nooit ingevuld zijn
      def honeypot_filled?
        params[:website].present?
      end

      # Tijdscheck: formulier moet minstens 3 seconden open zijn geweest
      # form_loaded_at is een Unix-timestamp in milliseconden, gezet door JS
      def submitted_too_fast?
        loaded_at = params[:form_loaded_at].to_i
        return false if loaded_at.zero? # veld ontbreekt: niet blokkeren

        elapsed_ms = (Time.now.to_f * 1000).to_i - loaded_at
        elapsed_ms < 3000
      end
    end
  end
end
