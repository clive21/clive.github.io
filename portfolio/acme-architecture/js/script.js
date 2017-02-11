jQuery.fn.exists = function(){return this.length>0;}

/////////////////////////////////////////////// Window load function //////////////////////////////////////////////////////

$(window).load(function(e) {
	
	// will first fade out the loading animation
    $(".loading_img").fadeOut();
    // will fade out the whole DIV that covers the website.
    $("#loading").delay(600).fadeOut("slow");
	
	
	
	/* Isotope filter */
	 if($().isotope) {
		 
		 var $filterLinks = $('.item-sorter a'),
			  $container = $('#sorting-container');
			
			
			
			if( $("#blog-listing").exists() )  {	
			  $('#blog-listing').isotope({
				  itemSelector: '.blog-item',
				  animationEngine : "best-available",
				  masonry: {
					columnWidth: '.blog-item'
				  }
				});
			}
			
			  
			  
			  
		
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



/* Fuction to keep hero area text vertically in center */

var heroSection = function() {
        $(window).on('load resize', function(){
            var
            hero = $('#hero-section'),
            heroContent = hero.find('.hero-content'),
            contentHeight = heroContent.height(),
            sliderHeight = hero.data('height');

            if ( sliderHeight == "0") {
                sliderHeight = $(window).height();
            }
			
            var contentMargin = (sliderHeight - contentHeight) / 2;

            hero.css({ height: sliderHeight + "px" });
            
            heroContent.css({ 
               "margin-bottom" : contentMargin + "px",
               "margin-top": contentMargin + "px"
            });
        });
    };



/* Function for text rolling */
var scrollTexts = function() {
       var
       current = 1,
       height = $('.text-scroll').height(),
       numberDivs = $('.text-scroll').children().length,
       first = $('.text-scroll h2:nth-child(1)');

       setInterval(function() {
          var number = current * -height;
          first.css('margin-top', number + 'px');
          if ( current === numberDivs ) {
            first.css('margin-top', '0px');
            current = 1;
          } else current++;
       }, 2500);
    };
	
	
	
/* Vegas slideshow plugin */
var bgSlideshow = function() {
	if ( $().vegas ) {
		$("#hero-section").each(function() {
			var
			$this = $(this),
			number = $this.data('number'),
			number = parseInt(number),
			effect = $this.data('effect'),
			i = 1,
			slides = [];

			while ( i <= number ) {
				slides.push( {src:$this.data('image-'+i)} );
				i++;
			}

			$this.vegas({
				slides: slides,
				overlay: true,
				transition: effect,
				animation: 'kenburns',
				delay:10000
			});
		});
	}
};
	
	

 /* Function for fittext plugin */
var fixTexts = function() {
	
	if( $().fitText ){
		$("#hero-section h2").fitText(1.8, {
			minFontSize: '14px',
			maxFontSize: '48px'
		});
	}
};




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
	




var testimonials = function() {
        if ( $().owlCarousel ) {
            $('.testimonials').each(function(){
                var $this = $(this);
                $this.find('.owl-carousel').owlCarousel({
                    navigation : false,
                    pagination: true,
                    responsive: true,
                    items: 1,
                    navigationText: false,
                    itemsDesktop: [3000,3],
                    itemsDesktopSmall: [1400,3],
                    itemsTablet:[970,2],
                    itemsTabletSmall: [600,1],
                    itemsMobile: [360,1],
                    touchDrag: true,
                    mouseDrag: true,
                    autoHeight: false,
                    autoPlay: true
                });
            });
        } 
    };
	
	
	
	var clients = function() {
        if ( $().owlCarousel ) {
            $('.clients').each(function(){
                var $this = $(this);
                $this.find('.owl-carousel').owlCarousel({
                    navigation : true,
                    pagination: false,
                    responsive: true,
                    items: 1,
                    navigationText: false,
                    itemsDesktop: [3000,5],
                    itemsDesktopSmall: [1400,5],
                    itemsTablet:[970,3],
                    itemsTabletSmall: [600,1],
                    itemsMobile: [360,1],
                    touchDrag: true,
                    mouseDrag: true,
                    autoHeight: false,
                    autoPlay: true
                });
            });
        } 
    };
	
	
var other_projects = function() {
        if ( $().owlCarousel ) {
                $('#other_projects').owlCarousel({
					navigation : true,
                    responsive: true,
                    items: 1,
                    navigationText: false,
                    itemsDesktop: [3000,3],
                    itemsDesktopSmall: [1400,3],
                    itemsTablet:[970,3],
                    itemsTabletSmall: [600,1],
                    itemsMobile: [360,1],
                    touchDrag: true,
                    mouseDrag: true,
                    autoPlay: true
                });
           } 
    };

	

var counter = function() {
        if ( $().countTo ) {
			
			if( $(".counter").appear() ){
				 $(".counter").find('.numb').each(function() {
                    var to = parseInt( $(this).data('to'), 10 ),
                        speed = parseInt( $(this).data('speed'), 10 );
                        
                    $(this).countTo({
                        to: to,
                        speed: speed
                    });
                });
				
			}
			
        }
    };	
	
	
	
var gmap = function(){
	
	 if ( $().gmap3 ) {
	 $('#google-map').gmap3({
			center:[19.0810064, 72.8480026],
			zoom:12,
			scrollwheel: false,
		    mapTypeId : google.maps.MapTypeId.ROADMAP
		  })
		 .marker({
			position: [19.0810064, 72.8480026],
			icon: 'http://maps.google.com/mapfiles/marker_green.png'
		  });
		  
		 
	 }
	
};

/* Dock menu to top of page for inner navmenu */
	
var dockInnerNav = function(){
	
	
	if( $("#nav-inner").exists() )  {	
		
		$(window).scroll(function() {  

			var scroll = $(window).scrollTop();
			var nav = $("#nav-inner");

			if (scroll >= 500) {
			nav.addClass("navbar-fixed-top");
			} else {
			nav.removeClass("navbar-fixed-top");
			}
       
		});

	}

};	
	



var toggle_panel = function(){
	
 if( $(".toggle-panel").exists() )  {	
  	
   $('.toggle-panel h5').on('click', function(event){
        event.preventDefault();
        // create accordion variables
        var accordion = $(this);
        var accordionContent = accordion.next('p');

        // toggle accordion link open class
        accordion.toggleClass("active");
        // toggle accordion content
        accordionContent.slideToggle(500);

    });	
	 

	
 }

};
								 

var dropdownHover = function(){
    $(".dropdown").hover(            
            function() {
                $('.dropdown-menu', this).stop( true, true ).fadeIn("fast");
                $(this).toggleClass('open');     
            },
            function() {
                $('.dropdown-menu', this).stop( true, true ).fadeOut("fast");
                $(this).toggleClass('open');            
            });
};




////////////////////////////////////////// Begin document ready function /////////////////////////////////////////


$(function(){
	
	backTop();
	heroSection();
    bgSlideshow();
	scrollTexts();
	dropdownHover();
	fixTexts();
	dockInnerNav();
	testimonials();
	clients();
	backTop();
	counter();
	gmap();
	toggle_panel();
	other_projects();
	
		
	
	
/* highlight respective menu item when scroll to section */
	
if( $("#nav-menu").exists() )  {	
	
					
		// Cache selectors
				var lastId,
				 topMenu = $("#nav-menu"),
				 topMenuHeight = topMenu.outerHeight()+1,
				 // All list items
				 menuItems = topMenu.find("a"),
				 // Anchors corresponding to menu items
				 scrollItems = menuItems.map(function(){
				   var item = $($(this).attr("href"));
					if (item.length) { return item; }
				 });
				
				// Bind click handler to menu items
				// so we can get a fancy scroll animation
				menuItems.click(function(e){
				  var href = $(this).attr("href"),
					  offsetTop = href === "#" ? 0 : $(href).offset().top/*-topMenuHeight+1*/;
				  $('html, body').stop().animate({ 
					  scrollTop: offsetTop
				  }, 1000, function(){
			            $("#nav-menu").removeClass("in");
	              });
				  e.preventDefault();
				});
				
				// Bind to scroll
				$(window).scroll(function(){
				   // Get container scroll position
				   var fromTop = $(this).scrollTop()+topMenuHeight;
				   
				   // Get id of current scroll item
				   var cur = scrollItems.map(function(){
					 if ($(this).offset().top < fromTop)
					   return this;
				   });
				   // Get the id of the current element
				   cur = cur[cur.length-1];
				   var id = cur && cur.length ? cur[0].id : "";
				   
				   if (lastId !== id) {
					   lastId = id;
					   // Set/remove active class
					   menuItems
						 .parent().removeClass("active")
						 .end().filter("[href=#"+id+"]").parent().addClass("active");
				   }                   
				});
		
			
	
	
}
		
		
	
	
	
	
	
	
	/* click and scroll to section*/
	$(".scroll-target").on('click', function(e) {

       // prevent default anchor click behavior
       e.preventDefault();

       // animate
       $('html, body').animate({
           scrollTop: $(this.hash).offset().top
         }, 1000);

    });
	
	
	
	
	
	/* Ligthbox plugins*/
	
	if ( $().fancybox ) {
	    $(".fancybox").fancybox({
			padding : 0
		});
	}
	
	
	if ( $().swipebox ) {
	    $(".swipebox").swipebox({
			   removeBarsOnMobile : false,
			   hideBarsDelay : 0
			});
	}
	
	
	
	
	
	

	

	/* Search toggle */
	
	$("#search-button").click(function(){
		$("#search-form").slideToggle();
	});
	
	$(".search-close").click(function(){
		$("#search-form").slideUp();
	});

	
// end bracket for document ready function 
});

//////////////////////////////////////////////////// End document ready function ///////////////////////////////////////////////////////