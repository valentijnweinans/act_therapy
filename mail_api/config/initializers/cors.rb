# Sta cross-origin POST-verzoeken toe vanaf de geconfigureerde origins.
# Stel ALLOWED_ORIGINS in als komma-gescheiden lijst, bijv.:
#   "https://anne-weinans.github.io,https://anneweinans.nl"
# Standaard wordt alles toegestaan (handig voor lokale ontwikkeling).

Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins ENV.fetch("ALLOWED_ORIGINS", "*").split(",")

    resource "/api/*",
      headers: :any,
      methods: [ :post, :options ]
  end
end
