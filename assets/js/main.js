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

		$('.home-discover__slider').slick({
			centerMode: true,
  			centerPadding: '0',
		  	infinite: true,
		  	slidesToShow: 3,
		  	slidesToScroll: 3
		});

	}
	if($('body').hasClass('maps')){
		$('#mapTab').on("click",function(e) {
			var offset_top = $('.maps-content').offset().top;
			console.log(offset_top)
			$("html, body").animate({scrollTop:offset_top},500)
		})
	}


    // $(window).scroll(function (){
    //     const scroll = $(window).scrollTop();
    //     $('.home-wellcome--door').css({
    //         transform: 'translate3d(0, '+(scroll/10) +'%,0) scale('+(100 + scroll/5)/100+')'
    //     })
    // });


});