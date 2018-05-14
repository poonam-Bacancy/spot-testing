class AddScheduleFiledsToOrders < ActiveRecord::Migration[5.1]
  def change
    add_column :orders, :ship_at, :datetime
    add_column :orders, :bake_at, :datetime
  end
end
