$(document).ready(function() {
	$('#nume').focusout(function() {
		//take lenght of input value
		if ( $('#nume').val().length < 4 ){
		
			$('#erori-name').removeClass('hidden');
		}
		else {
			$('#erori-name').addClass('hidden');
		}
  });
  
   $('#email').focusout(function() {
		//take lenght of input value
		if ( $('#email').val().length < 4 ){
		
			$('#erori-email').removeClass('hidden');
		}
		else {
			$('#erori-email').addClass('hidden');
		}
  });
})