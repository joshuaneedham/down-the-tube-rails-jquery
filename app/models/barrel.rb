class Barrel < ApplicationRecord
  belongs_to :firearm
  has_many :barrel_outings
  has_many :outings, through: :barrel_outings

  


  def firearms_attributes=(firearm_attributes)
    firearm_attributes.values.each do |firearm_attribute|
      firearm = Firearm.new(firearm_attribute)
      self.firearms << firearm
    end
  end
  
  def shots_fired
    shots = 0
    self.firearm.outings.each do |outing|
      shots += outing.shots_fired
    end
    shots
  end
  
end
