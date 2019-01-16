class FirearmSerializer < ActiveModel::Serializer
  attributes :id, :name, :firearm_type, :description

  belongs_to :user
  has_many :outings
  has_many :barrels
end
