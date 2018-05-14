# frozen_string_literal: true

module JWT
  class Coder < BasicService
    ALGORITHM = 'HS512'
    SECRET = Rails.application.secrets.dig(:jwt, :password).dup.freeze
  end
end
