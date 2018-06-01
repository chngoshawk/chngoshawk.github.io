$(function(){

	//设置页面长度单位rem
	var winWidth = window.innerWidth;
	var winHeight = window.innerHeight;

	document.documentElement.style.fontSize = (winWidth / 18) + 'px';
	//设置页面长度单位rem

	$('.menu').on('click',function(){
		if($('.menu_list').outerHeight() === 0){
			$('.menu_list').stop().animate({height:winHeight},200);
		}else{
			$('.menu_list').stop().animate({height:0},200);
		}
	});

});