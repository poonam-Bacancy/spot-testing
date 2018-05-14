# frozen_string_literal: true

Types::ColorType = GraphQL::ObjectType.define do
  name 'Color'
  description 'A color'

  field :id, !types.String, 'ID'
  field :name, !types.String, 'Name'
  field :hexValue do
    type !types.String
    description 'HEX representation of the color (e.g. #ffffff)'
    resolve ->(obj, _, _) { obj&.hex }
  end
end
