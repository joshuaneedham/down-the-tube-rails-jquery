class FirearmSerializer < ActiveModel::Serializer
  attributes :id, :name, :firearm_type, :description
end
