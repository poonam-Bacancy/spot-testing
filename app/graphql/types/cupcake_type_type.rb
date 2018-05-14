# frozen_string_literal: true

Types::CupcakeTypeType = GraphQL::ObjectType.define do
  name 'CupcakeType'
  description 'A type/flavor of cupcake'

  field :id, !types.String, 'ID of the cupcake type'
  field :name, !types.String, 'Name of the cupcake type'
  field :imageURL do
    type !types.String
    description 'URL to the image representing the cupcake type/flavor'
    resolve ->(obj, _, _) { obj.image[:medium]&.url }
  end
end
