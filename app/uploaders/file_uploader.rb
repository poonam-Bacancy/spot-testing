# frozen_string_literal: true

class FileUploader < Shrine
  plugin :store_dimensions
end
