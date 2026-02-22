class ContactMailer < ApplicationMailer
  def submission(form_data, recipient, client_name)
    @form_data = form_data
    @client_name = client_name

    mail(
      to: recipient,
      reply_to: form_data[:email],
      subject: "Nieuw bericht van: #{form_data[:naam]}"
    )
  end

  def confirmation(form_data, client_name, message)
    @form_data = form_data
    @client_name = client_name
    @message = message

    mail(
      to: form_data[:email],
      subject: "Bedankt voor je bericht — #{client_name}"
    )
  end
end
