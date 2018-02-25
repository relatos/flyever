(function($){
	var hjzgg_background = $('#hjzgg_background');
	var assist_background = $('#assist_background');
	var imagePaths = ['backgroundImages/1.png', 'backgroundImages/2.png', 'backgroundImages/3.png', 'backgroundImages/4.png', 'backgroundImages/5.png', 'backgroundImages/6.png'];
	var index = 0;
	hjzgg_background.css('background-image', 'url(' + imagePaths[0] + ')');
	hjzgg_background.css('background-repeat', 'no repeat');
	hjzgg_background.css('background-size', '100% 100%');
	hjzgg_background.css('opacity', '0.5');
	assist_background.css('opacity', '0.0');
	hjzgg_background.animate({'background-size': '150%', 'background-position': '-200px', 'opacity': '1.0'}, 3000);

	window.setTimeout(function(){
		window.setInterval(function(){
			if(++index >= imagePaths.length) index = 0;
			var curPath = imagePaths[index];
			var prePath = imagePaths[index == 0 ? imagePaths.length-1 : index-1];
			assist_background.css('background-image', 'url(' + curPath + ')');
			assist_background.css('background-size', '100% 100%');
			assist_background.css('opacity', '0');

			hjzgg_background.animate({'background-size': '100%', 'background-position': '0px', 'opacity': '0'}, 3000);
			assist_background.animate({'background-size': '150%', 'background-position': '-200px', 'opacity': '1.0'}, 3000);

			window.setTimeout(function(){
				var tmp = hjzgg_background;
				hjzgg_background = assist_background;
				assist_background = tmp;
			}, 3000);
		}, 5000);
	}, 2000);
})(jQuery);