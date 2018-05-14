//= require rails-ujs
//= require jquery
//= require jquery.turbolinks
//= require jquery_ujs
//= require moment
//= require bootstrap-sprockets
//= require bootstrap-colorpicker
//= require bootstrap-datetimepicker
//= require turbolinks
//= require_tree .

function attachManualPrintGeneration() {
  var selector = '#trigger_print_generation'
  $(selector).on('click', function(e) {
    e.preventDefault();

    var email = window.prompt(
      "PDF generation may take a while.\n\n"+
      "Please, enter your email to receive a notification when the process "+
      "is done.\n\n",
      ""
    );

    if (email === null || email === '') {
      return;
    }

    $.ajax({
      url: '/admin/prints/trigger_generation',
      method: 'POST',
      data: {
        email: email
      }
    }).done(function(data) {
      $(selector + ' .fa').addClass('fa-spin fa-fw')
    });
  });
}

$(document).on('turbolinks:load', function() {
  $('.colorpicker').colorpicker()
  $('.datetimepicker').datetimepicker({ format: 'YYYY-MM-DD HH:mm' });
  attachManualPrintGeneration()
})
