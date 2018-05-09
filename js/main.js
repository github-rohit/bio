(function ($, win) {
    'use strict';
    
	var header = $('#rs-header');
	var winHeight = 0;
			
	var setHeight = function() {
		winHeight = $(win).height();

		$('#rs-hero').css({
			height: winHeight - 64
		});
	};
	
	var setminHeight = function () {
		$('[data-min-height]').each(function() {
			$(this).css({
				'min-height': winHeight
			});
		});
	};

	setHeight();
	setminHeight();
	
	header.on('click', 'a', function() {
		var id = $(this).data('section');
		
		$('html,body').animate({
			scrollTop: $(id).offset().top
		}, 'slow');
	});
	
	$(win).on('resize', function() {
		setHeight();
		setminHeight();
	});
    
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/service-worker.js');
    }
    
	
})(jQuery, window);