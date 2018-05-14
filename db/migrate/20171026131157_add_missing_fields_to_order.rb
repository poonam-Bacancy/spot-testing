class AddMissingFieldsToOrder < ActiveRecord::Migration[5.1]
  def change
    add_column :orders, :shareable_images, :bool, default: false, null: false
    add_column :orders, :shipping_cost, :money, null: false
  end
end
