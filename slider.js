///////////////////////////////////////////////////////////////////
///////////// THIS PLUGIN DEVELOPED BY will myers /////////////////
///////////////////////////////////////////////////////////////////

var slidervars = {};

(function ($) {

    var methods = {
        assign: function (val1, val2, val3, val4) {
  
            slidervars.time = val1;
            slidervars.duration = val2;
            slidervars.padding = val3;
            slidervars.array = val4;
            slidervars.counter = 0;
            slidervars.amount = $(this).width()+slidervars.padding;

            $(this).css({ 'overflow': 'hidden' });
            $(this).append($("<div>").attr('id', 'slideItem').css({ 'display': 'block', 'position': 'absolute', 'left': (slidervars.amount - (slidervars.amount * 2)) + 'px', 'top': slidervars.padding +'px', 'white-space': 'nowrap' }));

        },
        apply: function () {
            if ((slidervars.counter + 1) > slidervars.array.length) slidervars.counter = 0;
            $('#slideItem').html(slidervars.array[slidervars.counter]);
            $('#slideItem').animate(
			    {
			        left: slidervars.padding
			    }, slidervars.duration, function () {
			        $('#slideItem').delay(slidervars.time).animate(
						    {
						        left: (slidervars.amount + 'px')
						    }, slidervars.duration, function () {
						        $('#slideItem').css('left', (slidervars.amount - (slidervars.amount * 2)) + 'px');
						        slidervars.counter += 1;
						        $(this).slider('apply', slidervars.time);
						    });
			    });
        }
    };

    $.fn.slider = function (methodOrOptions) {
        if (methods[methodOrOptions]) {
            return methods[methodOrOptions].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof methodOrOptions === 'object' || !methodOrOptions) {
            // Default to "init"
            return methods.init.apply(this, arguments);
        } else {
            console.log('Method ' + methodOrOptions + ' does not exist on jQuery.tooltip');
        }
    };
})(jQuery);