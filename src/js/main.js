$(document).ready(function() {
    // Open modal
    $('#open_modal').click(function() {
        $('#contact_modal').css(
            {
              'display': 'block'
            }
        )
        // $('#mybody').css(
        //     {

        //         'overflow': 'hidden'
        //     }
        //     )
    });
    // Close modal
    $('#close_contact_modal').click(function(){
        $('#contact_modal').css(
            {
                'display': 'none'
            }
        )
    });

    $('#close_succes_modal').click(function(){
        $('#succes_modal').css(
            {
                'display': 'none'
            }
        )
    });

    $('#close_error_modal').click(function(){
        $('#error_modal').css(
            {
                'display': 'none'
            }
        )
    });

    // Send mail ajax

    
	$('#send_email').click(function(e){
		e.preventDefault();
		var data = {
			email: $('#email').val(),
			lastname: $('#lastname').val(),
			firstname: $('#firstname').val(),
			message: $('#message').val()
        };
        // Ajax
		$.ajax({
			url: "mail.php",
			type: 'POST',
			data: data,
			success: function(data) {
				$('#succes_modal').css({'display' : 'block'});
				setTimeout(function(){
					$('#succes_modal').css({'display' : 'none'});
					$('#email').val("");
					$('#lastname').val("");
					$('#firstname').val("");
					$('#message').val("")
				}, 3000);
			},
			error: function(data) {
				$('#error_modal').css({'display' : 'block'});
				setTimeout(function(){
					$('#error_modal').css({'display' : 'none'});
					$('#email').val("");
					$('#lastname').val("");
					$('#firstname').val("");
					$('#message').val("")
				}, 3000);
			}
		});
    });
});