# frozen_string_literal: true

class OrderPolicy < ApplicationPolicy
  def index?
    !user.nil?
  end

  def show?
    !user.nil?
  end

  def create?
    !user.nil?
  end

  def update?
    !user.nil?
  end

  def destroy?
    false
  end

  class Scope < Scope
    def resolve
      return scope.none unless user
      scope.all
    end
  end
end
