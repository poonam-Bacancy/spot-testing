class RemoveDeliverCommentFromOrder < ActiveRecord::Migration[5.1]
  def change
    add_column :orders, :rush_order, :boolean, null: false, default: false
    add_column :orders, :additional_notes, :text, null: false, default: ''
    remove_column :orders, :deliver_comment, :text
    change_column :orders, :delivery_comment, :text, null: false, default: ''
  end
end
