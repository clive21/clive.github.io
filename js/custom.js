jQuery(document).ready(function(){ 
	
	/* ---------------------------------------------------------------------- */
	/*	Custom Functions
	/* ---------------------------------------------------------------------- */
	
	// Needed variables
	var $logo 	= $('#logo');
		
	// Show logo 
	$('.tab-resume,.tab-portfolio,.tab-contact').click(function() {
	  $logo.fadeIn('slow');
	});
	// Hide logo
	$('.tab-profile').click(function() {
	  $logo.fadeOut('slow');
	});	
	
	/* ---------------------------------------------------------------------- */
	/*	Menu
	/* ---------------------------------------------------------------------- */
	
	// Needed variables
	var $content 		= $("#content");
	
	// Run easytabs
  	$content.easytabs({
	  animate			: true,
	  updateHash		: false,
	  transitionIn		:'slideDown',
	  transitionOut		:'slideUp',
	  animationSpeed	:600,
	  tabs				:"> .menu > ul > li",
	  tabActiveClass	:'active',
	});
	
	// Hover menu effect
	$content.find('.tabs li a').hover(
		function() {
			$(this).stop().animate({ marginTop: "-7px" }, 200);
		},function(){
			$(this).stop().animate({ marginTop: "0px" }, 300);
		}
	);
	/* ---------------------------------------------------------------------- */
	/*	Portfolio
	/* ---------------------------------------------------------------------- */ 
	
	// Needed variables
	/*var $container	 	= $('#portfolio-list');
	var $filter 		= $('#portfolio-filter');*/
		
	// Run Isotope  
	/*$container.isotope({
		filter				: '*',
		layoutMode   		: 'masonry',
		animationOptions	: {
		duration			: 750,
		easing				: 'linear'
	   }
	});	*/
	
	// Isotope Filter 
	/*$filter.find('a').click(function(){
	  var selector = $(this).attr('data-filter');
		$container.isotope({ 
		filter				: selector,
		animationOptions	: {
		duration			: 750,
		easing				: 'linear',
		queue				: false,
	   }
	  });
	  return false;
	});	*/
	
	// Portfolio image animation 
	/*$container.find('img').adipoli({
		'startEffect' 	: 'normal',
		'hoverEffect' 	: 'popout',
		'imageOpacity' 	: 0.6,
		'animSpeed' 	: 100,
	});*/
	
	// Copy categories to item classes
	/*$filter.find('a').click(function() {
		var currentOption = $(this).attr('data-filter');
		$filter.find('a').removeClass('current');
		$(this).addClass('current');
	});	*/
	
	/* ---------------------------------------------------------------------- */
	/*	Fancybox 
	/* ---------------------------------------------------------------------- */
	/*$container.find('.folio').fancybox({
		'transitionIn'		:	'elastic',
		'transitionOut'		:	'elastic',
		'speedIn'			:	200, 
		'speedOut'			:	200, 
		'overlayOpacity'	:   0.6
	});
	*/
	/* ---------------------------------------------------------------------- */
	/*	Contact Form
	/* ---------------------------------------------------------------------- */
	$('#submit').click(function () {		
		
		//Get the data from all the fields
		var name = $('input[name=name]');
		var number = $('input[name=number]');
		var email = $('input[name=email]');
		var comment = $('textarea[name=comment]');

		//Simple validation to make sure user entered something
		//If error found, add hightlight class to the text field
		if (name.val()=='') {
			name.addClass('error');
			return false;
		} else name.removeClass('error');
		
		if (number.val()=='') {
			number.addClass('error');
			return false;
		} else name.removeClass('error');
		
		if (email.val()=='') {
			email.addClass('error');
			return false;
		} else email.removeClass('error');
		
		if (comment.val()=='') {
			comment.addClass('error');
			return false;
		} else comment.removeClass('error');
		
		//organize the data properly
		var data = 'name=' + name.val() + '&number=' + number.val() + '&email=' + email.val() + '&comment='  + encodeURIComponent(comment.val());
		
		
		
		//start the ajax
		$.ajax({
			//this is the php file that processes the data and send mail
			url: "process.php",	
			
			//GET method is used
			type: "GET",

			//pass the data			
			data: data,		
			
			//Do not cache the page
			cache: false,
			
			//success
			success: function (html) {				
				//if process.php returned 1/true (send mail success)
				if (html==1) {					
					//hide the form
					$('#contactform').fadeOut('slow');					
					
					//show the success message
					$('div.success').fadeIn('slow');
					
				//if process.php returned 0/false (send mail failed)
				} else alert('Sorry, unexpected error. Please try again later.');				
			}		
		});
		
		//cancel the submit button default behaviours
		return false;
	});
	
	
	
	

});	






$(function () {

	var beUsername = 'clive21',
		beApiKey = '2OP9FlG3eiW0dMEQbRQeTOwOOJeGeZ29',
		bePerPage = 12,
		beProjectAPI = 'http://www.behance.net/v2/users/' + beUsername + '/projects?callback=?&api_key=' + beApiKey + '&per_page=' + bePerPage,
		beItemWidth = 360,
		beItemHeight = 282,
		beLazyLoad = true,
		beLinkTarget = '_self';

	/**
	 * Get Data from Behance API
	 */
	if (sessionStorage.getItem('behanceProject')) {
		setPortfolioTemplate();
	} else {
		// Load JSON-encoded data from the Behance API & Store it in sessionStorage
		$.getJSON(beProjectAPI, function (project) {
			sessionStorage.setItem('behanceProject', JSON.stringify(project));
			setPortfolioTemplate();
		});
	}

	/**
	 * Populate Data
	 */
	function setPortfolioTemplate() {
		var projects = JSON.parse(sessionStorage.getItem('behanceProject')).projects;
		var portfolio = $('#portfolio-list').html('');
		var items = '';
		var image = '';

		$.each(projects, function (i, val) {
			// If Lazy load is enabled, edit the markup accordingly
			beLazyLoad ? image = 'src="images/loading.png" data-lazy="' + val.covers.original + '"' : image = 'src="' + val.covers.original + '"';

			// Create the items template
			items += '<li class="be__item be__item__' + val.id + ' ">';
			items += '<a href="' + val.url + '" title="' + val.name + '" target="' + beLinkTarget + '">';
			items += '<img class="img-responsive" ' + image + ' width="' + beItemWidth + '" height="' + beItemHeight + '" alt="' + val.name + '">';
			items += '</a>';
			items += '</div>';

			// How many items are shown
			return i < bePerPage;
		});

		// Append items only once
		portfolio.each(function (index, el) {
			$(el).append(items);
		});

		// Create Lazy Load instance for Grid Layout
		if (beLazyLoad) {
			var layzr = new Layzr({
				container: '.be__grid',
				selector: '[data-lazy]',
				attr: 'data-lazy'
			});
		}

		
	}

});






















