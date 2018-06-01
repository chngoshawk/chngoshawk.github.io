$(function(){
	var i = 0;
	var j = 0;
	var imgWidth = $('.inner a:first').width();
	$('.inner').append($('.inner a').eq(0).clone()).width(imgWidth*$('.inner a').size());
	var imgLength = $('.inner a').size();

	//点击下一张
	$('.next').click(function(){
		cirChange()
		i++;
		singleMove();
		cirChange()
	});

	//点击上一张
	$('.prev').click(function(){
		cirChange()
		i--;
		singleMove();
		cirChange()
	});

	//定义图片变化函数
	function singleMove(){
		if(i > imgLength - 1){
			i = 1;
			$('.inner').css('left',0);
		} else if(i < 0){
			i = imgLength - 2;
			$('.inner').css('left',-imgWidth * (imgLength - 1));
		}
		$('.inner').stop().animate({left:-imgWidth*i},100);
	}

	//定义圆圈变化函数
	function cirChange(){
		if(i > imgLength -2){
			j = 0;
		} else {
			j = i;
		}
		$('.lunbo_circles li').css({'backgroundColor':'#979797'});
		$('.lunbo_circles li').eq(j).css('backgroundColor','#fff');
	}

	$('.lunbo_circles li').mouseover(function(){
		i = j = $(this).index();
		$('.inner').css({left:-imgWidth*i})
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
		$('.prev,.next').show();
	}).mouseout(function(){
		run = setInterval(autoMove,2000);
		$('.prev,.next').hide();
	});
});