# frozen_string_literal: true

Queries::BuildingTypes = GraphQL::Field.define do
  type types[Types::BuildingTypeType]
  description 'Returns all available building types'
  resolve Resolvers::BuildingTypes::Index
end
