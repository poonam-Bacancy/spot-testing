# frozen_string_literal: true

OrderValidator::Personalization = Dry::Validation.Schema do
  configure do
    config.messages_file = Rails.root.join('config', 'errors.yml')
    predicates(Predicates)
  end

  required(:flavor_ids) { array? { filled? & each { flavor_id? } } }
  required(:count_cupcakes_by)
    .value(included_in?: ::Order::COUNT_CUPCAKES_BY.map(&:to_s))
    .when(eql?: 'packs_of_four') do
      required(:cupcakes) do
        array? { filled? & size?(4) & OrderValidator::CupcakeArray}
      end
    end
    .when(eql?: 'the_dozen') do
      required(:cupcakes) { array? { filled? } && each(OrderValidator::Cupcake) }
    end
end
