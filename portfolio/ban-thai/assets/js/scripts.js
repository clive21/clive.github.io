/*
Author       : Theme_Ocean.
Template Name: Radhuni - Restaurant HTML5 Template
Version      : 1.0
*/

(function($) {
	'use strict';
	
	jQuery(document).ready(function(){
	
		/*PRELOADER JS*/
		$(window).load(function() { 
			$('.status').fadeOut();
			$('.preloader').delay(350).fadeOut('slow'); 
		}); 
		/*END PRELOADER JS*/

		/*START MENU JS*/
				$('a.page-scroll').on('click', function(e){
					var anchor = $(this);
					$('html, body').stop().animate({
						scrollTop: $(anchor.attr('href')).offset().top - 50
					}, 1500);
					e.preventDefault();
				});		

			$(window).scroll(function() {
			  if ($(this).scrollTop() > 100) {
				$('.menu-top').addClass('menu-shrink');
			  } else {
				$('.menu-top').removeClass('menu-shrink');
			  }
			});
			
			$(document).on('click','.navbar-collapse.in',function(e) {
			if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
				$(this).collapse('hide');
			}
			});				
		/*END MENU JS*/ 
		
		
		
		
		/* Home Slider */
		$('#home-slider').carousel({
			interval: 10000,
			pause: 'hover',
		});
		
		
		/* About Slider */
		$('#about-slider').carousel({
			interval: 5000,
			pause: 'hover',
		});
		
		
		
	
	/* Sorting container */	
		
		if($().isotope) {
		 
		 var $filterLinks = $('.portfolio-filters li'),
			  $container = $('.portfolio-items-list');
			
			
		   // initialize isotope on container
		   $container.isotope({
			  itemSelector: '.menu-item-pic',
			  animationEngine : "best-available",
			  masonry: {
				columnWidth: '.menu-item-pic'
			  }
			});
		
		  
		  // On click sorting 
		  $filterLinks.click(function(){
			   $filterLinks.removeClass('active');
			
				$container.isotope({
				  filter: $(this).attr('data-filter'),
				});
		
			$(this).addClass('active');
			return false;
		  });
		 
		 
	 } 
		
	/* Sorting container ends */		
		
		
		
		
		
		
		
		
		/*Gallery*/
		
		$("a[class^='prettyPhoto']").swipebox({
			   removeBarsOnMobile : false,
			   hideBarsDelay : 0
		});
		
												
		/*START TESTIMONIAL JS*/
			$('.testi-slider').flexslider({
				animation: "slide",
				direction: "vertical",
				prevText: "<i class='fa fa-long-arrow-left'></i>",
				nextText: "<i class='fa fa-long-arrow-right'></i>"
			});
		/*END TESTIMONIAL JS*/
		
		
		
		
		$('#map')
		.click(function(){
				$(this).find('iframe').addClass('clicked')})
		.mouseleave(function(){
				$(this).find('iframe').removeClass('clicked')
		  });
		
		
		$('#datepicker').datepicker({
				inline: true,
			    minDate: 0,
			    maxDate:30,
			    dateFormat: "d - MM - yy",
				dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
				
			});
		
		
		

	}); 	
		
	/*START WOW ANIMATION JS*/
	  new WOW().init();	
	/*END WOW ANIMATION JS*/	
				
})(jQuery);


  

