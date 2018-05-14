# frozen_string_literal: true

OrderValidator::CupcakeArray = Dry::Validation.Schema do
  configure do
    config.messages_file = Rails.root.join('config', 'errors.yml')
    predicates(Predicates)
  end

  each(OrderValidator::Cupcake)
end
