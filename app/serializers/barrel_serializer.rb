class BarrelSerializer < ActiveModel::Serializer
  attributes :id, :caliber, :barrel_type, :length, :twist, :contour, :rifling
  has_one :firearm
end
