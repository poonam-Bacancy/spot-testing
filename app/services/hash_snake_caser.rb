class HashSnakeCaser < BasicService
  def initialize(hash, in_place = false)
    @hash = hash
    @in_place = in_place
  end

  def call
    return unless hash
    hash_instance = in_place ? hash : hash.dup
    convert(hash_instance)
    hash_instance
  end

  protected

  attr_reader :hash
  attr_reader :in_place

  private

  def convert(hash)
    return hash unless hash.is_a?(Hash)

    hash.keys.each do |key|
      next unless underscoreable_key?(key)
      value = hash.delete(key)
      case value
      when Hash then value = convert(value)
      when Array then value = value.map { |e| convert(e) }
      end
      hash[underscore_key(key)] = value
    end
    hash
  end

  def underscoreable_key?(key)
    key.class == Symbol || key.is_a?(String)
  end

  def underscore_key(key)
    symbolize = (key.class == Symbol)
    new_key = key.to_s.underscore
    return new_key unless symbolize
    new_key.to_sym
  end
end
