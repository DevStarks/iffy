class Api::SessionController < ApplicationController
  def create
    @user = User.find_by_email(
      params[:user][:email]
    )
    if @user && @user.authenticate(params[:user][:password])
      login!(@user)
      render json: @user
    else
      render json: ["Invalid credentials"], status: 422
    end
  end

  def destroy
    if !logged_in?
      render json: ["Not logged in!"], status: 404
    else
      logout!
      render json: {}
    end
  end

  def session_params
    params.require(:user).permit(:username, :password)
  end
end
