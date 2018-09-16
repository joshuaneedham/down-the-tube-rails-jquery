require 'test_helper'

class BarrelsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @barrel = barrels(:one)
  end

  test "should get index" do
    get barrels_url
    assert_response :success
  end

  test "should get new" do
    get new_barrel_url
    assert_response :success
  end

  test "should create barrel" do
    assert_difference('Barrel.count') do
      post barrels_url, params: { barrel: { barrel_type: @barrel.barrel_type, caliber: @barrel.caliber, contour: @barrel.contour, firearm_id: @barrel.firearm_id, length: @barrel.length, rifling: @barrel.rifling, twist: @barrel.twist } }
    end

    assert_redirected_to barrel_url(Barrel.last)
  end

  test "should show barrel" do
    get barrel_url(@barrel)
    assert_response :success
  end

  test "should get edit" do
    get edit_barrel_url(@barrel)
    assert_response :success
  end

  test "should update barrel" do
    patch barrel_url(@barrel), params: { barrel: { barrel_type: @barrel.barrel_type, caliber: @barrel.caliber, contour: @barrel.contour, firearm_id: @barrel.firearm_id, length: @barrel.length, rifling: @barrel.rifling, twist: @barrel.twist } }
    assert_redirected_to barrel_url(@barrel)
  end

  test "should destroy barrel" do
    assert_difference('Barrel.count', -1) do
      delete barrel_url(@barrel)
    end

    assert_redirected_to barrels_url
  end
end
