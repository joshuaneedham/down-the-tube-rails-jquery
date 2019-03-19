class Barrel < ApplicationRecord
  belongs_to :firearm
  


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
