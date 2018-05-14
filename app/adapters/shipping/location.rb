# frozen_string_literal: true

module Shipping
  class Location
    attr_accessor :country
    attr_accessor :zip_code
    attr_accessor :state
    attr_accessor :city
    attr_accessor :address_1
    attr_accessor :address_2
    attr_accessor :address_3
    attr_accessor :name
    attr_accessor :company_name

    def initialize(arg)
      case arg
      when ActiveShipping::Location then initialize_from_activeshipping(arg)
      when Hash then initialize_from_hash(arg.with_indifferent_access)
      end
    end

    def initialize_from_activeshipping(location)
      self.country ||= location.country
      self.zip_code ||= location.postal_code
      self.state ||= location.state
      self.city ||= location.city
      self.address_1 ||= location.address1
      self.address_2 ||= location.address2
      self.address_3 ||= location.address3
      self.name ||= location.name
      self.company_name ||= location.company_name
    end

    def initialize_from_hash(hash)
      self.country ||= hash[:country]
      self.zip_code ||= hash[:zip_code]
      self.state ||= hash[:state]
      self.city ||= hash[:city]
      self.address_1 ||= hash[:address_1]
      self.address_2 ||= hash[:address_2]
      self.address_3 ||= hash[:address_3]
      self.name ||= hash[:name]
      self.company_name ||= hash[:company_name]
    end

    def hash_key
      key = [
        country, zip_code, state, city, address_1, address_2, address_3,
        name, company_name
      ].compact.join('|')
      Digest::MD5.hexdigest(key)
    end

    def to_json
      {
        zip_code: zip_code,
        state: state,
        city: city,
        address_1: address_1,
        address_2: address_2,
        address_3: address_3,
        name: name,
        company_name: company_name
      }
    end

    def to_activeshipping
      ActiveShipping::Location.new(
        country: country,
        state: state,
        city: city,
        zip: zip_code,
        address1: address_1,
        address2: address_2,
        address3: address_3,
        name: name,
        company_name: company_name
      )
    end
  end
end
