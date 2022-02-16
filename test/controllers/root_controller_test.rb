# frozen_string_literal: true

require 'test_helper'

class RootControllerTest < ActionDispatch::IntegrationTest
  test 'should work' do
    get root_url
    assert_response :ok
  end
end
