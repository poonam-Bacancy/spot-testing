# frozen_string_literal: true

OrderValidator::Cupcakes::MessageCupcake = Dry::Validation.Schema do
  configure do
    config.messages_file = Rails.root.join('config', 'errors.yml')
    predicates(Predicates)
  end

  required(:text_size)
    .value do
      none? |
        (filled? & included_in?(::Cupcake::TEXT_SIZES.map(&:to_s)))
    end
    .when(:none?) do
      optional(:first_line).filled(:str?)
      optional(:second_line).filled(:str?)
      optional(:third_line).filled(:str?)
    end
    .when(included_in?: ::Cupcake::TEXT_SIZES.map(&:to_s)) do
      required(:second_line).filled(:str?)
    end
end
