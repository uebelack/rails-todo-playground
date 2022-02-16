# frozen_string_literal: true

source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '3.1.0'

gem 'importmap-rails'
gem 'jbuilder'
gem 'puma'
gem 'rails', '~> 7.0.1'
gem 'sprockets-rails'
gem 'sqlite3'
gem 'tzinfo-data', platforms: %i[mingw mswin x64_mingw jruby]

group :development, :test do
  gem 'debug', platforms: %i[mri mingw x64_mingw]
  gem 'guard'
  gem 'guard-minitest'
end

group :development do
  gem 'brakeman'
  gem 'guard-livereload'
  gem 'rack-livereload'
  gem 'rubocop'
  gem 'rubocop-rails'
  gem 'spring'
end

group :test do
  gem 'factory_bot'
  gem 'faker'
  gem 'minitest-reporters'
  gem 'shoulda'
  gem 'simplecov'
  gem 'simplecov-lcov'
end
