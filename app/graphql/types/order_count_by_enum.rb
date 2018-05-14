# frozen_string_literal: true

Types::OrderCountByEnum = GraphQL::EnumType.define do
  name 'OrderCountBy'
  description 'How should the cupcake quantity be calculated...'

  Order::COUNT_CUPCAKES_BY.each do |shipping_method|
    value(shipping_method.to_s.downcase)
  end
end
