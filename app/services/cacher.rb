# frozen_string_literal: true

class Cacher < BasicService
  attr_reader :key
  attr_reader :value
  attr_reader :clear
  attr_reader :arguments
  attr_reader :block
  attr_reader :namespace

  def initialize(
    key:,
    clear: false,
    value: nil,
    args: nil,
    namespace: nil,
    block: nil
  )
    @key = key
    @clear = clear
    @value = value
    @arguments = Array(args)
    @block = block
    @namespace = namespace || []
  end

  def call
    if block
      cache[cache_key] ||= block.call(*arguments)
    elsif value
      cache[cache_key] ||= value
    elsif clear
      cache[cache_key] = nil
    end

    cache[cache_key]
  end

  private

  def cache
    @cache = Cache.new
  end

  def cache_key
    @cache_key ||= begin
      componenes = Array(namespace.dup)
      componenes << key
      componenes.compact.map(&:to_s).join(':')
    end
  end
end
