;(function ($) {

    $.fn.picChange = function (options) {

        var defaults = [
            {
                desc: '',
                path: 'images/1.png'
            },
            {
                desc: '',
                path: 'images/2.png'
            },
            {
                desc: '',
                path: 'images/3.png'
            },
            {
                desc: '',
                path: 'images/4.png'
            },
            {
                desc: '',
                path: 'images/5.png'
            },
            {
                desc: '',
                path: 'images/6.png'
            }
        ];

        var setting = $.extend(defaults, options);

        let self = this;

        $.each(setting, function(index, value){
        	var picContent = $('<img src="' + value.path + '" title="myLove' + (index+1) + '" />');
        	self.append(picContent);
        });
        return this;
    };
})(jQuery);

