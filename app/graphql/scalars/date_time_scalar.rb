# frozen_string_literal: true

Scalars::DateTimeScalar = GraphQL::ScalarType.define do
  name 'DateTime'
  description 'ISO 8601 date-time representation'
  coerce_input(
    lambda do |value, _|
      Time.parse(value)
    end
  )
  coerce_result(
    lambda do |value, _|
      value.iso8601
    end
  )
end
