# frozen_string_literal: true

require 'image_processing/mini_magick'
require 'fastimage'

class ImageUploader < Shrine
  CUPCAKE_PADDING = 30

  include ImageProcessing::MiniMagick
  plugin :versions
  plugin :store_dimensions
  plugin :data_uri

  def process(io, context)
    return super(io, context) if context[:phase] != :store
    process_for_store(io, context)
  end

  private

  def process_for_store(io, _context)
    original = io.download
    large = resize_to_limit(original, 1200, 1200)
    medium = resize_to_limit(large, 600, 600)
    small = resize_to_limit(medium, 300, 300)
    preload = resize_to_limit(small, 32, 32)
    cupcake = create_cupcake_version(small)

    {
      original: original, large: large, medium: medium, small: small,
      preloader: preload, cupcake: cupcake
    }
  end

  def create_cupcake_version(io)
    # image =
    #   resize_and_pad(io, 300, 300, background: "transparent", gravity: "Center")
    # with_minimagick(image) do |img|
    #   img.combine_options do |cmd|
    #     cmd.border "#{CUPCAKE_PADDING}x#{CUPCAKE_PADDING}"
    #     cmd.bordercolor "rgba(255,255,255,0)"
    #   end
    # end
    resize_and_pad(io, 300, 300, background: "transparent", gravity: "Center")
  end
end
