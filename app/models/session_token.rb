class SessionToken < ActiveRecord::Base
  validates :user, :token, presence: true
  validates :token, uniqueness: true
  belongs_to :user
end
