class OutingsSerializer < ActiveModel::Serializer
  attributes :id, :date, :outing_type, :shots_fired

  belongs_to :firearm
  has_many :barrels
end
