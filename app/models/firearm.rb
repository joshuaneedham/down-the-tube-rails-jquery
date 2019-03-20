class Firearm < ApplicationRecord
  belongs_to :user
  has_many :barrels
  has_many :outings

  def next
    firearm = Firearm.where("id > ?", id).first
      if firearm
        firearm
      else
        Firearm.first
      end
  end
end