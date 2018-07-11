$(document).ready(function() {
	let wWdith = $( window ).width();
	$('.navbar li a').hover(function() {
		if(wWdith > 800) {
			$('.page-home').removeClass('bg-red').addClass('bg-dark');
			// $('.page-home').find('.logo').attr('src', 'public/images/logo.png');
		}
	}, function() {
		$('.page-home').removeClass('bg-dark').addClass('bg-red');
		// $('.page-home').find('.logo').attr('src', 'public/images/logo.png');
	})
});


//details click view more
$(document).ready(function() {
	$('.icon-more').on('click', function(e) {
		e.preventDefault();


		if($('.blocks-hide').is(":visible")) {
			$('.blocks-hide').hide();
			$('.blocks-show').show();
		} else {
			$('.blocks-hide').show();
			$('.blocks-show').hide();
		}
	});
});

//contact click
$(document).ready(function() {
	$('.team-name').on('click', function(e) {
		e.preventDefault();

		if($(this).children().hasClass('arrow-down')) {
			$(this).find('.arrow-down').removeClass('arrow-down').addClass('arrow-up');
		} else {
			$(this).find('.arrow-up').removeClass('arrow-up').addClass('arrow-down');
		}

		$(this).siblings('.content-toggle').toggle();
	})
});

//detail link hover
$(document).ready(function() {
	$('.category-container .navbar-wrapper li a').hover(function() {
		$('.category-container .navbar-wrapper li p').css('visibility', 'hidden');
	}, function() {
		$('.category-container .navbar-wrapper li p').css('visibility', 'visible');
	})
});

//news link click
$(document).ready(function() {
	var posX = 0;
	$('.navbar-wrapper li a').on('click', function(e) {
		e.preventDefault();

		$(this).parent().siblings().css({opacity: .3});
	});
})