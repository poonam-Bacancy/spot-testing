# frozen_string_literal: true

module Mutations
  module ValidateOrders
    Information = GraphQL::Relay::Mutation.define do
      name 'ValidateOrderInformation'
      description "Validates an Order's second step"

      input_field :order, Types::OrderInputObjectType

      return_field :errors, !types[Types::ErrorType]
      return_field :valid, !types.Boolean

      resolve Resolvers::Orders::ValidateInformation
    end
  end
end
