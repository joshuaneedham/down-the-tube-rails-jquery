class Outing < ApplicationRecord
  belongs_to :firearm
  belongs_to :user
  has_many :firearms, through: :user
  has_many :barrels, through: :firearm
  has_many :barrel_outings
  has_many :used_barrels, through: :barrel_outings, source: :barrel
  # scope :match_comps, -> { where(outing_type: "Match - Competition") }
  # scope :hunts, -> { where(outing_type: "Hunting") }
  # scope :ranges, -> { where(outing_type: "Range") }

  # def self.comp_match
  #   if !match_comps.empty?
  #     match_comps.last.firearm.name
  #   end
  # end

  # def self.hunting
  #   if !hunts.empty?
  #     hunts.last.firearm.name
  #   end
  # end

  # def self.range
  #   if !ranges.empty?
  #     ranges.last.firearm.name
  #   end
  # end

  def firearms_attributes=(firearm_attributes)
    firearm_attributes.values.each do |firearm_attribute|
      firearm = Firearm.new(firearm_attribute)
      self.firearms << firearm
    end
  end

end
