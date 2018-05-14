# frozen_string_literal: true

module Mutations
  module ValidateOrders
    Personalization = GraphQL::Relay::Mutation.define do
      name 'ValidateOrderPersonalization'
      description "Validates an Order's third step"

      input_field :order, Types::OrderInputObjectType

      return_field :errors, !types[Types::ErrorType]
      return_field :valid, !types.Boolean

      resolve Resolvers::Orders::ValidatePersonalization
    end
  end
end
