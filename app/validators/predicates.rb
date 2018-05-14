# frozen_string_literal: true

module Predicates
  include Dry::Logic::Predicates

  predicate(:email?) do |value|
    EmailValidator.valid?(value)
  end

  predicate(:color?) do |value|
    value =~ /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/
  end

  predicate(:industry_id?) do |value|
    Industry.all.where(id: value).any?
  end

  predicate(:building_type_id?) do |value|
    BuildingType.all.where(id: value).any?
  end

  predicate(:color_id?) do |value|
    Color.all.where(id: value).any?
  end

  predicate(:font_id?) do |value|
    Font.all.where(id: value).any?
  end

  predicate(:flavor_id?) do |value|
    CupcakeType.all.where(id: value).any?
  end

  predicate(:clipart_id?) do |value|
    Clipart.all.where(id: value).any?
  end

  predicate(:future_date?) do |value|
    value >= Time.now
  end
end
