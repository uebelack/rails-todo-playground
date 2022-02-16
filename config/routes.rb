# frozen_string_literal: true

Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :todos, only: %i[index create update destroy], defaults: { format: 'json' }
    end
  end
  root 'root#index'
end
