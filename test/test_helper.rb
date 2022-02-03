# frozen_string_literal: true

require 'simplecov'
SimpleCov.start

ENV['RAILS_ENV'] ||= 'test'
require_relative '../config/environment'
require 'faker'
require 'shoulda'
require 'rails/test_help'

FactoryBot.find_definitions if FactoryBot.factories.count.zero?

Shoulda::Matchers.configure do |config|
  config.integrate do |with|
    with.test_framework :minitest
    with.library :rails
  end
end

module ActiveSupport
  class TestCase
    include FactoryBot::Syntax::Methods
    parallelize(workers: :number_of_processors)
    fixtures :all
  end
end

Minitest::Reporters.use! [Minitest::Reporters::SpecReporter.new, Minitest::Reporters::HtmlReporter.new]