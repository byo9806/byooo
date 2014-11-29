class Byo < ActiveRecord::Base
  has_many :bls, through: :byobls
end
