# frozen_string_literal: true

class PromotionCodePolicy < ApplicationPolicy
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
    !user.nil?
  end

  def permitted_attributes
    return [] unless user
    %i[code expires_at kind amount]
  end

  class Scope < Scope
    def resolve
      scope.all
    end
  end
end
