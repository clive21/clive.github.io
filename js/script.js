jQuery.fn.exists = function(){return this.length>0;}

/////////////////////////////////////////////// Window load function //////////////////////////////////////////////////////

$(window).load(function(e) {
	
	// will first fade out the loading animation
    $(".loading_img").fadeOut();
    // will fade out the whole DIV that covers the website.
    $("#pre-loading").delay(600).fadeOut("slow");
	
	
		  
});





/* Function to scroll to top */
var backTop = function() {
        $(window).scroll(function() {
            if ( $(this).scrollTop() > 800 ) {
                $('#back-top').addClass('show');
            } else {
                $('#back-top').removeClass('show');
            }
        }); 

        $('#back-top').on('click', function() {
            $('html, body').animate({ scrollTop: 0 }, 1000);
        return false;
        });
    };
	





////////////////////////////////////////// Begin document ready function /////////////////////////////////////////


$(function(){
	
	
	"use strict";
	
	$('.skill1').css('width', '71%');
	$('.skill2').css('width', '85%');
	$('.skill3').css('width', '76%');
	$('.skill4').css('width', '53%');
	$('.skill5').css('width', '69%');
	
	
	
	
	$('.next').click(function(){
        $('.navigation > .active').next('li').find('a').trigger('click');
    });

	$('.previous').click(function(){
	    $('.navigation > .active').prev('li').find('a').trigger('click');
	});
	
	
	
	
// end bracket for document ready function 
});

//////////////////////////////////////////////////// End document ready function ///////////////////////////////////////////////////////