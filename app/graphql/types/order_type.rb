# frozen_string_literal: true

Types::OrderType = GraphQL::ObjectType.define do
  name 'Order'
  description 'An Order'

  field :id, types.String
  field :email, types.String
  field :phoneNumber, types.String
  field :address, types.String
  field :apartmentNumber, types.String
  field :shippingDate, Scalars::DateScalar
  field :shippingMethod, types.String
  field :recipientName, types.String
  field :recipientPhoneNumber, types.String
  field :doorman, types.Boolean
  field :buildingType, Types::BuildingTypeType
  field :deliverComment, types.String
  field :deliveryStartingAt, Scalars::DateTimeScalar
  field :deliveryEndingAt, Scalars::DateTimeScalar
  field :giftMessage, types.String
  field :countCupcakesBy, types.String
  field :orderType, types.String
  field :comapny, types.String
  field :industry, Types::IndustryType
  field :shareableImages, types.Boolean
  field :deliverComment, types.String
  field :wrapAroundLabelMessage, types.String
  field :pickupTime, Scalars::DateTimeScalar

  #field :paid do
  #  type !types.Boolean
  #  resolve ->(obj, _, _) { obj.paid? }
  #end

  field :unitsPrice, types.Float
  field :cupcakeDesignsPrice, types.Float
  field :giftMessagePrice, types.Float
  field :rushOrderPrice, types.Float
  field :shippingPrice, types.Float
  field :discount, types.Float
  field :total, types.Float
end
