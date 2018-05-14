# frozen_string_literal: true

Scalars::DateScalar = GraphQL::ScalarType.define do
  name 'Date'
  description 'ISO 8601 date representation'

  coerce_input(
    lambda do |value, _|
      Date.parse(value)
    end
  )

  coerce_result(
    lambda do |value, _|
      value.iso8601
    end
  )
end
