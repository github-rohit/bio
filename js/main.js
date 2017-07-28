(function ($, win) {
	var header = $('#rs-header');
	
	var setHeight = function() {
		var winHeight = $( window ).height();

		$('#rs-hero').css({
			height: winHeight - 64
		});
	};

	setHeight();
	
	$(win).on('resize', function(){
		setHeight();
	});
	
})(jQuery, window);