# Bescherming tegen spam en geautomatiseerde aanvallen op het contactformulier.
# Max 5 berichten per IP-adres per uur.

class Rack::Attack
  # Blokkeer een IP na 5 verzoeken binnen een uur
  throttle("contacts/ip", limit: 5, period: 1.hour) do |request|
    request.ip if request.path == "/api/v1/contacts" && request.post?
  end

  # Stuur een JSON-foutmelding terug (in plaats van standaard HTML)
  self.throttled_responder = lambda do |_env|
    [
      429,
      { "Content-Type" => "application/json" },
      [ { error: "Te veel verzoeken. Probeer het later opnieuw." }.to_json ]
    ]
  end
end
