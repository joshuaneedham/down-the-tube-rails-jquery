class BarrelSerializer < ActiveModel::Serializer
  attributes :id, :caliber, :barrel_type, :length, :twist, :contour, :rifling, :shots_fired
  has_one :firearm
end
