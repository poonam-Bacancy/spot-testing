# frozen_string_literal: true

Types::MutationType = GraphQL::ObjectType.define do
  name 'Mutation'
  description 'Root mutation object of the schema'

  field :createOrder, field: Mutations::CreateOrder.field

  field :validateOrderPersonalInformation,
        field: Mutations::ValidateOrders::PersonalInformation.field

  field :validateOrderInformation,
        field: Mutations::ValidateOrders::Information.field

  field :validateOrderPersonalization,
        field: Mutations::ValidateOrders::Personalization.field

  field :validateOrderOverview,
        field: Mutations::ValidateOrders::Overview.field

  field :validateOrderPayment,
        field: Mutations::ValidateOrders::Payment.field

  field :validateOrder, field: Mutations::ValidateOrder.field

  field :calculateOrderPrice, field: Mutations::CalculateOrderPrice.field
end
