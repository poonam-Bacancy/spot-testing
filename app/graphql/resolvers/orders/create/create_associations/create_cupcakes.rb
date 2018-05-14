# frozen_string_literal: true

module Resolvers
  module Orders
    class Create
      class CreateAssociations
        class CreateCupcakes < BasicService
          attr_reader :args
          attr_reader :order
          attr_reader :errors

          def initialize(args:, order:, errors:)
            @args = args
            @order = order
            @errors = errors
          end

          def call
            return unless order

            args.map do |original_cupcake_args|
              cupcake_args = transform_cupcake_args(original_cupcake_args)
              cupcake = Cupcake.create(cupcake_args)
              errors << (cupcake.errors.any? ? cupcake.errors.to_h : nil)

              if cupcake.persisted? && original_cupcake_args[:encoded_image]
                cupcake.image_data_uri = original_cupcake_args[:encoded_image]
                cupcake.save
                errors << (cupcake.errors.any? ? cupcake.errors.to_h : nil)
              end
            end
          end

          private

          def transform_cupcake_args(args)
            {
              order_id: order.id,
              kind: args[:type],
              quantity: args[:quantity],
              clipart_id: args[:clipart_id],
              font_id: args[:font_id],
              # image_data_uri: args[:encoded_image],
              message: [
                args[:first_line], args[:second_line], args[:third_line]
              ].map { |e| e.nil? ? '' : e }.join("\n"),
              font_options: {
                size: args[:text_size],
                curved: args[:curved],
                color: Color.find_by(id: args[:color_id])&.hex,
                first_line: args[:first_line],
                second_line: args[:second_line],
                third_line: args[:third_line]
              }
            }
          end
        end
      end
    end
  end
end
