# frozen_string_literal: true

FactoryBot.define do
  factory :todo do
    text { Faker::Lorem.sentence }
    status { 'pending' }
  end
end
