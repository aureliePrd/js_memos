
//VIEWPORT tablet / mobile dans header php dans des balises <script>
var vpw = (screen.width>=768)?'1024':'640';
document.write('<meta name="viewport" content="width='+vpw+'" >');
//

var w = window.innerWidth;
var h = window.innerHeight;

// pop up
confirm("Je vais bien");

// Demander un truc à l'utilisateur, ça ouvre une fenetre type alert avec un champ à remplir
prompt("Tu viens d'où, gros ?");


//retourne  trois lettres (de 1 à 3) === EST
//"TEST".substring(là où je commence à compter, nombre de caractères que je prends);
// attention, compte les espaces !
"TEST".substring(1,3);

//Modulo : % fait la division des deux chiffres et retourne le reste. 
//Exemple : 14 % 5 ---> 14/5 =2, le reste est 8
14 % 5 === 0  
//--> renvoie FALSE



var montrucbidule = setTimeout(function(){
    var scrollTo = $('.bloc.thankYou');
$('html, body').animate({scrollTop: scrollTo.offset().top - 60}, 300);                                      
}, 100); 

window.scrollTo(0, heightBlocTitre); 
window.scrollTo(0, $(document).height() - distance_block_footer);




//Règles pour le nom de la variable : toujours commencer par une lettre minuscule et utiliser le lowerCamelCase.
//ici "nom" est un paramètre
// On déclare une variable "saluer", on lui dit que "saluer"est une fonction et rien d'autre et qu'on lui passe le paramètre "nom"
var saluer = function (nom) {
    console.log("Content de vous voir," + " " + nom);
};

/* on peut définir la variable : ou appeler la fonction en indiquant le paramètre entre () */
var nom = Aurélie;
saluer("Emilie");


/* variable GLOBALES versus LOCALES
Le mot-clé var crée une nouvelle variable dans la zone courante, avec la portée courante. CAD :
Si var est utilisée en dehors d'une fonction, cette variable aura une portée globale. 
Si var est utilisée à l'intérieur d'une fonction, cette variable aura une portée locale.

Si on n'utilise pas le mot-clé var quand nous 
affichons mon_nombre dans la console à l'extérieur de la fonction, c'est 14 qui sera affiché.*/

var mon_nombre = 7; // ceci est une variable globale

var foisDeux = function(nombre) {
    var mon_nombre = nombre * 2;
    console.log("A l'intérieur de la fonction, mon_nombre vaut : ");
    console.log(mon_nombre);
};

foisDeux(8);

console.log("A l'extérieur de la fonction, mon_nombre vaut : ");
console.log(mon_nombre);


VS 


var mon_nombre = 7; // ceci est une variable globale

var foisDeux = function(nombre) {
    mon_nombre = nombre * 2;
    console.log("A l'intérieur de la fonction, mon_nombre vaut : ");
    console.log(mon_nombre);
};

foisDeux(8);

console.log("A l'extérieur de la fonction, mon_nombre vaut : ");
console.log(mon_nombre);












/* Intégrer bouton share fb. NE pas utiliser l'api car ça met une iframe pourrie où on ne peut donc pas modifier le css */
$(".fb").on('click', function(){        
    FB.ui({
      method: 'share',
      href: 'http://www.eucerin.fr/',
    }, function(response){});
      
 });


/* Click outside la div, pour la cacher */
    $(document).mouseup(function (e)
{
    var container = $(".maDiv");
    var nav_open = $('.nav')
    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0 // ... nor a descendant of the container
        && nav_open.is(':visible')) //ajout perso : on le fait que quand la div à fermer est visible, sinon à chaque click de la souris, on passait dedans
    {
        container.hide();
    }
});

// EXEMPLE CONCRET avec une .navigationOpen ouverte qui est à fermer quand on clique en dehors de la div .header
      $(document).mouseup(function (e)
  {
      var navigation_mobile = $(".header");
      var nav_open = $('.navigationOpen');
      if (!navigation_mobile.is(e.target)
          && navigation_mobile.has(e.target).length === 0
          && nav_open.is(':visible')) 
      {
          $( ".navigation" ).trigger( "click" ); // SIMULE le click !! nickel pour slideToggle
      }
  });


// EXEMPLE CONCRET 2 cf voituresnoires
    $menuTrig = $head.find('li.menu >a'), /* = bouton menu burger */
    $menuBox = $head.find('.menubox'), /* = menu mobile non contenu dans le bouton menu burger mais apres */
    /*
    <li class="menu"><a href="#">BURGER MENU</a></<li>
    <div class="menubox">LISTE DE MON MENU </div>
    */

    $(document).mouseup(function (e) {      
      if (!$menuTrig.is(e.target)
          && $menuBox.has(e.target).length === 0
          && $menuBox.is(':visible')) 
      {
          $menuTrig.trigger( "click" );
      }
  });




/* Pour récupérer la valeur CSS (margin, padding ...)
SANS le px % ou em à la fin !! */
$(this).css('marginBottom').replace(/[^-\d\.]/g, '');

/*En revanche, faire avec height(); ne récupère déjà que le nombre !!*/
$('.madiv').height();
/* doit exister aussi avec left, top */

// Pour vérifier qu'une condition CSS est remplie :
//Si mon élément est en position absolute alors je fais le truc. 
if ($('#yourElement').css('position') == 'absolute')
{
   // true
}

/* si myDiv n'a pas la class OPEN */
if (!$('.myDiv').hasClass("open")) {
    //do stuff
}

/* Slide horizontal */
$("#madiv").animate({width:'toggle'},350);

// ou

$("#madiv").click(function () {
  $(this).show("slide", { direction: "left" }, 1000);
});



/* Différentes façon de manipuler du CSS via Jquery */

$('.filActualite').css({
 'overflow-y' : 'scroll',
 'width' : '460px',
 'margin-right' : '30px'
});    
$('.revuedepresse .actualite').css({'margin-right' : '19px'});                                      
$('.communiquesPresse ul').css('overflow-y', 'scroll');


/* Evenement */

$('button').on('click dblclick', function(){ // on écoute le clic et le double-clic !
    alert('Ce code fonctionne !');
});

$('button').on({
    click : function(){
        alert('Vous avez cliqué !');
    },
    change : function() {
        alert('Vous avez changé cet élement !');
    },    
    mouseup : function(){
        alert('Vous avez relâché le clic !');
    }
});


$('.divGlobale').on('click', '.bouton', function () {
  // Action au click sur les éléments ayant la class .bouton DANS la .divGlobale, 
  //même s'ils sont généré dynamiquement après chargement
});

$('button').off('click').on('click', function(){ // on vide le bind avant de faire le on
    alert('Ce code fonctionne !');
});

$('.rechercheHeader')
    .find('button[type=submit]')
        .off('click.opensearch')
        .one('click.opensearch', function() {                
            $sIT.stop(true, true).animate({width:'toggle'},600);                
        });            


/*
http://vps134701.ovh.net/jquery-events.html#/6/5

La gestion des événements en jquery se fait grâce aux MGE = méthode de gestion événementielle 
.click, .dbclick, .mouseover, .mouseout, .scroll,
.keydown (appui sur une touche du clavier), .keyup  (relâchement d'une touche)
.focus, .blur, .resize, .change, .ready
.on, .one
.trigger

LA MÉTHODE ON()
DÉSACTIVER UNE MGE : PRINCIPES
La désactivation d'une MGE attachée à l'aide de la méthode on()
est possible grâce à la méthode off().
Lorsque le code se complexifie (par exemple, lors de l'utilisation
de plugins jQuery), il est conseillé d'utiliser des namespaces 
afin de faciliter la gestion des événements
EXEMPLE :*/

$('button').on('click.nom', function(){
    alert('Premier évènement');
});

$('button').on('click.prenom', function(){
    alert('Second évènement');
});

$('button').trigger('click.nom'); // exécute le clic, MAIS ne lance que la première alerte !



/* Boucle FOR */
for (var iter = 0; iter < 5; iter++) {
    alert('Itération n°' + iter);
}


var nbrSong = tracks.length;
for (var iter = 0; iter < nbrSong; iter++) {
  
  var track = tracks[iter];
  $('#liste_scroll').append('<div class="scplayer scpalyer-track-infos" data-trackid="'+ (iter + scplayerSongsList.length) +'"><span id="track-artist">' + track.user.username + '</span><span> - </span><span id="track-title">' + track.title + '</span></div>');
}



/* RESIZE AVEC OPTIMISATION */
$( window ).resize(function() {
  resize();
});


var the_timer;
function resize(){
  /*optimiser la fréquence d’exécution du code au redimensionnement */
  /*script http://www.creativejuiz.fr/blog/tutoriels/un-onresize-ou-onscroll-plus-performant-en-js */
 clearTimeout(the_timer);
  the_timer = setTimeout(function(){
    //code
  }, 75);    
}


// cette condition if else :
    if (k % 2 === 0) {
      $(this).addClass('left');
    }
    else {
      $(this).addClass('right');
    }

// c'est la mêME QUE CHOSE QUE : 
$(this).addClass(k % 2 ? 'right': 'left');

// Condition en raccourci : if cube3 existe, alors tu fais cube3.resizeCube
cube3 && cube3.resizeCube(wCube);


function paddingFlechesWithCookie() {

    var padding = $("#contentOldest").css("paddingTop").replace(/[^-\d\.]/g, '');
    var paddingNoDecimal = parseInt(padding);

    setTimeout(function(){ 
        heightCookie = $('#headerCannes .pop.cookie').height();
        console.log(paddingNoDecimal);
        var newPadding = paddingNoDecimal + heightCookie;
        console.log(newPadding);
        $("#contentOldest, #contentNewest").css("paddingTop", newPadding);        
    }, 200);

}

//Faire une action (ici cacher) sur une iframe dont l'attribut SRC comporte le texte deezer
$( "iframe[src*='deezer']" ).hide();




// Formulaire Input

/*on vérifie que TOUS les Champs ayant lattribut required (obligatoires) soient remplis, SAFARI */
function champsObligatoires() {
    required = true;    
    $("#form_contact *:required").each(function () {        
        console.log($(this).attr('name'));
        if ($(this).val() != 0) {
            console.log("ok");
            $(this).removeClass('error');
        }
        else {
            console.log("not ok");
            $(this).addClass('error');    
            $(this).one("change", champsObligatoires);        
            required = false;            
        }           
    });
    return required;
}

/* Passe le champ input submit à  disabled. cad non modifiable*/
$('form input[type=submit]').prop( "disabled", true );  
 

/* test IF is mobile is_mobile*/

var is_mobile=false;
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
 is_mobile=true;
}




/* POUR RESET un champ select option. Cad remettre le selected sur le premier champ (vide) */
/* utilisé dans cuisinart, Page POINT DE VENTE. pour le click sur la croix, en version mobile */
$('#myselect').prop('selectedIndex',0);


/*Choisir ce qu'on veut imprimer - cuisinart, page produit */
@media print
{    
    header, footer
    {
        display: none;
    }
}


/*On récupère l'ID du LI qui a une class commençant par "current") 
classname begins part of name element */    
var current_menu_id = $('ul li[class*="current"]').attr('id');
/*
Il existe aussi
[class^="current"]
[class~="current"]
*/


/*Test if variable exists*/
if (typeof variable !== 'undefined') {
    // the variable is defined
}







/*Récupérer une partie de nom d'une class*/
/*UTILISER LES EXPRESSIONS REGULIERES*/
var qclicked = $("div").attr('class');
var number = parseInt(qclicked.match(/([0-9])/)[1]);
/* ici on cherche les chiffres entre 0 et 9. ça créé un tableau, en premier [0], ça renvoie tout. 
En [1] ça renvoie ce qu'il y a dans la parenthèse 
L'ensemble est dans un ParseInt pour renvoyer un CHIFFRE et non une chaine de caractère */
/*Exemple :
<div class="q1">
qclicked renvoie q1
number renvoie 1
*/


var number = qclicked.match(/(q)([0-9])/)[2];
/*Ici, dans le tableau on aurait en [1] la première parenthèse cad "q"
Et c'est en chaine de caractère !
Donc ici number renvoie "1" "2" "3" etc...*/






//Calculer la hauteur d'un élément via jquery
$("div").height(); // hauteur de l'élément seul
$("div").innerHeight(); // inclue padding (pas border et pas margin)
$("div").outerHeight(); // inclue padding et border (pas margin)
$("div").outerHeight(true); // inclue TOUT, les margin aussi !

//This method is not applicable to window and document objects; for these, use .height() instead.


// récupérer la plus grande valeur
Math.max(10, 20);   //  20



// Function EXTERNE, pour qu'elle soit accessible dans le scope général
window.nomdemafonction = function() {
   $('.error').show();
};



/* Pour eviter de répéter 4 fois la même chose */
/* GENRE ça : */
  $('button#photos').on('click', function () {    
      var scrollTo = $('#pos_photos');      
    $('html, body').animate({scrollTop: scrollTo.offset().top - heightHeader}, 600);                                            
  });
  $('button#video').on('click', function () {   
      var scrollTo = $('#pos_video');     
    $('html, body').animate({scrollTop: scrollTo.offset().top - heightHeader}, 600);                                            
  }); 
  $('button#telechargement').on('click', function () {    
      var scrollTo = $('#pos_telechargement');      
    $('html, body').animate({scrollTop: scrollTo.offset().top - heightHeader}, 600);                                            
  }); 
  $('button#historique').on('click', function () {    
      var scrollTo = $('#pos_historique');      
    $('html, body').animate({scrollTop: scrollTo.offset().top - heightHeader}, 600);                                            
  }); 
  

/* on fait un tableau, on fait un each avec k = iteration (0 1 2 3)  et v = valeur du tableau (photos, video, etc...) */

var heightHeader = $('header #wrapper').height();
var items = ["photos", "video", "telechargement", "historique" ];
$(items).each(function(k, v) {
  $('button#'+v).on('click', function () {
      var scrollTo = $('#pos_'+v);
      var heightHeader = $('header #wrapper').height();
    $('html, body').animate({scrollTop: scrollTo.offset().top - heightHeader}, 300);                                            
  });
}); 