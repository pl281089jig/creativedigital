//= ../../../bower_components/jquery/dist/jquery.min.js
//= ../../../bower_components/what-input/what-input.min.js
//= ../../../bower_components/foundation-sites/js/foundation.core.js
//= ../../../bower_components/foundation-sites/js/foundation.responsiveToggle.js
//= ../../../bower_components/foundation-sites/js/foundation.util.mediaQuery.js

//= slick.min.js

;(function($){
	$(function(){
		$(document).foundation();
		$('.ba-slider').slick({
			infinite:true,
			arrows:true,
			variableWidth:false,
			centerMode: true,
			slidesToShow: 1,
			dots:true,
		});
	})

	/*MAP*/
	$(window).load(function () {
		var mapDiv = $('#map')[0];
		var map = new google.maps.Map(mapDiv, {
			center: {lat: 48.621136, lng: 35.227426},
			zoom: 14,
			scrollwheel: false
		});
})
	})(jQuery);
