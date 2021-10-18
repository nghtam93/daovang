$(function() {

	new WOW().init();

	// Page Scroll
    $(document).ready(function () {
        //smoothscroll
        $('.js-click-smooth').on('click', function (e) {
            e.preventDefault();
            $(document).off("scroll");

            var target = this.hash,
            $target = $(target);
            $('html, body').stop().animate({
                'scrollTop': $target.offset().top
            },500);
        });
    });


	$('.menu__mobile').click(function(e){
	    if($('.nav__mobile').hasClass('active')){
	      $('.nav__mobile').removeClass('active')
	    } else {
	      $('#menu__mobile').addClass('active')
	    }
	  });

	  $('.menu__mobile--close').click(function(e){
	      $('.nav__mobile').removeClass('active')
	  });


	if($('body').hasClass('home')){
		$('.home-character__slider').slick({
			rows: 2,
			slidesToShow: 2,
			slidesToScroll: 2,
			infinite: true,
			dots: true,
			easing: "linear"
		});

		$('.home-collection__slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: true,
			dots: true,
			arrows: false,
			easing: "linear",
			centerMode: true,
			variableWidth: true
		});

		$('.home-island__slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: true,
			arrows: false,
			dots: true,
			easing: "linear"
		});

		$('.home-discover__slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: true,
			arrows: false,
			dots: false,
			easing: "linear",
			centerMode: true,
			variableWidth: true
		});


	}
	if($('body').hasClass('maps')){
		$('#mapTab .nav-link').on("click",function(e) {
			var offset_top = $('.maps-content').offset().top;

			$("html, body").animate({scrollTop:offset_top},500)

			var bg = $(this).data('bg');
			$('.maps-header').css('background-image','url('+bg+')')

		})



	}

});