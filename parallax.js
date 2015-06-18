$(function(){
		
		function parallax(){
			$('.wenzi').each(function(index,item){
				var font = $(this).position().top;//文字自身的位置top  是固定的 

				var top = $(this).parents().offset().top;//div自身的Top位置  递增的值

				var height = $(this).parents().outerHeight(true);//li自身的高  固定的值

				var body = $('html').scrollTop() || $('body').scrollTop();//页面scrollTop  递增的值

				if($(window).width()<1024){
					$(this).css({
					clip :'auto'
					});
				}else{
					$(this).css({
					clip : 'rect(' + ((top-font) - body + 'px') + ' auto ' + (((height)+(top-font)) - body + 'px') + ' 0px)'
					});
				}
				//console.log(top)
				// top  增大  bottom减小  在一个范围里  才可以剪切
				//                                     805        480             递减
				// console.log('clip里的top值为: div自身的Top位置－文字自身的位置top－页面的scrollTop');
				// console.log('clip里的bottom值为:li自身的高+(div自身的Top位置－文字自身的位置top)-页面的scrollTop');

			});
		}
		function slide_switch(){
			var slide_bar_li=$('.slide-bar>ul>li');
			var window_height=$(window).height();
			//console.log(window_height)
			var body_scrollTop= $('html').scrollTop() || $('body').scrollTop();
			//slide_bar_li.eq(2).addClass('active');
			if(body_scrollTop<window_height){
				slide_bar_li.removeClass('active');
				slide_bar_li.eq(0).addClass('active');
			}else if(window_height<body_scrollTop<2*window_height-1){
				slide_bar_li.removeClass('active');
				slide_bar_li.eq(1).addClass('active');
			}
			if(body_scrollTop>=2*window_height-1){
				slide_bar_li.removeClass('active');
				slide_bar_li.eq(2).addClass('active');
			}
			
		}
		parallax();

		$(window).on('scroll',function(){

			parallax();
			slide_switch();
			
		});
		$(window).on('resize',function(){

			parallax();
			
		});


	});