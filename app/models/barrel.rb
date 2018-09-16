class Barrel < ApplicationRecord
  belongs_to :firearm

  def firearms_attributes=(firearm_attributes)
    firearm_attributes.values.each do |firearm_attribute|
      firearm = Firearm.new(firearm_attribute)
      self.firearms << firearm
    end
  end
end
