class CreateBls < ActiveRecord::Migration
  def change
    create_table :bls do |t|
      t.string :name
      t.string :description
      t.string :img

      t.timestamps
    end
  end

  add_index :bls, :name, unique: true
end
