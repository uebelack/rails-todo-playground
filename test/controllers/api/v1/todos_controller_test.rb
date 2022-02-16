# frozen_string_literal: true

require 'test_helper'

module Api
  module V1
    class TodosControllerTest < ActionDispatch::IntegrationTest
      def setup
        Todo.delete_all
      end

      test 'should return all existing todos' do
        4.times { create(:todo) }

        get api_v1_todos_url
        assert_response :ok

        json = JSON.parse(response.body, symbolize_names: true)
        expected = { todos: Todo.all.order(:status, created_at: :desc).map do |todo|
                              { id: todo.id, text: todo.text, status: todo.status }
                            end }
        assert_equal expected, json
      end

      test 'should sort descending by creation date' do
        create(:todo, text: 'A', created_at: 2.months.ago)
        create(:todo, text: 'B', created_at: 1.month)
        create(:todo, text: 'C')

        get api_v1_todos_url
        assert_response :ok

        json = JSON.parse(response.body)
        assert_equal 'C', json['todos'][0]['text']
        assert_equal 'B', json['todos'][1]['text']
        assert_equal 'A', json['todos'][2]['text']
      end

      test 'should create a new todo' do
        post api_v1_todos_url, params: { todo: { text: 'Take out the trash', status: 'pending' } }.to_json,
                               headers: { 'Content-Type' => 'application/json' }
        assert_response :created

        assert_equal 'Take out the trash', Todo.last.text
        assert_equal 'pending', Todo.last.status
      end

      test 'should handle errors during creation' do
        post api_v1_todos_url, params: { todo: { status: 'pending' } }.to_json,
                               headers: { 'Content-Type' => 'application/json' }
        assert_response :bad_request
        assert_equal ({ errors: ["Text can't be blank"] }), JSON.parse(response.body, symbolize_names: true)
      end

      test 'should update a todo' do
        todo = create(:todo, text: 'Test', status: 'pending')
        patch api_v1_todo_url(todo.id), params: { text: 'Test 2', status: 'done' }.to_json,
                                        headers: { 'Content-Type' => 'application/json' }
        assert_response :no_content

        todo.reload

        assert_equal 'Test 2', todo.text
        assert_equal 'done', todo.status
      end

      test 'should handle errors during update' do
        todo = create(:todo, text: 'Test', status: 'pending')
        patch api_v1_todo_url(todo.id), params: { text: 'Test 2', status: '' }.to_json,
                                        headers: { 'Content-Type' => 'application/json' }
        assert_response :bad_request
        assert_equal ({ errors: ["Status can't be blank"] }), JSON.parse(response.body, symbolize_names: true)
      end

      test 'should ignore non existing todo while updating' do
        patch api_v1_todo_url('tadat'), params: { text: 'Test 2', status: 'done' }.to_json,
                                        headers: { 'Content-Type' => 'application/json' }
        assert_response :not_found
      end

      test 'should delete a todo' do
        todo = create(:todo)
        delete api_v1_todo_url(todo.id)
        assert_raise(ActiveRecord::RecordNotFound) { assert todo.reload }
      end

      test 'should ignore non existing todo while deleting' do
        delete api_v1_todo_url('fdsa')
        assert_response :not_found
      end
    end
  end
end
