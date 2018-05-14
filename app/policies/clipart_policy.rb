# frozen_string_literal: true

class ClipartPolicy < ApplicationPolicy
  def index?
    true
  end

  def show?
    true
  end

  def create?
    !user.nil?
  end

  def update?
    !user.nil?
  end

  def destroy?
    !user.nil?
  end

  def permitted_attributes
    return [] unless user
    %i[name category image_data image]
  end

  class Scope < Scope
    def resolve
      scope.all
    end
  end
end
