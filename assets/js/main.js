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

	$(".selected").hover(function () {
	      var hoverImg = HoverImgOf($(this).attr("src"));
	      $(this).attr("src", hoverImg);
	}, function () {
	      var normalImg = NormalImgOf($(this).attr("src"));
	      $(this).attr("src", normalImg);
	});

	function HoverImgOf(filename) {
	    var re = new RegExp("(.+)\\.(gif|png|jpg)", "g");
	    return filename.replace(re, "$1_hover.$2");
	}


    $(window).scroll(function (){
        const scroll = $(window).scrollTop();
        $('.home-wellcome--door').css({
            transform: 'translate3d(0, '+(scroll/10) +'%,0) scale('+(100 + scroll/5)/100+')'
        })
    });


});