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

		$()
	})
})