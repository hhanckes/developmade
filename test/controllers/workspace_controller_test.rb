require 'test_helper'

class WorkspaceControllerTest < ActionController::TestCase
  test "should get develop" do
    get :develop
    assert_response :success
  end

end
