;(function ($) {

    $.fn.picChange = function (options) {

        var defaults = [
            {
                desc: '',
                path: 'img/1.png'
            },
            {
                desc: '',
                path: 'img/2.png'
            },
            {
                desc: '',
                path: 'img/3.png'
            },
			{
                desc: '',
                path: 'img/4.png'
            },
			{
                desc: '',
                path: 'img/5.png'
            },
            {
                desc: '',
                path: 'img/6.png'
            }
        ];

        var setting = $.extend(defaults, options);

        let self = this;

        $.each(setting, function(index, value){
        	var picContent = $('<img src="' + value.path + '" title="myLove' + (index+1) + '">');
        	self.append(picContent);
        });

        return this;
    };
})(jQuery);

