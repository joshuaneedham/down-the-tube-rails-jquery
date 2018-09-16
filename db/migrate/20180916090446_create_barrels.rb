class CreateBarrels < ActiveRecord::Migration[5.2]
  def change
    create_table :barrels do |t|
      t.string :caliber
      t.string :barrel_type
      t.decimal :length, precision: 4, scale: 4
      t.decimal :twist, precision: 4, scale: 4
      t.string :contour
      t.string :rifling
      t.references :firearm, foreign_key: true

      t.timestamps null: false
    end
  end
end
