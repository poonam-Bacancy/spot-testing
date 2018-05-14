require_relative 'boot'

ENV['RANSACK_FORM_BUILDER'] = '::SimpleForm::FormBuilder'

require "rails"
# Pick the frameworks you want:
require "active_model/railtie"
require "active_job/railtie"
require "active_record/railtie"
require "action_controller/railtie"
require "action_mailer/railtie"
require "action_view/railtie"
require "action_cable/engine"
require "sprockets/railtie"
# require "rails/test_unit/railtie"

require 'ice_nine'
require 'ice_nine/core_ext/object'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Spotsync
  class Application < Rails::Application
    config.active_job.queue_adapter = :sidekiq
    config.load_defaults 5.1
    config.eager_load_paths << Rails.root.join('lib')

    config.action_mailer.default_url_options = {
      host: Rails.application.secrets[:host]
    }

    config.middleware.insert_before 0, Rack::Cors do
      allow do
        origins '*'
        resource '*',
          :headers => :any,
          :methods => :any
      end
    end
  end
end
