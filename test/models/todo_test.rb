# frozen_string_literal: true

require 'test_helper'

class TodoTest < ActiveSupport::TestCase
  test "todo test factory should work" do
    todo = create(:todo)
    puts todo.text
    puts todo.status
  end
end
