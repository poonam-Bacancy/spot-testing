class AddPricesToOrders < ActiveRecord::Migration[5.1]
  def change
    remove_column :orders, :tax, :money, null: false
    remove_column :orders, :discount, :money, null: false
    remove_column :orders, :base_price, :money, null: false

    add_column :orders, :units_price, :money, null: false
    add_column :orders, :cupcake_designs_price, :money, null: false
    add_column :orders, :gift_message_price, :money, null: false
    add_column :orders, :rush_order_price, :money, null: false
    add_column :orders, :shipping_price, :money, null: false
    add_column :orders, :discount, :money, null: false
    add_column :orders, :total, :money, null: false
  end
end
