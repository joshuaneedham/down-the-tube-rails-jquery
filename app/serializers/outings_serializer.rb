class OutingsSerializer < ActiveModel::Serializer
  attributes :id, :date, :outing_type, :shots_fired

  belongs_to :firearm
  belongs_to :user
  has_many :barrels
end
