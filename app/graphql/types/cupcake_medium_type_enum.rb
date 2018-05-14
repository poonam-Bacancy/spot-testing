# frozen_string_literal: true

Types::CupcakeMediumTypeEnum = GraphQL::EnumType.define do
  name 'CupcakeMediumType'
  description 'Type of cupcake design?'

  Cupcake::MEDIUM_TYPE.each do |medium_type|
    value(medium_type.to_s.downcase)
  end
end
