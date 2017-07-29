(function ($, win) {
	var header = $('#rs-header');
	var winHeight = 0;
			
	var setHeight = function() {
		winHeight = $( window ).height();

		$('#rs-hero').css({
			height: winHeight - 64
		});
	};
	
	var setminHeight = function () {
		$('[data-min-height]').each(function() {
			$(this).css({
				'min-height': winHeight
			})
		})
	};
	
	var getMobileOperatingSystem = function () {
		var userAgent = navigator.userAgent || navigator.vendor || window.opera;
			// iOS detection from: http://stackoverflow.com/a/9039885/177710
			if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
				var css = 'html { background-attachment: initial;; }',
				head = document.head || document.getElementsByTagName('head')[0],
				style = document.createElement('style');

				style.type = 'text/css';
				if (style.styleSheet){
					style.styleSheet.cssText = css;
				} else {
					style.appendChild(document.createTextNode(css));
				}

				head.appendChild(style);
			}
	};
	
	getMobileOperatingSystem();
	setHeight();
	setminHeight();
	
	header.on('click', 'a', function(){
		var id = $(this).data('section');
		
		$('html,body').animate({
			scrollTop: $(id).offset().top
		}, 'slow');
	});
	
	$(win).on('resize', function(){
		setHeight();
		setminHeight();
	});
	
})(jQuery, window);