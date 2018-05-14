# frozen_string_literal: true

module Mutations
  module ValidateOrders
    Payment = GraphQL::Relay::Mutation.define do
      name 'ValidateOrderPayment'
      description "Validates an Order's fifth step"

      input_field :order, Types::OrderInputObjectType

      return_field :errors, !types[Types::ErrorType]
      return_field :valid, !types.Boolean

      resolve Resolvers::Orders::ValidatePayment
    end
  end
end
