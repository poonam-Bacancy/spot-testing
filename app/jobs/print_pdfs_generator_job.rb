class PrintPdfsGeneratorJob < ApplicationJob
  queue_as :default

  def perform(email = nil)
    printed_cupcake = PrintedCupcakesGenerator.call
    if email.present?
      NotificationMailer.pdfs_generated(email, printed_cupcake.id).deliver_now
    end
  rescue => error
    NotificationMailer.pdf_generation_error(
      email, error.class.to_s, error.message
    ).deliver_now if email
  end
end
