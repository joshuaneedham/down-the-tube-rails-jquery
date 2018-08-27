class FirearmsController < ApplicationController
  before_action :set_firearm, only: %i[show edit update destroy]
  before_action :authenticate_user!

  def new
    @firearm = current_user.firearms.build
  end
  
  def destroy
    @firearm.destroy
      redirect_to firearms_path, notice: 'Firearm was successfully destroy. A Democrat loves you somewhere, LOL.'
  end

  private

  def set_firearm
    @firearm = Firearm.find_by(id: params[:id])
  end

  def firearm_params
    params.require(:firearm).permit(:name, :firearm_type, :description, :user_id)
  end
end