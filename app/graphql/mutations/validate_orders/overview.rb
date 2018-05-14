# frozen_string_literal: true

module Mutations
  module ValidateOrders
    Overview = GraphQL::Relay::Mutation.define do
      name 'ValidateOrderOverview'
      description "Validates an Order's fourth step"

      input_field :order, Types::OrderInputObjectType

      return_field :errors, !types[Types::ErrorType]
      return_field :valid, !types.Boolean

      resolve Resolvers::Orders::ValidateOverview
    end
  end
end
