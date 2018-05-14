# frozen_string_literal: true

require 'shrine'
require 'shrine/storage/s3'
require 'shrine/storage/file_system'

secrets = Rails.application.secrets.with_indifferent_access

s3_options = {
  access_key_id: secrets.dig(:aws, 's3', 'access_key_id'),
  secret_access_key: secrets.dig(:aws, 's3', 'secret_access_key'),
  region: secrets.dig(:aws, 's3', 'region'),
  bucket: secrets.dig(:aws, 's3', 'bucket')
}

storages = {
  cache: nil,
  store: nil
}

storages.keys.each do |store|
  storages[store] = if secrets.dig(:aws, :s3, :use)
                      Shrine::Storage::S3.new(prefix: store, **s3_options)
                    else
                      Shrine::Storage::FileSystem.new(
                        'public',
                        prefix: "uploads/#{store}"
                      )
                    end
end

Shrine.storages = storages

Shrine.plugin :activerecord
Shrine.plugin :cached_attachment_data
