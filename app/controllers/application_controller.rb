class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  helper_method :logged_in?, :current_user

  def logged_in?
    !!current_user
  end

  def current_user
    @current_user ||= SessionToken.joins(:user).find_by_token(session[:session_token])
  end

  def login!(user)
    session_token = SessionToken.create(user_id: user.id)
    session[:session_token] = session_token.token
    @current_user = user
  end

  def logout!
    session_token = SessionToken.find_by_token(session[:session_token])
    session_token.delete
    session[:session_token] = nil
    @current_user = nil
  end

end
