# frozen_string_literal: true

Queries::Fonts = GraphQL::Field.define do
  type Types::FontType
  description 'Returns all available fonts'
  resolve Resolvers::Fonts::Index
end
