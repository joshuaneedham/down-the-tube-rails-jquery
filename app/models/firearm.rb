class Firearm < ApplicationRecord
  belongs_to :user
  has_many :barrels

end