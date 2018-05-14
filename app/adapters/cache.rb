# frozen_string_literal: true

class Cache
  class << self
    attr_accessor :driver
  end

  DEFAULT_CACHE_KEY = :cache

  attr_reader :driver
  attr_reader :cache_key

  def self.[](key)
    new[key]
  end

  def self.[]=(key, value)
    new[key] = value
  end

  def initialize(driver: nil, cache_key: nil)
    self.class.driver ||= Redis.new
    @driver = driver || self.class.driver
    @cache_key = cache_key || DEFAULT_CACHE_KEY
  end

  def [](key)
    driver.hget(cache_key, key)
  end

  def []=(key, value)
    results =
      driver.multi do
        driver.hset(cache_key, key, value)
        driver.hget(cache_key, key)
      end
    results.last
  end
end
