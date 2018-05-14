# frozen_string_literal: true

Types::OrderInputObjectType = GraphQL::InputObjectType.define do
  name 'OrderInputObject'
  description 'Represent an unpersisted Order'

  # Not-confirmed features
  argument :rushOrder, types.Boolean

  # First step - Personal information
  argument :fullName, types.String
  argument :email, types.String
  argument :phoneNumber, types.String

  # Second step - Information
  argument :address, Types::AddressInputObjectType
  argument :apartmentNumber, types.String
  argument :shippingDate, Scalars::DateScalar
  argument :pickupTime, Scalars::DateTimeScalar
  argument :orderType, Types::OrderTypeEnum
  argument :company, types.String
  argument :industryId, types.String
  argument :shippingMethod, Types::ShippingMethodEnum
  argument :recipientName, types.String
  argument :recipientPhoneNumber, types.String
  argument :doorman, types.Boolean
  argument :buildingTypeId, types.String
  argument :deliveryComment, types.String
  argument :deliveryStartingAt, Scalars::DateTimeScalar
  argument :deliveryEndingAt, Scalars::DateTimeScalar
  argument :giftMessage, types.String
  argument :wrapAroundLabelMessage, types.String

  # Third step - Personalization
  argument :flavorIds, types[types.String]
  argument :countCupcakesBy, Types::OrderCountByEnum
  argument :cupcakes, types[Types::CupcakeInputObjectType]

  # Fourth step - Overview
  argument :shareableImages, types.Boolean
  argument :additionalNotes, types.String
  argument :promoCode, types.String

  # Fifth step - Payment
  argument :stripeToken, types.String
end
