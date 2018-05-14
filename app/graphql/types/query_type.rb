# frozen_string_literal: true

Types::QueryType = GraphQL::ObjectType.define do
  name 'Query'
  description 'Root query object of the schema'

  field :cupcakeTypes,
        !types[Types::CupcakeTypeType],
        field: Queries::CupcakeTypes

  field :clipart,
        !types[Types::ClipartType],
        field: Queries::Clipart

  field :fonts,
        !types[Types::FontType],
        field: Queries::Fonts

  field :colors,
        !types[Types::ColorType],
        field: Queries::Colors

  field :buildingTypes,
        !types[Types::BuildingTypeType],
        field: Queries::BuildingTypes

  field :industries,
        !types[Types::IndustryType],
        field: Queries::Industries
end
