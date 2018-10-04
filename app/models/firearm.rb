class Firearm < ApplicationRecord
  belongs_to :user
  has_many :barrels
  has_many :outings

end