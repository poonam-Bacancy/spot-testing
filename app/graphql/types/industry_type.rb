# frozen_string_literal: true

Types::IndustryType = GraphQL::ObjectType.define do
  name 'Industry'
  description 'An industry'

  field :id, !types.String, 'ID'
  field :name, !types.String, 'Name'
end
