$(function() {
	$(".popup_content").click(function() {
    $("#form_proschet,#form_cena").animated("flipInY");
})
$(".popup").magnificPopup({type:"image"});
	$(".popup_content").magnificPopup({
		type:"inline",
		midClick: true
	});


	$(".toggle_mnu").click(function() {
		$(".sandwich").toggleClass("active");
	});



	$(".toggle_mnu").click(function() {
		if ($(".top_mnu ul").is(":visible")) {
			$(".top_text").css("opacity", "1");
			$(".top_mnu ul ").fadeOut(600);
			$(".top_mnu ul li a").removeClass("fadeInUp animated");
		} else {
			$(".top_text").css("opacity", ".1");
			$(".top_mnu ul").fadeIn(600);
			$(".top_mnu ul li a").addClass("fadeInUp animated");
		};
	});



var owl = $(".slider");

owl.owlCarousel({
      loop:true,
    responsive:{
        0:{
            items:1,
            nav:true   
        }
    },
    navText : "", 
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    transitionStyle : "fade"     
});
$(".next").click(function() {
	owl.trigger('next.owl.carousel');
})
$(".prev").click(function() {
	owl.trigger('prev.owl.carousel');
});

var owlOne = $(".slide-one");
owlOne.owlCarousel({
      loop:true,
      margin: 28,
    responsive:{
        0:{
            items:1,
            nav:true   
        },        
        568:{
            items:2,
            nav:true   
        },
        750:{
            items:3,
            nav:true   
        },
        1170:{
            items:4,
            nav:true   
        }
    },
    navText : ""
});
$(".next").click(function() {
	owlOne.trigger('next.owl.carousel');
})
$(".prev").click(function() {
	owlOne.trigger('prev.owl.carousel');
});
	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};


	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});


// initMap() - функция инициализации карты
function initMap() {
	// Координаты центра на карте. Широта: 56.2928515, Долгота: 43.7866641
	var centerLatLng = new google.maps.LatLng(56.2928515, 43.7866641);
	// Обязательные опции с которыми будет проинициализированна карта
	var mapOptions = {
		center: centerLatLng, // Координаты центра мы берем из переменной centerLatLng
		zoom: 8               // Зум по умолчанию. Возможные значения от 0 до 21
	};
	// Создаем карту внутри элемента #map
	var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}
// Ждем полной загрузки страницы, после этого запускаем initMap()
google.maps.event.addDomListener(window, "load", initMap);