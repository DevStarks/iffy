# == Schema Information
#
# Table name: session_tokens
#
#  id         :integer          not null, primary key
#  token      :string           not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class SessionToken < ActiveRecord::Base
  
  validates :user, :token, presence: true
  validates :token, uniqueness: true

  belongs_to :user

  after_initialize :set_token

  def set_token
    self.token = generate_session_token
  end

  private

  def generate_session_token
    SecureRandom::urlsafe_base64(16)
  end

end
