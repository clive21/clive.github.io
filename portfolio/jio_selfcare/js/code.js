jQuery.fn.exists = function () {
    return this.length > 0;
};


/*Scroll to top of the page on page refresh*/
window.onbeforeunload = function(){ window.scrollTo(0,0); }   

/******************** Window load function **************************/
$(window).load(function (e) {

   /************************* Loading Animation ***********************/
    $(".loading_img").fadeOut(); // will first fade out the loading animation
    $("#loading").delay(600).fadeOut("slow"); // will fade out the whole DIV that covers the website.

   /* Normal Isotope */
   if($().isotope) {
		 
		   // initialize isotope on container
		   $('#top-offers-row').isotope();
		 
	 }
	 
	/* Isotope filter */
	 if($().isotope) {
		 
		 var $filterLinks = $('.item_sorter a'),
			  $container = $('#sorting_container');
		
		   // initialize isotope on container
		   $container.isotope({
			  itemSelector: '.filter-item',
			  animationEngine : "best-available",
			  masonry: {
				columnWidth: '.filter-item'
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
   	 
   

});




/************************** Begin document ready function **************************/
$(function () {
	
	 
     /* Match heights of containers */ 
     if($().matchHeight){
       $(".coupon div").matchHeight();
     }
    
	
	/* Owl Carousel */
	 if($().owlCarousel){
	     $("#item_slider").owlCarousel({
			items : 4,
			autoPlay: 4000, //Set AutoPlay to 4 seconds
			stopOnHover : true,
			itemsCustom : false,
			itemsDesktop : [1199,3],
			itemsDesktopSmall : [980,2],
			itemsTablet: [768,2],
			itemsTabletSmall: false,
			itemsMobile : [600,1]
			
	   });		
	   
	   
	    $("#item_slider_arrows_1 .nav-arrow-right").click(function() {
			$("#item_slider").trigger('owl.next');
		});
		
		$("#item_slider_arrows_1 .nav-arrow-left").click(function() {
			$("#item_slider").trigger('owl.prev');
		});
			
	 }
	 
	 
	 
		 
	
   /******  Scroll to top function  *****/	
   if($("#back-top").exists()){ 
		
	  if ($(window).width() > 768) {	
	    // fade in #back-top	 
		$(window).scroll(function () {
		  if ($(this).scrollTop() > 100) {
			$('#back-top').fadeIn();
		  } else {
			$('#back-top').fadeOut();
		  }
		});
	
		// scroll body to 0px on click
		$('#back-top').click(function () {
		  $('body,html').animate({
			scrollTop: 0
		  }, 800);
		  return false;
		});
		
	  }
	  
	}
	 
	 

    /********* end bracket for document ready function ***********/
});

/*************************** End document ready function ***********************************/




/*Simple Service ID validation*/

$("#submit-service-id").click(function(){
   if($("#code_entry").val() == ""){
	    $("#form_error").fadeIn(2000).removeClass("hidden");
	   }
	else{
		$("#form_error").addClass("hidden");
    }   	
 });


$(".select-coupon").click(function(){
	 var code = $(this).parent().prev().prev().find(".coupon-code").text();
	 /*$(this).parent().parent().addClass("selected").siblings().removeClass("selected");*/
	 /*console.log(code);*/
});


/* Code for copy to clipboard */

if($('.select-coupon').exists()){
	
	var copy_coupon_code = new Clipboard('.select-coupon');

copy_coupon_code.on('success', function(e) {
    var copied_data =  e.text;
	$('#coupon_copy_message').html('<div class="alert alert-copied alert-dismissable">Coupon code <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><span>'+copied_data+'</span> copied to clipboard</div>').fadeIn();
	setTimeout(function() {
		$('#coupon_copy_message').fadeOut();
	}, 4000); 
	
});
	
	
}

