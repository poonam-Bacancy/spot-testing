# frozen_string_literal: true

Queries::Clipart = GraphQL::Field.define do
  type Types::ClipartType
  description 'Returns all available clipart'
  resolve Resolvers::Cliparts::Index
end
