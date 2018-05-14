class CreateCupcakeTypes < ActiveRecord::Migration[5.1]
  def change
    create_table :cupcake_types do |t|
      t.string :name, null: false, unique: true
      t.jsonb :image_data

      t.timestamps
    end
  end
end
