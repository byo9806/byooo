class Bl < ActiveRecord::Base
  has_many :byos, through: :byobls
end
