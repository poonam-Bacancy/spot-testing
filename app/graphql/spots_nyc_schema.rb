# frozen_string_literal: true

SpotsNYCSchema = GraphQL::Schema.define do
  mutation(Types::MutationType)
  query(Types::QueryType)
end
