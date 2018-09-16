class BarrelsController < ApplicationController
  before_action :set_barrel, only: [:show, :edit, :update, :destroy]

  # GET /barrels
  # GET /barrels.json
  def index
    @barrels = Barrel.all
  end

  # GET /barrels/1
  # GET /barrels/1.json
  def show
  end

  # GET /barrels/new
  def new
    @barrel = Barrel.new
  end

  # GET /barrels/1/edit
  def edit
  end

  # POST /barrels
  # POST /barrels.json
  def create
    @barrel = Barrel.new(barrel_params)

    respond_to do |format|
      if @barrel.save
        format.html { redirect_to @barrel, notice: 'Barrel was successfully created.' }
        format.json { render :show, status: :created, location: @barrel }
      else
        format.html { render :new }
        format.json { render json: @barrel.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /barrels/1
  # PATCH/PUT /barrels/1.json
  def update
    respond_to do |format|
      if @barrel.update(barrel_params)
        format.html { redirect_to @barrel, notice: 'Barrel was successfully updated.' }
        format.json { render :show, status: :ok, location: @barrel }
      else
        format.html { render :edit }
        format.json { render json: @barrel.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /barrels/1
  # DELETE /barrels/1.json
  def destroy
    @barrel.destroy
    respond_to do |format|
      format.html { redirect_to barrels_url, notice: 'Barrel was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_barrel
      @barrel = Barrel.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def barrel_params
      params.require(:barrel).permit(:caliber, :barrel_type, :length, :twist, :contour, :rifling, :firearm_id)
    end
end
