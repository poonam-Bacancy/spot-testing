# frozen_string_literal: true

OrderValidator::Overview = Dry::Validation.Schema do
  configure do
    config.messages_file = Rails.root.join('config', 'errors.yml')
    predicates(Predicates)
  end

  required(:shareable_images).filled(:bool?)
  optional(:additional_notes).filled(:str?)
  optional(:promo_code).filled(:str?)
end
