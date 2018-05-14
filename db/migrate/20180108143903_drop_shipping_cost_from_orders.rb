class DropShippingCostFromOrders < ActiveRecord::Migration[5.1]
  def change
    remove_column :orders, :shipping_cost, :money, null: false
  end
end
