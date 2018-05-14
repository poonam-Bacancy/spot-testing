class CreateCupcakes < ActiveRecord::Migration[5.1]
  def change
    create_table :cupcakes do |t|
      t.string :kind, default: 'image', null: false
      t.jsonb :image_data
      t.belongs_to :clipart, foreign_key: true
      t.text :message
      t.belongs_to :font, foreign_key: true
      t.jsonb :font_options, default: {}, null: false
      t.integer :quantity, default: 0, null: false
      t.belongs_to :order, foreign_key: true, index: true, null: false
      t.belongs_to :cupcake_type, foreign_key: true, index: true, null: false

      t.timestamps
    end
  end
end
