# frozen_string_literal: true

OrderValidator::Payment = Dry::Validation.Schema do
  configure do
    config.messages_file = Rails.root.join('config', 'errors.yml')
    predicates(Predicates)
  end

  required(:stripe_token).filled(:str?)
end
