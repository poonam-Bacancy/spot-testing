# frozen_string_literal: true

require 'spec_helper'
require File.expand_path('../../config/environment', __FILE__)

ENV['RAILS_ENV'] ||= 'test'

unless Rails.env.test?
  abort("The Rails environment is running in #{Rails.env} mode!")
end

require 'rspec/rails'
require 'support/factory_girl'
require 'webmock/rspec'
require 'vcr'

ActiveRecord::Migration.maintain_test_schema!

RSpec.configure do |config|
  config.infer_spec_type_from_file_location!
  config.filter_rails_from_backtrace!
end

VCR.configure do |config|
  config.cassette_library_dir = 'spec/vcr'
  config.hook_into :webmock
end
