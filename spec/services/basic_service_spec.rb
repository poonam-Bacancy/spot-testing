# frozen_string_literal: true

require 'rails_helper'

RSpec.describe BasicService, type: :service do
  describe '.call' do
    it 'initializes an instance with the passed arguments' do
      return_value = Object.new

      instance = double(:instance, call: return_value)

      allow(described_class).to(
        receive(:new)
        .and_return(instance)
      )
      expect(described_class).to(
        receive(:new)
        .and_return(instance)
      )

      described_class.call
    end

    it 'calls the #call method on an instance' do
      return_value = Object.new

      instance = double(:instance, call: return_value)

      allow(described_class).to(
        receive(:new)
        .and_return(instance)
      )

      expect(instance).to receive(:call).and_return(return_value)
      described_class.call
    end
  end
end
