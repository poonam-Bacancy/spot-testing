# frozen_string_literal: true

module Resolvers
  module Orders
    class Create
      class SetPreparationInformation < BasicService
        attr_reader :args
        attr_reader :errors

        def initialize(args:, errors:)
          @args = args
          @errors = errors
        end

        def call
          args[:ship_at] = ship_at
          args[:bake_at] = bake_at
        end

        private

        def ship_at
          @ship_at ||=
            if args[:shipping_method]&.downcase == 'pickup'
              args[:pickup_time].to_date
            else
              # calculate_ship_at
              args[:delivery_starting_at].to_date - 2.days
            end
        end

        def calculate_ship_at
          destination = ::Orders::Shipping::LocationConverter.call(args)
          packages = ::Orders::Shipping::PackagesBuilder.call(args)
          delivery_date = args[:delivery_starting_at].to_date

          Shipping::DateDeterminator.call(
            delivery_date: delivery_date,
            destination: destination,
            packages: packages
          )
        rescue => e
          log_error(e, :delivery_starting_at, 'No available shipping date')
        end

        def log_error(error, key, messages)
          Rails.logger.error(error)
          Rails.logger.error(error.backtrace)
          errors << { delivery_starting_at: Array(messages) }
          nil
        end

        def bake_at
          return unless ship_at
          ship_at - 1.day
        end
      end
    end
  end
end
