# frozen_string_literal: true

class CreateOrders < ActiveRecord::Migration[5.1]
  def change
    create_table :orders do |t|
      t.money :base_price, null: false
      t.money :tax, null: false
      t.money :discount, null: false
      t.string :full_name, null: false
      t.string :email, null: false
      t.string :phone_number, null: false
      t.string :address
      t.string :apartment_number
      t.date :shipping_date
      t.string :shipping_method, null: false
      t.string :recipient_name
      t.string :recipient_phone_number
      t.boolean :doorman, null: false, default: false
      t.string :building_type
      t.string :delivery_comment, null: false, default: ''
      t.timestamp :delivery_starting_at
      t.timestamp :delivery_ending_at
      t.text :gift_message
      t.string :count_cupcakes_by, null: false, default: 'the_dozen'
      t.string :order_type, null: false, default: 'personal'
      t.string :company
      t.string :industry

      t.timestamps
    end
  end
end
