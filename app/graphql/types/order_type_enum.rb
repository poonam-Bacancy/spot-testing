# frozen_string_literal: true

Types::OrderTypeEnum = GraphQL::EnumType.define do
  name 'OrderType'
  description 'Order type...'

  Order::ORDER_TYPE.each do |shipping_method|
    value(shipping_method.to_s.downcase)
  end
end
