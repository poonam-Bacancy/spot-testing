# frozen_string_literal: true

module Mutations
  CalculateOrderPrice = GraphQL::Relay::Mutation.define do
    name 'CalculateOrderPrice'
    description "Calculates an Order's price"

    input_field :order, Types::OrderInputObjectType

    return_field :units, types.Float
    return_field :cupcakeDesigns, types.Float
    return_field :giftMessage, types.Float
    return_field :rushOrder, types.Float
    return_field :shipping, types.Float
    return_field :discount, types.Float
    return_field :total, types.Float

    resolve Resolvers::Orders::CalculatePrice
  end
end
