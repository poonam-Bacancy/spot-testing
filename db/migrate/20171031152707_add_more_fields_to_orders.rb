class AddMoreFieldsToOrders < ActiveRecord::Migration[5.1]
  def change
    add_column :orders, :deliver_comment, :text
  end
end
