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

	$('.pro_circles2 li').on('mouseover',function(){
		var index = $(this).index();

		$('.pro_circles2 li').css({border:'1px solid transparent'}).eq(index).css({border:'2px solid #b2b2b2'});
		$('.remai_item_inner2 img').css({opacity:0}).eq(index).css({opacity:1});
	})


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