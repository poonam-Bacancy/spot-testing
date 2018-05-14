# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Orders::PriceCalculators::GiftMessagePrice, type: :service do
  describe '#call' do
    context 'has gift message' do
      let(:order_args) do
        {
          gift_message: 'Love ya!'
        }.with_indifferent_access
      end

      subject { described_class.new(order_args) }

      it 'returns 1.0' do
        expect(subject.call).to eq(1.0)
      end
    end

    context 'has an empty gift message' do
      let(:order_args) do
        {
          gift_message: ''
        }.with_indifferent_access
      end

      subject { described_class.new(order_args) }

      it 'returns 0' do
        expect(subject.call).to eq(0.0)
      end
    end

    context 'has no gift message' do
      let(:order_args) do
        {
        }.with_indifferent_access
      end

      subject { described_class.new(order_args) }

      it 'returns 0' do
        expect(subject.call).to eq(0.0)
      end
    end
  end
end
