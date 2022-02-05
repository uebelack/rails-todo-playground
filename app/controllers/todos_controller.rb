# frozen_string_literal: true

class TodosController < ApplicationController
  def index
    @todos = Todo.all.order(:status, created_at: :desc)
  end

  def create
    @todos = Todo.all.order(:status, created_at: :desc)
    begin
      Todo.create!(todo_params)
      redirect_to action: 'index'
    rescue ActiveRecord::RecordInvalid => e
      @errors = e.record.errors.map(&:full_message)
      render action: 'index', status: :unprocessable_entity
    end
  end

  def update
    @todos = Todo.all.order(:status, created_at: :desc)
    begin
      Todo.find(params[:id]).update!(todo_params)
      redirect_to action: 'index'
    rescue ActiveRecord::RecordInvalid => e
      @errors = e.record.errors.map(&:full_message)
      render action: 'index', status: :unprocessable_entity
    end
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
