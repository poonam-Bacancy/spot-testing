# frozen_string_literal: true

module PrintedCupcakes
  class PDFGenerator < BasicService
    LAYOUT = 'printed_cupcakes'
    TEMPLATE_PATH = 'printed_cupcakes/index'
    PDF_OPTIONS = {
      return_file: true,
      page_height: 287,
      page_width: 210,
      dpi: 72,
      disable_smart_shrinking: true,
      margin: {
        top: 5,
        bottom: 0,
        left: 0,
        right: 0
      }
    }.deep_freeze
    ROWS_PER_PAGE = 8
    COLUMN_PER_ROW = 6

    attr_reader :cupcakes

    def initialize(cupcakes: )
      @cupcakes = cupcakes
    end

    def call
      WickedPdf
        .new
        .pdf_from_string(
          html,
          pdf_options
        )
    end

    private

    def html
      ApplicationController
        .render(
          template: TEMPLATE_PATH,
          layout: LAYOUT,
          assigns: render_assigns
        )
        .gsub(/>\s+</, '><')
    end

    def render_assigns
      {
        fonts: fonts,
        cupcakes: cupcakes,
        cupcakes_partitioned_by_page: cupcakes_partitioned_by_page,
      }
    end

    def fonts
      @fonts ||= cupcakes.map { |c| c.font }.compact.uniq
    end

    def cupcakes_partitioned_by_page
      cupcakes_partitioned_by_row
        .each_slice(ROWS_PER_PAGE)
        .to_a
    end

    def cupcakes_partitioned_by_row
      expanded_cupcakes
        .each_slice(COLUMN_PER_ROW)
        .to_a
    end

    def expanded_cupcakes
      cupcakes.flat_map { |cupcake| Array(cupcake) * cupcake.quantity }
    end

    def pdf_options
      PDF_OPTIONS
    end
  end
end
