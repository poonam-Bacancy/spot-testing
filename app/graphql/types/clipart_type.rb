# frozen_string_literal: true

Types::ClipartType = GraphQL::ObjectType.define do
  name 'Clipart'
  description 'Clipart...'

  field :id, !types.String, 'ID of the clipart'
  field :name, !types.String, 'Name of the clipart'
  field :imageURL do
    type !types.String
    description 'URL to the clipart image'
    resolve ->(obj, _, _) { obj.image[:cupcake]&.url }
  end
  field :category, !types.String, 'Category of the clipart'
end
