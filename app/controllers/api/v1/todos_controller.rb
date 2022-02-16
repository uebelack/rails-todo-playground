# frozen_string_literal: true

module Api
  module V1
    class TodosController < ApplicationController
      def index
        @todos = Todo.all.order(:status, created_at: :desc)
      end

      def create
        @todo = Todo.create!(todo_params)
        render action: 'show', status: :created
      rescue ActiveRecord::RecordInvalid => e
        @errors = e.record.errors.map(&:full_message)
        render template: 'api/v1/errors/index', status: :bad_request
      end

      def update
        Todo.find(params[:id]).update!(todo_params)
      rescue ActiveRecord::RecordInvalid => e
        @errors = e.record.errors.map(&:full_message)
        render template: 'api/v1/errors/index', status: :bad_request
      rescue ActiveRecord::RecordNotFound => e
        @errors = e.full_message
        render template: 'api/v1/errors/index', status: :not_found
      end

      def destroy
        Todo.find(params[:id]).destroy!
      rescue ActiveRecord::RecordNotFound => e
        @errors = e.full_message
        render template: 'api/v1/errors/index', status: :not_found
      end

      private

      def todo_params
        params.require(:todo).permit(:text, :status)
      end
    end
  end
end
