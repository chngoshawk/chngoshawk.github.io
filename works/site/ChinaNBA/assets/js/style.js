$(function(){
	$('.nav>ul li').mouseover(function(){
		$('.nav>ul li').css('color','#fff');
		$(this).css('color','#00AEFF');
	});
	$('.nav>ul').mouseout(function(){
		$('.nav>ul li').css('color','#fff');
		$('.nav>ul li:first').css('color','#00AEFF');
	});
	$('.nav>ul li:eq(8),.shuju_hide').mouseover(function(){
		$('.nav>ul li').css('color','#fff');
		$('.nav>ul li:eq(8)').css('color','#00AEFF');
		$('.shuju_hide').show();
	}).mouseout(function(){
		$('.nav>ul li').css('color','#fff');
		$('.nav>ul li:first').css('color','#00AEFF');
		$('.shuju_hide').hide();
	});
	$('.sai_prev').mouseover(function(){
		$(this).css('backgroundColor','#2464B5');
	}).mouseout(function(){
		$(this).css('backgroundColor','#E5E5E5')
	});
	$('.sai_next').mouseover(function(){
		$(this).css('backgroundColor','#2464B5');
	}).mouseout(function(){
		$(this).css('backgroundColor','#E5E5E5')
	});
	$('.sai_score:eq(1) span:first').css('color','#E11647');
	$('.sai_score:eq(1) span:last').css('color','#000');
	$('.lunbo_circles li:first').css('backgroundColor','#fff');

	$('.contact_list li').mouseover(function(){
		$(this).children('[class=contact_erweima]').stop().animate({height:136},150);
	}).mouseout(function(){
		$(this).children('[class=contact_erweima]').stop().animate({height:0},150);
	});

	$('.video_title span').eq(0).css({color: '#e11647',borderBottom: '3px solid #e11647'});

	$('.video_title span').click(function(){
		$('.video_title span').css({color: '#000',borderBottom: '3px solid #fff'});
		$(this).css({color: '#e11647',borderBottom: '3px solid #e11647'})
		$('.video_list').css('display','none');
		$('.video_list').eq($(this).index()-1).css('display','block');
	});

	$(document).scroll(function(){
		if($(document).scrollTop()>78){
			$('.nav').css({'position':'fixed','top':0,'backgroundColor':'#2464B5','zIndex':'9999','height':40,'lineHeight':40});
		} else {
			$('.nav').css({'position':'static','backgroundColor':'transparent'});
		}
	});
	


});