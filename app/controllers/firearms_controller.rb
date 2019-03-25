class FirearmsController < ApplicationController
  before_action :set_firearm, only: %i[create show edit update destroy next]
  before_action :authenticate_user!
  skip_before_action :verify_authenticity_token

  def index
    @firearms = current_user.firearms.includes(:outings).all
    respond_to do |f|
      f.html { render :index }
      f.json {render json: @firearms}
    end
  end

  def show
    @firearm = Firearm.find_by(id: params[:id])
    respond_to do |f|
      f.html { render :show }
      f.json {render json: @firearm}
    end
  end

  def new
    @firearm = current_user.firearms.build
  end
  
  def edit; end
  
  def create
    @firearm = current_user.firearms.build(firearm_params)
    if @firearm.save
      redirect_to json: @firearms
    else
      render :new
    end
  end
  
  def next
    @next_firearm = @firearm.next
    render json: @next_firearm
  end
  
  def update
    if @firearm.update(firearm_params)
      render json: @firearms, notice: 'Firearm was successfully updated'
    else
      render :edit
    end
  end

  def destroy
    @firearm.destroy
    redirect_to @firearms_path, notice: 'Firearm was successfully destroy. A democrate loves you.'
  end

  private

  def set_firearm
    @firearm = Firearm.find_by(id: params[:id])
  end

  def firearm_params
    params.require(:firearm).permit(:name, :firearm_type, :description, :user_id)
  end
end