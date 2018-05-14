# frozen_string_literal: true

Types::DesignType = GraphQL::ObjectType.define do
  name 'Design'
  description 'A cupcake design'

  field :id, !types.String
end
