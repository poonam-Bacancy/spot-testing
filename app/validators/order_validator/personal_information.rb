# frozen_string_literal: true

OrderValidator::PersonalInformation = Dry::Validation.Schema do
  configure do
    config.messages_file = Rails.root.join('config', 'errors.yml')
    predicates(Predicates)
  end

  required(:full_name).filled(:str?)
  required(:email).filled(:str?, :email?)
  required(:phone_number).filled(:str?)
end
