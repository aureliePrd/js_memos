
/*add class avec ie+numero de version */
function msieversion() {
	    var ua = window.navigator.userAgent;
	    var msie = ua.indexOf("MSIE ");

	    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))  // If Internet Explorer, return version number
	    {
	        $('html').addClass('ie'+parseInt(ua.substring(msie + 5, ua.indexOf(".", msie))))
	        //alert(parseInt(ua.substring(msie + 5, ua.indexOf(".", msie))));
	    }
	    else  // If another browser, return 0
	    {
	       // alert('otherbrowser');
	    }

	    return false;
	}


/* userAgent : Détection Si navigateur est inférieur à IE9 alors msg d'alerte */
function ie8Inferieur(){
  var regexp = /MSIE (\d+\.\d+);/;
  if (regexp.test(navigator.userAgent)) {
      var ieversion=new Number(RegExp.$1)
      if (ieversion < 9)
      {            
          alert("Votre navigateur n’est pas pris en charge");            
      }
  }
}


/* Navigateur détecter détection */ 
/* http://www.geraudlacheny.fr/detecter-le-navigateur-de-lutilisateur-avec-jquery/ AVEC mon adaptation pour SITE UFF */
var userAgent = navigator.userAgent.toLowerCase();
$.browser = {
   version: (userAgent.match( /.+(?:rv|it|ra|ie|me)[/: ]([d.]+)/ ) || [])[1],
   chrome: /chrome/.test( userAgent ),
   safari: /webkit/.test( userAgent ) && !/chrome/.test( userAgent ),
   opera: /opera/.test( userAgent ),
   msie: /msie/.test( userAgent ) && !/opera/.test( userAgent ),
   mozilla: /mozilla/.test( userAgent ) && !/(compatible|webkit)/.test( userAgent )
};

if ($.browser['msie'] ) {   
  	alert("Votre navigateur c'est IE !");     
    var regexp = /MSIE (\d+\.\d+);/;
    if (regexp.test(navigator.userAgent)) {
        var ieversion=new Number(RegExp.$1)
        if (ieversion > 8)
        {   
            alert("Votre IE est supérieur ie8");            
        }

        else {
            alert("Votre IE est égal ou inférieur à ie8");            
        }
    }                    
}
else {
    alert("Votre navigateur n'est PAS IE !");         
}

