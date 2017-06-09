jQuery.fn.exists = function(){return this.length>0;}

/////////////////////////////////////////////// Window load function //////////////////////////////////////////////////////

$(window).load(function(e) {
	
	// will first fade out the loading animation
    $(".loading_img").fadeOut();
    // will fade out the whole DIV that covers the website.
    $("#loading").delay(600).fadeOut("slow");
	
	
		  
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
	




var banner = function() {
        if ( $().nivoSlider ) {
           
			 $('#banner-slider').nivoSlider({
				 effect: 'fade', 
				 pauseOnHover: true,
				 controlNav: false, 
				 animSpeed: 1000,
				 pauseTime: 7000,
				 directionNav: false
				 
			 });

        } 
    };



var news_slider = function() {
        if ( $().nivoSlider ) {
           
			 $('#news-slider').nivoSlider({
				 effect: 'fade', 
				 pauseOnHover: true,
				 controlNav: false, 
				 animSpeed: 500,
				 pauseTime: 5000,
				 directionNav: false
			 });

        } 
    };
	
	
	
	var ticker = function() {
        if ( $().vTicker ) {
	           $('#ticker').vTicker();
		    }
      };
   
  
	


var item_slider = function() {
	if ( $().slick ) {
		$('.item_slider').slick({
		  infinite: false,
		  slidesToShow: 3,
		  slidesToScroll: 3,
		  autoplay:true,
		  autoplaySpeed: 5000,
		  pauseOnHover:false,
		  dots: true,
	      responsive: [
				{
				  breakpoint: 1024,
				  settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				  }
				},
				{
				  breakpoint: 600,
				  settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				  }
				},
				{
				  breakpoint: 480,
				  settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				  }
				}
			 ]		
			
			
		});
		
	}
	
};


var mobile_nav_arrow = function(){
	var icon = $(".nav li i")
	$(".mobile-toggle").click( function(){
		
		if($(this).next().is(":visible") == false){
			$(this).removeClass("fa-chevron-down").addClass("fa-chevron-up");
			$(this).parent().siblings().find("i").addClass("fa-chevron-down");
		}
		else{
			$(this).removeClass("fa-chevron-up").addClass("fa-chevron-down");
		}
		
	});
	
}



////////////////////////////////////////// Begin document ready function /////////////////////////////////////////


$(function(){
	
	backTop();
	banner();
	backTop();
    ticker();
	news_slider();
	item_slider();
	mobile_nav_arrow();
	
	

 /* Add highlight to parent when hover on child items*/	 
  if ($(window).width() >= 1024){	
	$(".nav .dropdown-menu").hover(
	  function(){ // Mouse Over
	   $(this).parent().addClass("open");
	  },
	  function(){ // Mouse Out
		$(this).parent().removeClass("open");
	  }
	);
  }
	
	
	
	
/* Ligthbox plugins*/
	
/*
	if ( $().fancybox ) {
	    $(".fancybox").fancybox({
			padding : 0
		});
	}
*/


/*	
	if ( $().swipebox ) {
	    $(".swipebox").swipebox({
			   removeBarsOnMobile : false,
			   hideBarsDelay : 0
			});
	}
 */
	
	
/* http://dimsemenov.com/plugins/magnific-popup/documentation.html	*/
	
	if ( $().magnificPopup ) {
	    $(".popup-image").magnificPopup({
          type: 'image',
          closeBtnInside: false,
          fixedContentPos: true,
          mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
          image: {
            verticalFit: false
          },
          zoom: {
            enabled: true,
            duration: 300 
          }
        });
  	}
	
	
	if ( $().magnificPopup ) {
		$('.gallery').each(function() { // the containers for all your galleries
			$(this).magnificPopup({
				delegate: 'a', // the selector for gallery item
				type: 'image',
				gallery: {
				  enabled:true
				},
				 zoom: {
					enabled: true,
					duration: 300 
				}
			});
	    });
	
	}
	
	
	
	if ( $().magnificPopup ) {
		 $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
			  disableOn: 700,
			  type: 'iframe',
			  mainClass: 'mfp-fade',
			  removalDelay: 160,
			  preloader: false,
			  fixedContentPos: false
	    });
	
	}
	
	
	
	if ($(window).width() <= 1024){	
			 // Add slideDown animation to Bootstrap dropdown when expanding.
		  $('.dropdown').on('show.bs.dropdown', function() {
			$(this).find('.dropdown-menu').first().stop(true, true).slideDown();
		  });

		  // Add slideUp animation to Bootstrap dropdown when collapsing.
		  $('.dropdown').on('hide.bs.dropdown', function() {
			$(this).find('.dropdown-menu').first().stop(true, true).slideUp();
		  });
	}	
	
	
	
	
	
// end bracket for document ready function 
});

//////////////////////////////////////////////////// End document ready function ///////////////////////////////////////////////////////