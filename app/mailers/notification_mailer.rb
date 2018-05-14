class NotificationMailer < ApplicationMailer
  def placed_order(order_id)
    @order = Order.find(order_id)
    subject = '[SpotsNYC] Placed order'

    mail to: @order.email, subject: subject
  end

  def pdf_generation_error(email, error_class, error_message)
    @error_class = error_class
    @error_message = error_message
    subject = '[SpotsNYC] An error occured'
    mail to: email, subject: subject
  end

  def pdfs_generated(email, printed_cupcake_id)
    @printed_cupcake = PrintedCupcake.find_by(id: printed_cupcake_id)
    subject = '[SpotsNYC] Cupcake PDFs generated'

    mail to: email, subject: subject
  end
end
