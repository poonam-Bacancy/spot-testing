# frozen_string_literal: true

Types::TextSizeEnum = GraphQL::EnumType.define do
  name 'TextSize'
  description 'Cupcake font size'

  Cupcake::TEXT_SIZES.each do |text_size|
    value(text_size.to_s.downcase)
  end
end
