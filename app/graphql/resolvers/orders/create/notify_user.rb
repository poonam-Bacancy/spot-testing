# frozen_string_literal: true

module Resolvers
  module Orders
    class Create
      class NotifyUser < BasicService
        attr_reader :order

        def initialize(order:)
          @order = order
        end

        def call
          NotificationMailer.placed_order(order.id).deliver_later
        end
      end
    end
  end
end
