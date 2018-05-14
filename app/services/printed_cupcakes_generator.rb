# frozen_string_literal: true

class PrintedCupcakesGenerator < BasicService
  PDF_OPTIONS = {}.deep_freeze

  def call
    return unless unprinted_cupcakes.any?

    printed_cupcake = PrintedCupcake.create!(printed_cupcake_attributes)
    unprinted_cupcakes.map do |cupcake|
      PrintedCupcakesCupcake.create!(
        printed_cupcake: printed_cupcake, cupcake: cupcake
      )
    end

    printed_cupcake
  end

  private

  def printed_cupcake_attributes
    {
      pdf: pdf_file
    }
  end

  def pdf_file
    @pdf_file ||=
      PrintedCupcakes::PDFGenerator.call(cupcakes: unprinted_cupcakes)
  end

  def unprinted_cupcakes
    @unprinted_cupcakes ||= PrintedCupcakes::UnprintedCupcakeFinder.call
  end
end
