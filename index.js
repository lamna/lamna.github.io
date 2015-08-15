$(document).ready(function(){
	$('#about').click(function(){
		$('#aboutme').slideToggle( "slow" );		
	});
	
	
	$('#projects').click(function(){
		$('#websites').slideToggle( "slow" );		
	});
	
	$( "#contact" ).click(function() {
		$( "#email_phone" ).slideToggle( "slow" );		
    });
		
});