$(function() {
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

	// var topMenuHeight = $('header.header').outerHeight()

	// if(window.location.hash){
 //        $(document).off("scroll");
 //        var target = window.location.hash,
 //            menu = target;
 //        $target = $(target);
 //        $('html, body').stop().animate({
 //            'scrollTop': $target.offset().top - topMenuHeight
 //        });
 //    }

 //    $('.main__nav a[href^="#"]').on('click', function (e) {
 //        e.preventDefault();
 //        $(document).off("scroll");
 //        console.log(topMenuHeight)
 //        $('a').each(function () {
 //            $(this).removeClass('active');
 //        })
 //        $(this).addClass('active');

 //        var target = this.hash,
 //            menu = target;
 //        $target = $(target);
 //        $('html, body').stop().animate({
 //            'scrollTop': $target.offset().top - topMenuHeight
 //        });
 //    });



});