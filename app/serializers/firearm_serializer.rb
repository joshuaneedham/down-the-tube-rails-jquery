class FirearmSerializer < ActiveModel::Serializer
  attributes :id, :name, :firearm_type, :description

  belongs_to :user
end
