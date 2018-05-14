# frozen_string_literal: true

module Mutations
  CreateOrder = GraphQL::Relay::Mutation.define do
    name 'CreateOrder'
    description 'Creates an order'

    input_field :order, Types::OrderInputObjectType

    return_field :order, Types::OrderType
    return_field :persisted, types.Boolean
    return_field :valid, types.Boolean
    return_field :paid, types.Boolean
    return_field :errors, types[Types::ErrorType]

    resolve Resolvers::Orders::Create
  end
end
