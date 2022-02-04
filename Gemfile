# frozen_string_literal: true

source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '3.1.0'

gem 'puma'
gem 'rails', '~> 7.0.1'
gem 'sprockets-rails'
gem 'sqlite3'
gem 'tzinfo-data', platforms: %i[mingw mswin x64_mingw jruby]

group :development, :test do
  gem 'debug', platforms: %i[mri mingw x64_mingw]
  gem 'faker'
  gem 'guard'
  gem 'guard-minitest'
end

group :development do
  gem 'brakeman'
  gem 'rubocop'
  gem 'rubocop-rails'
  gem 'spring'
end

group :test do
  gem 'factory_bot'
  gem 'minitest-reporters'
  gem 'shoulda'
  gem 'simplecov'
  gem 'simplecov-lcov'
  gem 'test-unit'
end
