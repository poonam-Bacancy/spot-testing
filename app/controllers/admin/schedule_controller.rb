# frozen_string_literal: true

module Admin
  class ScheduleController < AdminController
    def index
      display_type
      from
      to
      @collection = grouped_orders
    end

    private

    def grouped_orders
      hash = {}
      orders.each do |order|
        [:ship_at, :bake_at].each do |attribute|
          value = order.public_send(attribute)&.to_date
          next unless value
          hash[value] ||= Set.new
          hash[value] << order
        end
      end
      hash.default = Set.new
      hash
    end

    def orders
      scope
        .where(ship_at: (from..to))
        .or(scope.where(bake_at: (from..to)))
    end

    def scope
      @scope ||= policy_scope(Order)
    end

    def display_type
      @display_type ||=
        case params[:display_type]
        when 'monthly' then :monthly
        else :weekly
        end
    end

    def from
      @from ||= DateTime.parse(params[:from])
    rescue
      @from ||= default_from_time
    end

    def default_from_time
      case display_type
      when :monthly then DateTime.now.beginning_of_month
      else DateTime.now.beginning_of_day
      end
    end

    def to
      @to ||= DateTime.parse(params[:to])
    rescue
      @to ||= default_to_time
    end

    def default_to_time
      case display_type
      when :monthly then DateTime.now.end_of_month
      else 2.weeks.from_now.to_datetime
      end
    end
  end
end
