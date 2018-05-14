# frozen_string_literal: true

Types::FontType = GraphQL::ObjectType.define do
  name 'Font'
  description 'A font'

  field :id, !types.String, 'ID of the clipart'
  field :name, !types.String, 'Name of the clipart'
  field :fileURL do
    type !types.String
    description 'URL to the clipart image'
    resolve ->(obj, _, _) { obj.file&.url }
  end
end
