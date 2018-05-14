# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Orders::PriceCalculators::CupcakeDesignPrice, type: :service do
  describe '#call' do
    context 'less than 4 design' do
      let(:order_args) do
        {
          cupcakes: [
            {},
            {}
          ]
        }.with_indifferent_access
      end

      subject { described_class.new(order_args) }

      it 'returns 0' do
        expect(subject.call).to eq(0.0)
      end
    end

    context 'exactly 4 design' do
      let(:order_args) do
        {
          cupcakes: [
            {},
            {},
            {},
            {}
          ]
        }.with_indifferent_access
      end

      subject { described_class.new(order_args) }

      it 'returns 0' do
        expect(subject.call).to eq(0.0)
      end
    end

    context 'more than 4 design' do
      let(:order_args) do
        {
          cupcakes: [
            {},
            {},
            {},
            {},
            {},
            {}
          ]
        }.with_indifferent_access
      end

      subject { described_class.new(order_args) }

      it 'returns the differance times the price' do
        expect(subject.call).to eq(2.0)
      end
    end
  end
end
