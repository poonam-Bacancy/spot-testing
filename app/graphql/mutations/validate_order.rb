# frozen_string_literal: true

module Mutations
  ValidateOrder = GraphQL::Relay::Mutation.define do
    name 'ValidateOrder'
    description 'Validates an order'

    input_field :order, Types::OrderInputObjectType

    return_field :errors, !types[Types::ErrorType]
    return_field :valid, !types.Boolean

    resolve Resolvers::Orders::ValidateAll
  end
end
