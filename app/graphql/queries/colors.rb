# frozen_string_literal: true

Queries::Colors = GraphQL::Field.define do
  type Types::ColorType
  description 'Returns all available colors'
  resolve Resolvers::Colors::Index
end
