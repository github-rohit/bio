(function ($, win) {
	var header = $('#rs-header');
	
	var setHeight = function() {
		var winHeight = $( window ).height();

		$('#rs-hero').css({
			height: winHeight - 64
		});
	};
	
	var fixNavbar = function () {
		
	}
	
	
	
	
	
	setHeight();
	
	$(win).on('scroll', function(){
		fixNavbar();
	}).on('resize', function(){
		setHeight();
	});
	
})(jQuery, window);