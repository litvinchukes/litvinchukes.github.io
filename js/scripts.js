//Check if website is viewed on a mobile & tablet
(function(a){($.browser=$.browser||{}).mobile=/(android|bb\d+|meego).+mobile|android|ipad|playbook|silk|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera);
		
jQuery(document).ready(function($) {
//Page Preloader
$(window).load(function() { 
	$(".mask").delay(1000).fadeOut("slow");
});
	
//Navigation Expand
	$('.tap-nav').click(function(){
		$('html').toggleClass('expanded');
	});
// Appear Animations
	$('*').each(function(){
		if(jQuery(this).attr('data-animation')) {
		var $animationName = jQuery(this).attr('data-animation');
		jQuery(this).appear(function() {
		jQuery(this).addClass('animated').addClass($animationName);
			});
			}
		});
//onepage nav
      $('#navs').onePageNav({
        currentClass: 'active',
        filter: ':not(.external)',
        scrollThreshold: 0.25,
        scrollOffset: 0
      });
//tooltips
    $(document).ready(function ()
    { 
      $( 'body' ).tooltip({
        selector: "a[data-toggle=tooltip]"
      });
 });

//Responsive slide For blog
	$(".rslides-blog").responsiveSlides({
		nav: true,
		auto: true,
		prevText: "<i class='icon-chevron-left'></i>",
		nextText: "<i class='icon-chevron-right'></i>"
	});	

//Client carsoul

	if ( $( '#clients-carousel' ).length > 0 ) {
		
	(function() {
			var $window = $(window),
				flexslider;
			
			function getGridSize() {
				return	((window.innerWidth || document.documentElement.clientWidth) < 480) ? 1 :
						((window.innerWidth || document.documentElement.clientWidth) > 479 && (window.innerWidth || document.documentElement.clientWidth) < 768) ? 1 :
						((window.innerWidth || document.documentElement.clientWidth) > 767 && (window.innerWidth || document.documentElement.clientWidth) < 980) ? 3 : 3;
				}
			
			
			$window.load(function() {
				$( '#clients-carousel' ).flexslider({
					animation: "slide",
					slideshow: false,
					controlNav: false,
					itemWidth: 230,
					itemMargin: 45,
					useCSS: false,
					minItems: getGridSize(), 
					maxItems: getGridSize(), 
					start: function(slider){
						flexslider = slider;
					}
				});
			});
			
			$window.resize(function() {
				var gridSize = getGridSize();
				
				flexslider.vars.minItems = gridSize;
				flexslider.vars.maxItems = gridSize;
			});
	}());
	
	}


	//Masonry Blog
	$(window).load(function(){
		var $container = $('.blog-post-holder');
		$container.isotope({
			 masonry: {	
		  },
			animationOptions: {
				duration: 750,
				easing: 'linear',
				queue: false,
			},	
		});
	});  	

    //Google Maps
      $('#gmap').gmap3({
        marker:{address:"Haltern am See, Weseler Str. 151", options:{icon: "img/location1.png"}},
        map:{
            options:{
              zoom: 14
            }
           }
      });
	// Fullscreen Slider
	   $('#fullscreen-slider').superslides({
		    animation: 'fade',
			play: 8000

		});
		
	// SliderCaptions
		function metroSlideconfig(){
			$('.slider-captions').each(function(){
				var windowHeight = ($(window).height()/2),
					windowWidth = ($(window).width()/2),
					captionHeight = ($('.slider-captions').height()/2),
					captionWidth = ($('.slider-captions').width()/2);

				
				$('#fullscreen-slider').css({'height': (windowHeight * 2 ) + 'px' });
				$('#fullscreen-slider li').css({'width': $(window).width() + 'px' });
				$('.slider-captions').css({'top': (windowHeight - captionHeight ) - 20 + 'px' });
				$('.slider-captions').css({'left': (windowWidth - captionWidth ) + 'px' });
				
			});
		};
		metroSlideconfig()
		jQuery(window).resize(metroSlideconfig);
				
     //Contact From
    $(document).ready(function ()
    { 
     $('#submit').formValidator({
        scope: '#form'
      });
      
      $('#post-commentsss').formValidator({
        scope: '#comments-form'
      });
      
      $('#submit,#post-commentsss').click(function() {
            $('input.error-input, textarea.error-input').delay(300).animate({marginLeft:0},100).animate({marginLeft:10},100).animate({marginLeft:0},100).animate({marginLeft:10},100);
        });

      // Form plugin

      var options = {

        beforeSubmit: function() {
          $('.sending').show();

        },
        success: function() {
          $('.sending').hide();
          $('#form').hide();
          $(".mess").show().html('<h5>Thanks !</h5><h5>Your message has been sent.</h5>'); // Change Your message post send
          $('.mess').delay(3000).fadeOut(function() {

            $('#form').clearForm();
            $('#form').delay(3500).show();

          });
        }
      };
      

      $('#form').submit(function() {
        $(this).ajaxSubmit(options);
        return false;
      });
        
    });      

});	





