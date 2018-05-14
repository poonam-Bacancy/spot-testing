# frozen_string_literal: true

Types::BuildingTypeType = GraphQL::ObjectType.define do
  name 'BuildingType'
  description 'A building type'

  field :id, !types.String, 'ID'
  field :name, !types.String, 'Name'
  field :askForDoorman,
        !types.Boolean,
        'Indicates that the building type may have a doorman' do
          resolve ->(obj, _, _) { obj.ask_for_doorman? }
        end
end
