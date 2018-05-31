$(function(){

	//第一个轮播图
	var imgW = $('.head_lb_inner img').eq(0).outerWidth();
	var i = 0;
	var j = 0;
	$('.head_lb_inner').append($('.head_lb_inner img').eq(0).clone()).css({width:imgW*$('.head_lb_inner img').length+4});
	var imgL = $('.head_lb_inner img').length;

	$('.circles li').eq(j).css({backgroundColor:'#fff'});
	function circleChange(){
		if(i > imgL - 2){
			j = 0;
		}else{
			j = i
		}
		$('.circles li').css({backgroundColor:'transparent'});
		$('.circles li').eq(j).css({backgroundColor:'#fff'});
	}
	function singleMove(){
		if(i > imgL - 1){
			i = 1;
			$('.head_lb_inner').css({left:0});
		}
		$('.head_lb_inner').stop().animate({left:-imgW*i});
	}
	setInterval(function(){
		i++;
		singleMove();
		circleChange();
	},2500)
	//第一个轮播图

	//第二个轮播图
	var m = 0;
	$('.md_lb_inner li').css({width:$(window).innerWidth()});
	var liW = $('.md_lb_inner li').eq(0).outerWidth();
	var liH = $('.md_lb_inner li').eq(0).outerHeight();
	$('.md_lb_wrapper').css({height:liH});
	$('.md_lb_inner').append($('.md_lb_inner li').eq(0).clone()).css({width:liW*$('.md_lb_inner li').size()});
	var liL = $('.md_lb_inner li').size();

	function moveSingle(){
		if(m > liL - 1){
			m = 1;
			$('.md_lb_inner').css({left:0});
		}
		$('.md_lb_inner').stop().animate({left:-liW*m},500);
	}

	setInterval(function(){
		m++;
		moveSingle();
	},2000);
	//第二个轮播图
	
	//第三个轮播图
	var n = 0;
	$('.last_lb_inner li').css({width:$(window).innerWidth()});
	var liWi = $('.last_lb_inner li').eq(0).outerWidth();
	var liHe = $('.last_lb_inner li').eq(0).outerHeight();
	$('.last_lb_wrapper').css({height:liHe});
	$('.last_lb_inner').append($('.last_lb_inner li').eq(0).clone()).css({width:liWi*$('.last_lb_inner li').size()});
	var liLe = $('.last_lb_inner li').size();

	function MoveSingle(){
		if(n > liLe - 1){
			n = 1;
			$('.last_lb_inner').css({left:0});
		}
		$('.last_lb_inner').stop().animate({left:-liWi*n},500);
	}

	setInterval(function(){
		n++;
		MoveSingle();
	},2000);
	//第三个轮播图
});