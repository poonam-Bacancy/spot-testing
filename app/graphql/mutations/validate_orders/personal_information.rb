# frozen_string_literal: true

module Mutations
  module ValidateOrders
    PersonalInformation = GraphQL::Relay::Mutation.define do
      name 'ValidateOrderPersonalInformation'
      description "Validates an Order's first step"

      input_field :order, Types::OrderInputObjectType

      return_field :errors, !types[Types::ErrorType]
      return_field :valid, !types.Boolean

      resolve Resolvers::Orders::ValidatePersonalInformation
    end
  end
end
