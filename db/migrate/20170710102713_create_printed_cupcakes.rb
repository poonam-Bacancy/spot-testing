class CreatePrintedCupcakes < ActiveRecord::Migration[5.1]
  def change
    create_table :printed_cupcakes do |t|
      t.jsonb :pdf_data

      t.timestamps
    end
  end
end
