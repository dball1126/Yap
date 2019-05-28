class Api::UsersController < ApplicationController
    
    def new
        @user = User.new
    end

    def index
        @users = User.all
    end

    def create
        @user = User.new(user_params)
        if @user
            login!(@user)
        else
            render json: @user.errors.full_messages
        end
    end


    def show
        @user
    end

    private
    def user_params
        params.require(:user).permit(:username, :password);
    end
end