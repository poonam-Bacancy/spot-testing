# frozen_string_literal: true

Queries::Industries = GraphQL::Field.define do
  type types[Types::IndustryType]
  description 'Returns all available industries'
  resolve Resolvers::Industries::Index
end
