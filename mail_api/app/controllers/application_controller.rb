class ApplicationController < ActionController::Base
  # CSRF-bescherming uitgeschakeld voor de API (stateless, token-gebaseerd via X-Api-Key)
  protect_from_forgery with: :null_session
end
