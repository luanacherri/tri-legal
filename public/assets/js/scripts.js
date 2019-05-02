
 $('.btn-mobile').click(function() {
 	$(this).toggleClass('active');
 	$(this).parent().find('.menu').toggleClass('active');
 });

 $('header .anchor').click(function() {
 	var width = $(window).witdh();
 	if(width < 768) {
	 	$('.btn-mobile').removeClass('active');
	 	$('nav').removeClass('active');	
 	}
});