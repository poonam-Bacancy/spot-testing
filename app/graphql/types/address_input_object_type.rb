# frozen_string_literal: true

Types::AddressInputObjectType = GraphQL::InputObjectType.define do
  name 'AddressInputObject'
  description 'Represent an address'

  argument :street, types.String
  argument :city, types.String
  argument :state, types.String
  argument :zipcode, types.String
  argument :country, types.String
end
