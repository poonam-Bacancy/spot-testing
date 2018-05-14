# frozen_string_literal: true

module Admin
  class PrintsController < ResourcefulController
    private

    def model_name
      'PrintedCupcake'
    end

    def order_arguments
      {
        created_at: :desc
      }
    end
  end
end
