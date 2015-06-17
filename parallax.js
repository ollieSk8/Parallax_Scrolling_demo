$(function(){
		function parallax(){
			$('.wenzi').each(function(index,item){
				var font = $(this).position().top;//文字自身的位置top  是固定的 

				var top = $(this).parents().offset().top;//div自身的Top位置  递增的值

				var height = $(this).parents().outerHeight(true);//li自身的高  固定的值

				var body = $('html').scrollTop() || $('body').scrollTop();//页面scrollTop  递增的值

				$(this).css({
					clip : 'rect(' + ((top-font) - body + 'px') + ' auto ' + (((height)+(top-font)) - body + 'px') + ' 0px)'
				});
				console.log(top)
				// top  增大  bottom减小  在一个范围里  才可以剪切
				//                                     805        480             递减
				// console.log('clip里的top值为: div自身的Top位置－文字自身的位置top－页面的scrollTop');
				// console.log('clip里的bottom值为:li自身的高+(div自身的Top位置－文字自身的位置top)-页面的scrollTop');

			});
		}
		parallax();

		$(window).on('scroll',function(){

			parallax();
			
		});
	});