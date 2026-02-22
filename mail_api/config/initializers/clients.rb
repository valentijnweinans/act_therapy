# Laadt de client-registratie uit config/clients.yml en bouwt een lookup-hash:
#   MAIL_CLIENTS["<api-sleutel>"] => { name: "...", recipient: "..." }
#
# Ontbrekende ENV-variabelen geven een duidelijke foutmelding bij het opstarten.

raw = YAML.load_file(Rails.root.join("config/clients.yml"))

MAIL_CLIENTS = if ENV["SECRET_KEY_BASE_DUMMY"]
  # Tijdens assets:precompile zijn secrets niet beschikbaar — sla check over
  {}
else
  raw.each_with_object({}) do |(id, config), hash|
    api_key   = ENV.fetch(config["api_key_env"]) do
      raise "Ontbrekende ENV-variabele '#{config["api_key_env"]}' voor client '#{id}'"
    end
    recipient = ENV.fetch(config["recipient_env"]) do
      raise "Ontbrekende ENV-variabele '#{config["recipient_env"]}' voor client '#{id}'"
    end

    hash[api_key] = { name: config["name"], recipient: recipient, confirmation_message: config["confirmation_message"] }
  end
end.freeze
