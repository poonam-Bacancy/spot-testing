# frozen_string_literal: true

module PrintedCupcakes
  class UnprintedCupcakeFinder < BasicService
    def call
      Cupcake
      .all
      .joins(join_clause)
      .where(where_clause)
    end

    private

    def join_clause
      <<~SQL
        LEFT JOIN printed_cupcakes_cupcakes
        ON cupcakes.id = printed_cupcakes_cupcakes.cupcake_id
        LEFT JOIN printed_cupcakes
        ON printed_cupcakes_cupcakes.printed_cupcake_id = printed_cupcakes.id
      SQL
    end

    def where_clause
      <<~SQL
        printed_cupcakes.id IS NULL
      SQL
    end
  end
end
