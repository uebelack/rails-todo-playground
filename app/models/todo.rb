# frozen_string_literal: true

class Todo < ApplicationRecord
  enum status: { pending: 0, done: 1 }
  validates :text, presence: true
  validates :status, presence: true

  after_initialize :init

  def init
    self.status ||= 'pending'
  end
end
