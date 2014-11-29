class CreateByobls < ActiveRecord::Migration
  def change
    create_table :byobls do |t|
      t.belongs_to :byo
      t.belongs_to :bl
      t.integer :upgrade, null: false, default: 1

      t.timestamps
    end
  end
end
