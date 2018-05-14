# frozen_string_literal: true

Types::ErrorType = GraphQL::ObjectType.define do
  name 'Error'
  description 'An error'

  field :key, types.String
  field :index, types.Int
  field :messages, types[types.String]
  field :suberrors, types[Types::ErrorType]
end
