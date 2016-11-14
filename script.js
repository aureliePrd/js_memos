(function($) {
 
	var App = Object.create(AppAurelie);
	App.init({ 
		wW : $(window).width(),
		wH : $(window).height(),
		is_mobile : false,		
		is_landscape : false,
		small_screen : false,
		big_screen : false,
		widthMin_desktop : 640,
		callbacks : new Array(),
		option_viewport : false,
		namespace : 'default',
	});

	window.App = App;

	$(document).ready(function(){
		App.ready(); // don't touch : ready app.js
		WPCANVAS.ready();
	}); 

	$(window).load(function () {
		App.load(); // don't touch : load app.js
		WPCANVAS.load();
		
	});

	$(window).resize(function () {
		App.resize(); // don't touch : resize app.js
		WPCANVAS.resize();
	});

	$(document ).on('scroll', function() {
		WPCANVAS.scroll();
	});

	$(window).on( "orientationchange", function () {		
		WPCANVAS.changeOrientation();
	});

	App.on_become_small_screen
	(
		function(){
			WPCANVAS.becomeSmall();
		}
	);
		
	App.on_become_big_screen
	(
		function(){
			WPCANVAS.becomeBig();
		}
	);

	/// Partie modifiable ///

	/******** functions *********/

	var WPCANVAS  = {
		ready: function () { 
			console.log("ready --- smallscreen:" + App.small_screen + " // bigscreen:"+ App.big_screen);
		},
		load: function () { 
			console.log("page loaded");
		},
		resize : function () {
			//console.log("resize");
		},
		scroll : function () {
			//console.log("scroll");
		},
		changeOrientation : function () {
			console.log("changeOrientation");
		},
		becomeSmall: function () {
			console.log("on become small screen");		
		},
		becomeBig: function () {
			console.log("on become big screen");		
		}
	}

	/******** end functions *********/


})(jQuery);	