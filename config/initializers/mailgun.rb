# frozen_string_literal: true

Mailgun.configure do |config|
  secrets = Rails.application.secrets.with_indifferent_access
  config.api_key = secrets.fetch(:mailgun, :api_key)
end
