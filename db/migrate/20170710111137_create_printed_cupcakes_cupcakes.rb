class CreatePrintedCupcakesCupcakes < ActiveRecord::Migration[5.1]
  def change
    create_table :printed_cupcakes_cupcakes do |t|
      t.belongs_to :printed_cupcake, foreign_key: true, null: false, index: true
      t.belongs_to :cupcake, foreign_key: true, null: false, index: true

      t.timestamps
    end
  end
end
