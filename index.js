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
	
	
	
	(function() {

    var quotes = $(".quotes");
    var quoteIndex = -1;
    
    function showNextQuote() {
        ++quoteIndex;
        quotes.eq(quoteIndex % quotes.length)
            .fadeIn(2000)
            .delay(2000)
            .fadeOut(2000, showNextQuote);
    }
    
    showNextQuote();
    
})();
		
});