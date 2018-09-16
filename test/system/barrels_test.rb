require "application_system_test_case"

class BarrelsTest < ApplicationSystemTestCase
  setup do
    @barrel = barrels(:one)
  end

  test "visiting the index" do
    visit barrels_url
    assert_selector "h1", text: "Barrels"
  end

  test "creating a Barrel" do
    visit barrels_url
    click_on "New Barrel"

    fill_in "Barrel Type", with: @barrel.barrel_type
    fill_in "Caliber", with: @barrel.caliber
    fill_in "Contour", with: @barrel.contour
    fill_in "Firearm", with: @barrel.firearm_id
    fill_in "Length", with: @barrel.length
    fill_in "Rifling", with: @barrel.rifling
    fill_in "Twist", with: @barrel.twist
    click_on "Create Barrel"

    assert_text "Barrel was successfully created"
    click_on "Back"
  end

  test "updating a Barrel" do
    visit barrels_url
    click_on "Edit", match: :first

    fill_in "Barrel Type", with: @barrel.barrel_type
    fill_in "Caliber", with: @barrel.caliber
    fill_in "Contour", with: @barrel.contour
    fill_in "Firearm", with: @barrel.firearm_id
    fill_in "Length", with: @barrel.length
    fill_in "Rifling", with: @barrel.rifling
    fill_in "Twist", with: @barrel.twist
    click_on "Update Barrel"

    assert_text "Barrel was successfully updated"
    click_on "Back"
  end

  test "destroying a Barrel" do
    visit barrels_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Barrel was successfully destroyed"
  end
end
