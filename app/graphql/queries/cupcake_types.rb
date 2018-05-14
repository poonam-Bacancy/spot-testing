# frozen_string_literal: true

Queries::CupcakeTypes = GraphQL::Field.define do
  type Types::CupcakeTypeType
  description 'Returns all available cupcake types/flavors'
  resolve Resolvers::CupcakeTypes::Index
end
