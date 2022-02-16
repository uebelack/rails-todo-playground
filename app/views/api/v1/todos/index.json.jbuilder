# frozen_string_literal: true

json.todos do
  json.partial! 'todo', collection: @todos, as: :todo
end
