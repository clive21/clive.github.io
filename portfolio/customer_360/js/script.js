jQuery.fn.exists = function(){return this.length>0;}

//Window load function
$(window).load(function(e) {
	
	// will first fade out the loading animation
    $(".loading_img").fadeOut();
    // will fade out the whole DIV that covers the website.
    $("#loading").delay(600).fadeOut("slow");

	
	/* jQuery Masonry */
	 if($().masonry) {
		$('#parent_content_holder').masonry();
	 }
     	  
});



// Begin document ready function 
$(function(){
	
	
	/* Cross browser placeholder function */
	$('[placeholder]').focus(function() {
		var input = $(this);
		if (input.val() == input.attr('placeholder')) {
			input.val('');
			input.removeClass('placeholder');
		}
	}).blur(function() {
		var input = $(this);
		if (input.val() == '' || input.val() == input.attr('placeholder')) {
			input.addClass('placeholder');
			input.val(input.attr('placeholder'));
		}
	}).blur();
	$('[placeholder]').parents('form').submit(function() {
		$(this).find('[placeholder]').each(function() {
			var input = $(this);
			if (input.val() == input.attr('placeholder')) {
				input.val('');
			}
		})
	});
	
	
	 $('[data-toggle="tooltip"]').tooltip()
	
	/* Date picker function */
	    if($().daterangepicker){ 
		   $('#dateRange1').daterangepicker( {
			    locale: {
				  format: 'DD-M-YYYY'
				},
			   showDropdowns : true,
			   autoApply : true
			   });
			
			   
		}
	  
	 /* Custom Scroll bar*/
	   if($().niceScroll){
	    $("html").niceScroll({
			 cursorcolor:"#CCCCCC",
			 cursorborder : "none",
			 //autohidemode: true,
			});
		 }

    		 
	 if($().slimScroll){	 
	    $('#search-result-rows').slimScroll(
		  {
			height: '206px',
		    railVisible: true,
			alwaysVisible: true,
			size: '10px',
			color:"#ff0022",
			railOpacity: 0,
			railColor: '#FFFFFF',
		  }
		);	 
		
		$('.search-fields').slimScroll(
		  {
			height: '200px',
		    railVisible: true,
			alwaysVisible: true,
			size: '10px',
			color:"#ff0022",
			railOpacity: 0,
			railColor: '#FFFFFF',
			
		  }
		);
	 }
	
	/* Fixed table headers */	
	    if($().floatThead){
		
        var $table = $('table.dataTable_theme1');
        $table.floatThead({
				scrollContainer: function($table){
					return $table.closest('.table_holder');
				}
			});
		}
		
		
	  /* Custom dropdown plugin */	
		 if( $().chosen){
			 
             $('#multiselect1, #multiselect2, #multiselect4, #multiselect5').chosen().change(function() {
					$(this).next().children().addClass('bgDefault');
					if($(this).val() == null){
					  $(this).next().children().removeClass('bgDefault');
				   }
				});
			 $('#multiselect3, #multiselect6').chosen({disable_search : true});
	
		}
		
		
	     $('.chosen-choices').on('touchend', '.search-choice-close', function(){
				var $this = $(this);
				var $select = $this.closest('.chosen-container').prev('select');
				var toRemove = $.trim($this.parent().text());
				var vals = $select.val();
				vals = $.grep(vals, function(value) {
					return $.trim(value).trim() !== toRemove;
				});
				$select.val(vals).trigger('chosen:updated');
	      });
		
		if($().multiselect){
			 /* Multiple Selects */
			 $('#multiselect1').multiselect({header: false , noneSelectedText: "Select Region"});
			 $('#multiselect2').multiselect({header: false , noneSelectedText: "Select State"});
			 $('#multiselect4').multiselect({header: false , noneSelectedText: "Select JC"});
			 $('#multiselect5').multiselect({header: false , noneSelectedText: "Select Partner"});
			 
			 /* Single Selects */
			 $('#multiselect3, #multiselect6').multiselect({multiple: false, header: false, selectedList:1});
	     }
		 
		
		/* Navigation menu toggle */
		$(".mobile-menu").click(function(){
			 $("nav ul").slideToggle();
		});
		
		$(window).resize( function(){
			$("nav ul").removeAttr("style");
		 });
		 
        
		/* Sparkline chart */
		var sparkline_chart_values1 = [5,10,12,15,10,16,17,18,16,14,12,18,19,20,12,15,25 ];
		 if($().sparkline) {
			$("#sparkline_chart1").sparkline(sparkline_chart_values1, {
				type: 'line',
				width: '120',
				height: '40',
				lineColor: '#55accc',
				fillColor: '#edf7f9'
			});
		}
		
		
		
		/*Drop down functions*/
		$('.dropdown-toggle').on("click", function() {
		   if( $(window).width() < 600)
			 {
				 var windowWidth =   $(window).width();
				 var leftPosition = windowWidth - $(this).offset().left - windowWidth;
				  $(this).next().css({
					   left : leftPosition,
					   //width: $(window).innerWidth()
				  });
			 }
			 else{
				  $(this).next().removeAttr("style");
			 }
	   	});
		
		/*Preven dropdown menu from closing when element inside it is clicked*/
		$('.dropdown-menu').click(function(event){
			 event.stopPropagation();
		 });

       
	   if($().matchHeight){
		   $('.heightEqualizer').matchHeight();
		   $('.heightEqualizerSmall').matchHeight();
		   $('.heightEqSearchWidgets').matchHeight();
		}
		
		
		/* Popover functions */

		 $("[data-toggle=popover]").popover({
			html : true,
			content: function() {
			  var content = $(this).attr("data-popover-content");
			  return $(content).children(".popover-body").html();
			}
		});
		
		$('body').on('click', function (e) {
			$('[data-toggle="popover"]').each(function () {
				//the 'is' for buttons that trigger popups
				//the 'has' for icons within a button that triggers a popup
				if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
					$(this).popover('hide');
				}
			});
		});
		
		
		/* Date picker UI */
		if($().datepicker()){
		$('#dob').datepicker({
				inline: true,
				showOtherMonths: true,
				changeMonth: true,
				changeYear: true,
				yearRange: "-100:+0",
                showOtherMonths: true,
				dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
				dateFormat: 'dd-mm-yy'
				
			});
		}

// end bracket for document ready function 
});

// End document ready function









/* Charts generating functions */

if( $("#chartsContainer").exists()){

      /* Bar Chart Stacked*/
		var chart_stacked_bar = c3.generate({
			 bindto: '#barChartStacked1',
			data: {
				columns: [
					['L1', 300, 50, 50, 0],
					['L2', 130, 70, 40, 160],
					['L3', 40, 160, 130, 70],
					['L4', 20, 40, 40, 0]
				],
				type: 'bar',
				groups: [
					['L1', 'L2', 'L3', 'L4']
				]    
			},
			color: {
				pattern: ['#f6a1ad', '#f06074', '#b81f34' ,'#610915']
			}
		});
		
		
		
		
		
		/* Donut chart 1*/
		var chart_1 = c3.generate({
			bindto: '#summaryChart1',
			data: {
				columns: [
					['Open', 1000],
					['Re-assigned', 1200],
					['Resolved', 4500],
				],
				type : 'donut'
			},
		   color: {
				pattern: ['#0aaf29', '#098820', '#33fa58']
			}
		});
		
		
		/* Donut shart 2 */
		var chart_2 = c3.generate({
			bindto: '#summaryChart2',
			data: {
				columns: [
					['Open', 1000],
					['Re-assigned', 1200],
					['Resolved', 4500],
					['Assigned', 2500],
				],
				type : 'donut'
			},
			color: {
				pattern: ['#418ef0', '#1e68c6', '#7bb5ff', '#a3cafb']
			}
		});


}
	  

 $('.toggle-widget').click(function () {
      
        if ($(this).find("i").hasClass("fa-chevron-up")) {
            $(this).find("i").removeClass("fa-chevron-up").addClass("fa-chevron-down");
             $(this).parent().next().slideUp(500);
        } else {
            $(this).find("i").removeClass("fa-chevron-down").addClass("fa-chevron-up");
             $(this).parent().next().slideDown(500); }
    });





/* Form Validation */

$("#search-form button").click( function(){
	$("form#search-form").validate({
          
      showErrors: function(errorMap, errorList) {

          // Clean up any tooltips for valid elements
          $.each(this.validElements(), function (index, element) {
              var $element = $(element);

              $element.data("title", "") // Clear the title - there is no error associated anymore
                  .removeClass("error")
                  .tooltip("destroy");
          });

          // Create new tooltips for invalid elements
          $.each(errorList, function (index, error) {
              var $element = $(error.element);

              $element.tooltip("destroy") // Destroy any pre-existing tooltip so we can repopulate with new tooltip content
                  .data("title", error.message)
                  .addClass("error")
                  .tooltip(); // Create a new tooltip based on the error messsage we just set in the title
          });
      },

      submitHandler: function(form) {
          console.log("Valid user number!");
      }
  });
});




