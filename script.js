/*AGREGO MOVIMIENTO AL TÍTULO----DAN*/
let txt = "♥Patitas Felices♥ ";
let espera = 100;
let refresca = null;

function titulo() {
	document.title = txt;
	txt = txt.substring(1,txt.length)+txt.charAt(0);
	refresca = setTimeout("titulo()", espera);
		
}
titulo();

/*FIN-----AGREGO MOVIMIENTO AL TÍTULO----DAN*/

$(document).ready(function(){
  $('.carrousel').slick({
    setting:name, setting:value
  });
});

$('.center').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});