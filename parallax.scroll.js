(function($){
	//声明全局parallax方法
	var opts=null;
	$.fn.parallax=function(options){
		return this.each(function(){
			$.setParallax(options);
		});
	}
	//setParallax方法
	$.setParallax=function(options){
		//默认参数
		var defaults={
			textDom:'.data-parallax-txt',//默认的文字DOM
			divDom:'.data-parallax-sec',//默认文字外层DOM
			widthEffective:1024//生效的宽度
		}
		//替换默认参数
		opts= $.extend( {},defaults,options);

		$(opts.textDom).each(function(){

			var font=$(this).position().top;
			var top=$(this).parents(opts.divDom).offset().top;
			var height=$(this).parents(opts.divDom).outerHeight(true);
			var body = $('html').scrollTop() || $('body').scrollTop();

			if($(window).width()<opts.widthEffective){
				$(this).css({
				position:'absolute',
				clip :''
				});
			}else{
				$(this).css({
				position:'fixed',
				clip : 'rect(' + ((top-font) - body + 'px') + ' auto ' + (((height)+(top-font)) - body + 'px') + ' 0px)'
				});
			}
		});
	}
	$(window).on('scroll',function(){
		$.setParallax(opts);
	});
	$(window).on('resize',function(){
		$.setParallax(opts);
	});
})(jQuery);