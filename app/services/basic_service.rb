# frozen_string_literal: true

class BasicService
  def self.call(*args)
    new(*args).call
  end

  def call
    raise(NotImplemented)
  end
end
