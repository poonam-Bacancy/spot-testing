# frozen_string_literal: true

class GraphQlController < ApplicationController
  skip_before_action :verify_authenticity_token
  def create
    graphql_response = SpotsNYCSchema.execute(
      query_string,
      variables: variables,
      context: context
    )

    render json: graphql_response
  end

  private

  def query_string
    params[:query]
  end

  def variables
    params[:variables].try(:to_unsafe_hash)
  end

  def context
    @context ||= {
      user: current_user
    }
  end

  def current_user
    # @current_user ||= User.find_by(id: auth_user[:id])
    nil
  end

  def auth_user
    @auth_user ||= JWT::Decoder.call(token: auth_token)
  end

  def auth_token
    @auth_token ||= begin
      token = request.headers['Authorization']
      return unless token
      token.scan(/^\s*token\s+(.+)$/i).flatten.first.presence
    end
  end
end
