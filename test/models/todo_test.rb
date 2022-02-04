# frozen_string_literal: true

require 'test_helper'

class TodoTest < ActiveSupport::TestCase
  context 'validations' do
    should validate_presence_of(:text)
    should validate_presence_of(:status)
  end

  test 'todo should work' do
    todo = create(:todo)
    assert_not_nil todo.text
    assert_equal 'pending', todo.status
  end

  test 'todo initialize status to pending' do
    todo = Todo.new
    assert_equal 'pending', todo.status
  end
end
