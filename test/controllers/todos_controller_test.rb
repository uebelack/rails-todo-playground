# frozen_string_literal: true

require 'test_helper'

class TodosControllerTest < ActionDispatch::IntegrationTest
  def setup
    Todo.delete_all
  end

  test 'should return all existing todos' do
    4.times { create(:todo) }

    get todos_url
    assert_response :ok

    assert_select 'title', 'Rails Todo Playground'
    assert_select '.todo-list-item', 4
  end

  test 'should sort descending by creation date' do
    create(:todo, text: 'A', created_at: 2.months.ago)
    create(:todo, text: 'B', created_at: 1.month)
    create(:todo, text: 'C')

    get todos_url
    assert_response :ok

    assert_select 'li:nth-child(1) > span', 'C'
    assert_select 'li:nth-child(2) > span', 'B'
    assert_select 'li:nth-child(3) > span', 'A'
  end

  test 'should create a new todo and show it' do
    post todos_url, params: { todo: { text: 'Take out the trash', status: 'pending' } }
    assert_response :ok

    assert_equal 'Take out the trash', Todo.last.text
    assert_equal 'pending', Todo.last.status

    assert_select 'li:nth-child(1) > span', 'Take out the trash'
  end

  test 'should handle errors during creation' do
    post todos_url, params: { todo: { status: 'pending' } }
    assert_response :ok
    assert_select '.error-list-item', "Text can't be blank"
  end

  test 'should update a todo' do
    todo = create(:todo, text: 'Test', status: 'pending')
    patch todo_url(todo.id), params: { todo: { text: 'Test 2', status: 'done' } }
    assert_response :ok

    todo.reload

    assert_equal 'Test 2', todo.text
    assert_equal 'done', todo.status
  end

  test 'should handle errors during update' do
    todo = create(:todo, text: 'Test', status: 'pending')
    patch todo_url(todo.id), params: { todo: { text: 'Text', status: '' } }
    assert_response :ok
    assert_select '.error-list-item', "Status can't be blank"
  end

  test 'should delete a todo' do
    todo = create(:todo)
    delete todo_url(todo.id)
    assert_raise(ActiveRecord::RecordNotFound) { assert todo.reload }
  end

  test 'should ignore non existing todo' do
    delete todo_url('fdsa')
    assert_response :redirect
  end
end
