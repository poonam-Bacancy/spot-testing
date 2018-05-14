# frozen_string_literal: true

module Shipping
  class Rate
    attr_accessor :name
    attr_accessor :code
    attr_accessor :price
    attr_accessor :delivery_date_range
    attr_accessor :shipping_date
    attr_accessor :origin
    attr_accessor :destination


    def initialize(arg)
      case arg
      when ActiveShipping::RateEstimate then initialize_from_activeshipping(arg)
      when Hash then initialize_from_hash(arg.with_indifferent_access)
      end
    end

    def initialize_from_activeshipping(rate)
      self.name ||= rate.service_name
      self.code ||= rate.service_code
      self.price ||= rate.total_price
      self.delivery_date_range ||= rate.delivery_range
      self.shipping_date ||= rate.shipping_date
      self.origin = Shipping::Location.new(rate.origin)
      self.destination = Shipping::Location.new(rate.destination)
    end

    def initialize_from_hash(hash)
      self.name ||= hash[:name]
      self.code ||= hash[:code]
      self.price ||= hash[:price]
      self.delivery_date_range ||= hash[:delivery_date_range]
      self.shipping_date ||= hash[:pickup_date]
      self.origin = Shipping::Location.new(hash[:origin])
      self.destination = Shipping::Location.new(hash[:destination])
    end

    def to_json
      {
        name: name,
        code: code,
        price: price,
        delivery_start_date: delivery_date_range.first,
        delivery_end_date: delivery_date_range.last,
        origin: origin.to_json,
        destination: destination.to_json
      }
    end

    def delivery_date
      delivery_date_range&.last
    end
  end
end
