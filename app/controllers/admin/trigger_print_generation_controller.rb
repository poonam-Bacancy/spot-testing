# frozen_string_literal: true

module Admin
  class TriggerPrintGenerationController < AdminController
    def create
      PrintPdfsGeneratorJob.perform_later(params[:email].presence)
      head :ok
    end
  end
end
