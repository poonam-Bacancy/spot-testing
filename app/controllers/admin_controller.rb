# frozen_string_literal: true

class AdminController < ApplicationController
  include Pundit
  layout 'admin'

  def current_user
    OpenStruct.new
  end
end
