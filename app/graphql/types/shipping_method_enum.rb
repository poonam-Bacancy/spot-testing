# frozen_string_literal: true

Types::ShippingMethodEnum = GraphQL::EnumType.define do
  name 'ShippingMethods'
  description 'Shiping method...'

  Order::SHIPPING_METHODS.each do |shipping_method|
    value(shipping_method.to_s.downcase)
  end
end
