# frozen_string_literal: true

module Shipping
  class Package
    attr_accessor :width
    attr_accessor :height
    attr_accessor :depth
    attr_accessor :weight

    def initialize(arg)
      case arg
      when ActiveShipping::Package then initialize_from_activeshipping(arg)
      when Hash then initialize_from_hash(arg.with_indifferent_access)
      end
    end

    def initialize_from_activeshipping(package)
      self.width ||= package.dimensions[0]
      self.height ||= package.dimensions[1]
      self.depth ||= package.dimensions[2]
      self.weight ||= package.kilograms
    end

    def initialize_from_hash(hash)
      self.width ||= hash[:width]
      self.height ||= hash[:height]
      self.depth ||= hash[:depth]
      self.weight ||= hash[:weight]
    end

    def hash_key
      key = [width, height, depth, weight].join('|')
      Digest::MD5.hexdigest(key)
    end

    def to_activeshipping
      ActiveShipping::Package.new(
        weight,
        [width, height, depth]
      )
    end
  end
end
