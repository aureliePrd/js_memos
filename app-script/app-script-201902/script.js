/* global language, ajaxurl */
 
(function($) {
 
	var App = Object.create(AppAurelie);
	App.init({ 
		wW : $(window).width(),
		wH : $(window).height(),
		is_mobile : false,		
		is_landscape : false,
		small_screen : false,
		big_screen : false,
		widthMin_desktop : 992 - 13,
		callbacks : new Array(),
		option_viewport : false,
		namespace : 'default',
	});

	window.App = App;

	$(document).ready(function(){
		App.ready(); // don't touch : ready app.js
		HIH.ready();	
	}); 

	$(window).on('load', function(){
		App.load(); // don't touch : load app.js
		HIH.load();		
	});
	
	Wwidth = $(window).width();

	$(window).resize(function () {
 
		if ($(this).width() != Wwidth && !App.is_mobile) {
			//console.log("change really the largeur window" + $(this).width());
			App.resize(); // don't touch : resize app.js
			HIH.resize();		
			if (App.small_screen) {				
			}
		}
	});

	$(document ).on('scroll', function() {
		HIH.scroll();
	});

	$(window).on( "orientationchange", function () {		
		HIH.changeOrientation();
	});

	

	App.on_become_small_screen
	(
		function(){
			HIH.becomeSmall();
		}
	);
		
	App.on_become_big_screen
	(
		function(){
			HIH.becomeBig();
		}
	);

	/// Partie modifiable ///
	var $burger = $('.BtnMenuMobile');
    var $menuMobile = $('.menu-burger');


	var HIH = window.HIH = {
		ready: function () { 			
			console.log("ready --- smallscreen: " + App.small_screen + " // bigscreen: "+ App.big_screen);			
			windowWidth = window.screen.availWidth;
		  	windowHeight = window.screen.availHeight;
		  	maxi = Math.max(windowWidth, windowHeight);

			if(App.small_screen) {	
				fct_smallScreen();	
			}
			
			if ($('body').hasClass('is_landscape') &&  maxi < 768) {
				$('html').addClass('changeOrientation');				
			}
			else {
				$('html').removeClass('changeOrientation');				
			}		

			if (App.big_screen) {
				fct_bigScreen();
			}	
							
		},
		load: function () { 
			console.log("page loaded");
		},
		resize : function () {
			//console.log("resize");
			windowWidth = window.screen.availWidth;
		  	windowHeight = window.screen.availHeight;
		  	maxi = Math.max(windowWidth, windowHeight);
			
			if (App.small_screen || maxi < 768) {
				var widthWindow = $(window).width();
			}
			else {
				
			}			
		},
		scroll : function () {
			//console.log("scroll");
		},
		
		changeOrientation : function () {
			Wwidth = $(window).width();
			windowWidth = window.screen.availWidth;
		 	windowHeight = window.screen.availHeight;
		  	maxi = Math.max(windowWidth, windowHeight);

		  //console.log(windowWidth, windowHeight, maxi);
		  if ( maxi < 768) {	
				if ($('body').hasClass('is_landscape')) {
					
					HIH.becomeSmall();
					
					$('html').removeClass('changeOrientation');					
				}
				
				else {										
					$('html').addClass('changeOrientation');
				}
			}
			
		},
		becomeSmall: function () {
			console.log("on become small screen");
			fct_smallScreen();
			
		},
		becomeBig: function () {
			console.log("on become big screen");	
			fct_bigScreen();
		
			
		}

	}

	/******** functions *********/
	
	var fct_smallScreen = function() {
	  console.log("small screen");
	};

	var fct_bigScreen = function() {
	  console.log("big screen");
	};



	/*************************************/
	$(document).on('ready', function(){ 
		init();
	});


})(jQuery);