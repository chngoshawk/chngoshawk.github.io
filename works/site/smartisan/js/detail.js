$(function(){
	$('a').click(function(e){
		e.preventDefault();
	});

	// 跳转页面
	$('.logo,.shouye').on('click',function(){
		location.assign('./index.html');
	});
	$('.assign_list').on('click',function(){
		location.assign('./list.html');
	});
	$('.assign_log').on('click',function(){
		location.assign('./login.html');
	});
	$('.assign_cart').on('click',function(){
		location.assign('./shop_cart.html');
	});


	$('.nav_shouji_hide').css({width:$('.nav_bar').innerWidth()});
	$(window).resize(function(){
		$('.nav_shouji_hide').css({width:$('.nav_bar').width()});
	});
	$('.navf_shouji_hide').css({width:$('.navf_bar').innerWidth()});
	$(window).resize(function(){
		$('.navf_shouji_hide').css({width:$('.navf_bar').width()});
	});


	$('.nav_shouji').on('mouseover',function(){
		$('.nav_bar').css({backgroundColor:'#fff'});
	}).on('mouseout',function(){
		$('.nav_bar').css({backgroundColor:'transparent'});
	});

	$(window).scroll(function(){
		if($(this).scrollTop() > 100){
			$('.navf_bar').show().stop().animate({opacity:1,height:60},70);

		}else if($(this).scrollTop() < 100){
			$('.navf_bar').hide().stop().animate({height:0,opacity:0},70);
		}
	});

	// 放大镜
	// $('.small').mouseover(function(){
	// 	$('.cover,.max').show();
	// }).mouseout(function(){
	// 	$('.cover,.max').hide();
	// }).mousemove(function(ev){
	// 	$('.cover').css({left:ev.pageX-$('.small').offset().left-$('.cover').outerWidth()/2,top:ev.pageY-$('.small').offset().top-$('.cover').outerHeight()/2});
	// 	$('.max').css({left:$('.small').offset().left+$('.small').outerWidth(),top:$('.small').offset().top}).scrollLeft((ev.pageX-$('.small').offset().left)*2-$('.max').outerWidth()/2).scrollTop((ev.pageY-$('.small').outerHeight())*2-$('.max').outerHeight()/2);
	// });


	$('.pro_circles2 li').on('mouseover',function(){
		var index = $(this).index();

		$('.pro_circles2 li').css({border:'1px solid transparent'}).eq(index).css({border:'2px solid #b2b2b2'});
		$('.remai_item_inner2 img').css({opacity:0}).eq(index).css({opacity:1});
	})

	// 选择数量
	$('.jian').click(function(){
		var num = parseInt($('.fin_number').text());
		if(num === 1){
			return;
		}else {
			num -= 1;
			$('.fin_number').empty().html(num);
		}
		num = parseFloat($('.fin_number').text());
		cal_sum(num);
	});
	$('.add').click(function(){
		var num = parseInt($('.fin_number').text());
		if(num === 200){
			return;
		}else {
			num += 1;
			$('.fin_number').empty().html(num);
		}
		num = parseFloat($('.fin_number').text());
		cal_sum(num);
	});

	// 计算总价 固定
	var fixPosition = $('body').outerHeight()-$(window).height()-$('.footer').height();
	$(window).scroll(function(){
		if($(this).scrollTop() >= fixPosition){
			$('.total_price').css({position:'static'});
		} else {
			$('.total_price').css({position:'fixed'});
		}
	});

	var single_price = parseFloat($('.price_sum').text());
	var price_old = parseInt($('.price_old').text());

	function cal_sum(num){
		var sum = num * single_price;
		var sum_old = num * price_old;

		sum = sum.toFixed(2);
		sum_old = sum_old.toFixed(2);

		if(sum.length > 6){
			$('.price_sum').empty().text(sum.substr(0,sum.length-6)+','+sum.substr(sum.length-6,6));
		}else{
			$('.price_sum').empty().text(sum);
		}
		if(sum_old.length > 6){
			$('.price_old').empty().text(sum_old.substr(0,sum_old.length-6)+','+sum_old.substr(sum_old.length-6,6));
		}else{
			$('.price_old').empty().text(sum_old);
		}
	}


	// footer lang_change
	$('.lang').click(function(ev){
		ev.stopPropagation();
		$('.lang_list').show().css({opacity:1});
		$('.lang_angle_change').addClass('lang_angle_turn');
	});

	$('.click_not_hide').click(function(ev){
		ev.stopPropagation();
		$('.lang_list').show().css({opacity:1});
	});
	document.onclick = function(ev){
		$('.lang_list').hide().css({opacity:0});
		$('.lang_angle_change').removeClass('lang_angle_turn');
	}
});