;(function ($) {

    $.fn.picChange = function (options) {

        var defaults = [
        	{
        		desc: '队旗',
        		path: 'images/1.png'
        	},
        	{
        		desc: '梦幻山庄',
        		path: 'images/2.png'
        	},
        	{
        		desc: '芦苇荡',
        		path: 'images/3.png'
        	},
        	{
        		desc: '秦岭山脉',
        		path: 'images/4.png'
        	},
        	{
        		desc: '青海湖',
        		path: 'images/5.png'
        	},
        	{
        		desc: '华山之巅',
        		path: 'images/6.png'
        	}   
        ];

        var setting = $.extend(defaults, options);

        let self = this;

        $.each(setting, function(index, value){
        	var picContent = $('<li>\
					<a href="/" target="_blank"><img src="' + value.path + '" title="myLove"' + (index+1) +  '/></a>\
				</li>');
        	self.append(picContent);
        });

        return this;
    };
})(jQuery);

