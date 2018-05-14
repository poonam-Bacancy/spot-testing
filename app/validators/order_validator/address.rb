# frozen_string_literal: true

OrderValidator::Address = Dry::Validation.Schema do
  configure do
    config.messages_file = Rails.root.join('config', 'errors.yml')
    predicates(Predicates)
  end

  required(:street).filled(:str?)
  required(:city).filled(:str?)
  required(:state).filled(:str?)
  required(:zipcode).filled(:str?)
  #required(:country).filled(:str?)
end
