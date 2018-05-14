# frozen_string_literal: true

module Shipping
  class DateDeterminator < BasicService
    class << self
      attr_accessor :cache
    end

    CACHE_NAMESPACE = %i[shipping date_determiner date].freeze

    attr_reader :delivery_date
    attr_reader :destination
    attr_reader :packages

    def initialize(delivery_date:, destination:, packages:)
      @destination = destination
      @packages = packages
      @delivery_date = delivery_date
      if @delivery_date.respond_to?(:to_date)
        @delivery_date = @delivery_date.to_date
      end
    end

    def call
      binary_search(estimated_date_range, delivery_date) do |date|
        rate = fetch_rate_for_date(date)
        rate&.delivery_date
      end
    end

    private

    def estimated_date_range
      end_date = delivery_date
      start_date = delivery_date - 7.days

      end_date = end_date.to_date if end_date.respond_to?(:to_date)
      start_date = start_date.to_date if start_date.respond_to?(:to_date)

      (start_date..end_date).to_a
    end

    def binary_search(range, target, &block)
      return if range.nil? || range.count.zero?
      return if target.nil? || block.nil?

      pivot = (range.count - 1) / 2
      member = range[pivot]
      value = cache_value(member) { |request| block.call(request) }

      return member if value == target

      range = (value > target) ? range[0...pivot] : range[(pivot + 1)..-1]
      binary_search(range, target, &block)
    end

    def cache_value(request, &block)
      Cacher.call(
        key: request,
        namespace: namespace,
        args: request,
        block: block
      ).try(:to_date)
    end

    def namespace
      @namespace ||=
        CACHE_NAMESPACE
        .dup
        .concat([location_key, package_key])
        .compact
    end

    def location_key
      @location_key ||= destination&.hash_key
    end

    def package_key
      @package_key ||= begin
        key =
          packages
          .compact
          .map(&:hash_key)
          .sort
          .join('|')
        Digest::MD5.hexdigest(key)
      end
    end

    def fetch_rate_for_date(date)
      rates =
        RateFetcher.call(
          packages: packages,
          destination: destination,
          turn_around_time: date.to_datetime
        )
      RatePicker.call(rates: rates)
    end
  end
end
