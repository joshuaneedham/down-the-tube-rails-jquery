class CreateJoinTableBarrelOuting < ActiveRecord::Migration[5.2]
  def change
    create_join_table :barrels, :outings do |t|
       t.index [:barrel_id, :outing_id]
       t.index [:outing_id, :barrel_id]
    end
  end
end
