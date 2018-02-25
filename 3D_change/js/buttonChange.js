$(function() {
	
	var Page = (function() {

		var $navArrows = $( '#nav-arrows' ).hide(),
			$shadow = $( '#shadow' ).hide(),
			slicebox = $( '#sb-slider' ).slicebox( {
				onReady : function() {

					$navArrows.show();
					$shadow.show();

				},
				orientation : 'r',
				cuboidsRandom : true,
				disperseFactor : 30
			} ),
			
			init = function() {
				//初始化前进和后退按钮的点击事件
				initEvents();

				//图片自动播放
				setInterval(function(){
					slicebox.next();
				}, 3000);
			},
			initEvents = function() {

				// add navigation events
				$navArrows.children( ':first' ).on( 'click', function() {

					slicebox.next();
					return false;

				} );

				$navArrows.children( ':last' ).on( 'click', function() {
					
					slicebox.previous();
					return false;

				} );

			};

			return { init : init };

	})();

	Page.init();

});