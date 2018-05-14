# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Orders::PriceCalculators::RushOrderPrice, type: :service do
  describe '#call' do
    context 'rush orders set to true' do
      let(:order_args) do
        {
          rush_order: true
        }.with_indifferent_access
      end

      subject { described_class.new(order_args) }

      it 'returns 15.0' do
        expect(subject.call).to eq(15.0)
      end
    end

    context 'rush order set to false' do
      let(:order_args) do
        {
          rush_order: false
        }.with_indifferent_access
      end

      subject { described_class.new(order_args) }

      it 'returns 0' do
        expect(subject.call).to eq(0.0)
      end
    end

    context 'rush order not set at all' do
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
