$(function() {

	new WOW().init();

	/*----Languages---*/
	$('.languages .languages-item').click(function() {
		$(this).next().toggleClass('dropdown-languages');
		isClicked = true;
	});

	$('.languages ul li').click(function() {
	    var $liIndex = $(this).index() + 1;
	    $('.languages ul li').removeClass('active');
	    $('.languages ul li:nth-child('+$liIndex+')').addClass('active');
	    var $getLang = $(this).html();
	    $('.languages .languages-item').html($getLang);

	    $('.languages>ul').removeClass('dropdown-languages')
	});

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


	if($('body').hasClass('home')){
		$('.home-character__slider').slick({
			slidesToShow: 4,
			slidesToScroll: 1,
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
		$('#mapTab .nav-link').on("click",function(e) {
			// var offset_top = $('.maps-content').offset().top;
			// $("html, body").animate({scrollTop:offset_top},500)
			var bg = $(this).data('bg');
			var sub = $(this).data('sub');
			$('.maps-header').css('background-image','url('+bg+')')
			$('.js-tab-sub').text(sub)
		})
	}

	if($('body').hasClass('about')){
		$('.home-partners-slider').slick({
			rows: 2,
			slidesToShow: 5,
			slidesToScroll: 1,
			infinite: true,
			arrows: true,
			dots: false,
			easing: "linear"
		});
	}

});