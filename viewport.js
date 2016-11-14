(function ($) {
    /* only for IPAD 1 */
    if (window.devicePixelRatio === 1) {
        if (navigator.userAgent.match(/iPad/i)) {
            var viewportmeta = document.querySelector('meta[name="viewport"]');
            if (viewportmeta) {
                viewportmeta.content = 'width=device-width, minimum-scale=1.0, maximum-scale=1.0';
                document.body.addEventListener('gesturestart', function () {
                    viewportmeta.content = 'width=device-width, minimum-scale=0.25, maximum-scale=1.6';
                }, false);
            }
        }
    }

// ONLY FOR TACTILE
    var istactile = true;    

    if (istactile) {
        resetVP();
        window.addEventListener("orientationchange", resetVP_delay, false);
        // Detect change orientation for Firefox
        if ($('html').hasClass('firefox')) {
            var mqOrientation = window.matchMedia("(orientation: portrait)");
            // The Listener will fire whenever this either matches or ceases to match
            mqOrientation.addListener(resetVP_delay, false);
        }

    }

    // AND ONLY FOR TABLET : change VIEWPORT
    function resetVP() {

        var vpw = '640';
        var viewport = document.querySelector("meta[name=viewport]");

        windowWidth = window.innerWidth ? window.innerWidth : $(window).width();
        windowHeight = window.innerHeight ? window.innerHeight : $(window).height();

        //calcul width and Height for Firefox Android
        screenAvailWidth = screen.availWidth;
        screenAvailHeight = screen.availHeight;


        if (screen.width > 640 && windowHeight < windowWidth && !$('html').hasClass('firefox')) {
            vpw = '990';
            alert(document.documentElement.clientWidth);
            viewport.setAttribute('content', 'width=' + vpw + ', initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=0');
        } else if (screen.width > 640 && windowHeight > windowWidth && !$('html').hasClass('firefox')) {
            vpw = '640';
            alert(document.documentElement.clientWidth, "et paf tu passes en 640");
            viewport.setAttribute('content', 'width=' + vpw + ', initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=0');
        } else if (screen.width > 640 && screenAvailHeight < screenAvailWidth && $('html').hasClass('firefox')) {
            vpw = '990';
            $('head').append("<meta name='viewport' content='width=" + vpw + "', initial-scale=.5, maximum-scale=.5>");
        } else if (screen.width > 640 && screenAvailHeight > screenAvailWidth && $('html').hasClass('firefox')) {
            vpw = '640';
            $('head').append("<meta name='viewport' content='width=" + vpw + "', initial-scale=.5, maximum-scale=.5>");
        };
    }

    function resetVP_delay() {        
        setTimeout(resetVP, 200);  

    }
})(jQuery);