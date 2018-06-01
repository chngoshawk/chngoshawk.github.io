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

	// 轮播图
 
	var i = 0;
	
	var imgLength = $('.lunbo .inner img').size();

	//定义图片变化函数
	function singleMove(){
		if(i > imgLength - 1){
			i = 0;
			$('.lunbo .inner img').eq(2).stop().animate({opacity:0},500).eq(i).stop().animate({opacity:1},500);
		}
		$('.lunbo .inner img').stop().animate({opacity:0},500).eq(i).stop().animate({opacity:1},500);
	}

	//定义圆圈变化函数
	function cirChange(){
		$('.lunbo_circles li').css({'backgroundColor':'#999'});
		$('.lunbo_circles li').eq(i).css('backgroundColor','#fff');
	}

	$('.lunbo_circles li').click(function(){
		i = $(this).index();
		$('.lunbo .inner img').stop().animate({opacity:0},500).eq(i).stop().animate({opacity:1},500);
		cirChange();
	});

	//定义自动轮播函数
	function autoMove(){
		i++;
		singleMove();
		cirChange();
	}

	//启动自动播放定时器
	var run = setInterval(autoMove,2000);

	//鼠标悬停事件
	$('.lunbo').mouseover(function(){
		clearInterval(run);
	}).mouseout(function(){
		run = setInterval(autoMove,2000);
	});

	// hover circls 换图片
	$('.pro_circles1 li').on('mouseover',function(){
		var index = $(this).index();

		$('.pro_circles1 li').css({border:'1px solid transparent'}).eq(index).css({border:'2px solid #b2b2b2'});
		$('.remai_item_inner1 img').css({opacity:0}).eq(index).css({opacity:1});
	})

	$('.pro_circles2 li').on('mouseover',function(){
		var index = $(this).index();

		$('.pro_circles2 li').css({border:'1px solid transparent'}).eq(index).css({border:'2px solid #b2b2b2'});
		$('.remai_item_inner2 img').css({opacity:0}).eq(index).css({opacity:1});
	})

	$('.remai_content_inner1 .remai_right_btn').click(function(){
		$('.remai_content_inner1').css({height:0});
		$('.remai_content_inner2').css({height:490});
	});

	$('.remai_content_inner2 .remai_left_btn').click(function(){
		$('.remai_content_inner2').css({height:0});
		$('.remai_content_inner1').css({height:490});
	});

	// 中英文切换按钮特效
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