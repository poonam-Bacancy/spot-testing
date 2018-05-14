class AddPaymentDataToOrders < ActiveRecord::Migration[5.1]
  def change
    add_column(
      :orders,
      :payment_data,
      :jsonb,
      null: false,
      default: []
    )
  end
end
