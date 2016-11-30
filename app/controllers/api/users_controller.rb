class Api::UsersController < ApplicationController

  respond_to :json

  def create
    @user = User.create(user_params)
    respond_with(@user)
  end

  private

  def user_params
    params.require(:user).permit(
      :first_name,
      :last_name,
      :email,
      :password,
      :session_token
    )
  end

end
