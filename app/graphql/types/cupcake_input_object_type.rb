# frozen_string_literal: true

Types::CupcakeInputObjectType = GraphQL::InputObjectType.define do
  name 'CupcakeInputObject'
  description 'A cupcake design'

  argument :type, !Types::CupcakeMediumTypeEnum
  argument :quantity, !types.Int

  # Type: Image
  argument :encodedImage, types.String

  # Type: Clipart
  argument :clipartId, types.String

  # Type: Message
  argument :textSize, Types::TextSizeEnum
  argument :curved, types.Boolean
  argument :colorId, types.String
  argument :fontId, types.String
  argument :firstLine, types.String
  argument :secondLine, types.String
  argument :thirdLine, types.String
end
