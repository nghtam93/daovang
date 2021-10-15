$(function() {

	new WOW().init();

	if($('body').hasClass('home')){
		$('.home-character__slider').slick({
			slidesToShow: 4,
			slidesToScroll: 4,
			infinite: true,
			dots: true,
			easing: "linear"
		});

		$('.home-collection__slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: true,
			dots: true,
			easing: "linear"
		});
	}
	if($('body').hasClass('maps')){
		$('#mapTab').on("click",function(e) {
			var offset_top = $('.maps-content').offset().top;
			console.log(offset_top)
			$("html, body").animate({scrollTop:offset_top},500)
		})
	}

});