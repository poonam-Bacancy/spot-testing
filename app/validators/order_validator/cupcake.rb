# frozen_string_literal: true

OrderValidator::Cupcake = Dry::Validation.Schema do
  configure do
    config.messages_file = Rails.root.join('config', 'errors.yml')
    predicates(Predicates)
  end

  required(:quantity).filled(:int?).value(gteq?: 1)
  required(:type)
    .value(included_in?: ::Cupcake::MEDIUM_TYPE.map(&:to_s))
    .when(eql?: 'image') do
      required(:encoded_image).filled(:str?)
    end
    .when(eql?: 'clipart') do
      required(:clipart_id).filled(:clipart_id?)
    end
    .when(eql?: 'message') do
      schema(OrderValidator::Cupcakes::MessageCupcake)
    end
end
