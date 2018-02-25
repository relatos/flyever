;(function ($) {

    $.fn.picChange = function (options) {

        var defaults = [
        	{
        		desc: '����',
        		path: 'images/1.png'
        	},
        	{
        		desc: '�λ�ɽׯ',
        		path: 'images/2.png'
        	},
        	{
        		desc: '«έ��',
        		path: 'images/3.png'
        	},
        	{
        		desc: '����ɽ��',
        		path: 'images/4.png'
        	},
        	{
        		desc: '�ຣ��',
        		path: 'images/5.png'
        	},
        	{
        		desc: '��ɽ֮��',
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

