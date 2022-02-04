# frozen_string_literal: true

class TodosController < ApplicationController
  def index
    @todos = Todo.all.order(:status, created_at: :desc)
  end

  def create
    begin
      Todo.create!(todo_params)
    rescue ActiveRecord::RecordInvalid => e
      @errors = e.record.errors.map(&:full_message)
    end
    @todos = Todo.all.order(:status, created_at: :desc)
    render action: 'index'
  end

  def update
    begin
      Todo.find(params[:id]).update!(todo_params)
    rescue ActiveRecord::RecordInvalid => e
      @errors = e.record.errors.map(&:full_message)
    end
    @todos = Todo.all.order(:status, created_at: :desc)
    render action: 'index'
  end

  def destroy
    begin
      Todo.find(params[:id]).destroy!
    rescue ActiveRecord::RecordNotFound
      # that's fine
    end
    redirect_to action: 'index'
  end

  private

  def todo_params
    params.require(:todo).permit(:text, :status)
  end
end
