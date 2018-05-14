class AddWrapAroundLabelMessageToOrders < ActiveRecord::Migration[5.1]
  def change
    add_column :orders, :wrap_around_label_message, :text, null: false, default: ''
    add_column :orders, :pickup_time, :datetime
  end
end
