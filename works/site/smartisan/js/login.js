$(function(){
	$('a').click(function(ev){
		ev.preventDefault();
	});

	$('.zczh').click(function(){
		location.assign('./registration.html');
	});

	var reg_phone = /^1[3-9][0-9]{9}$/;
	var reg_yx = /^[A-z0-9_]+@[A-z0-9-]+\.[A-z]+$/;

	$('.gou').click(function(){
		var userName = $('.username').val();
		var password = $('.password').val();

		if((reg_phone.test(userName) || reg_yx.test(userName)) && userName != '' && password != '' && $('.gou').css('backgroundPosition') === '0px -20px'){
			$('.dl').addClass('dl_change');
		}else{
			$('.dl').removeClass('dl_change');
		}
	});

	$('.submit input').focusout(function(){

		$(this).parent().removeClass('border_change');
		var userName = $('.username').val();
		var password = $('.password').val();

		if(!reg_phone.test(userName) && !reg_yx.test(userName) && !userName == ''){
			$('.user_inner').off('mouseout').off('mouseover').css({borderColor:'#D16D62',opacity:1});
			$('.user_err').show();
		}else{
			$('.user_inner').css({borderColor:'#ccc'});
			$('.user_err').hide();
		}
		if((reg_phone.test(userName) || reg_yx.test(userName)) && userName != '' && password != '' && $('.gou').css('backgroundPosition') === '0% 0%'){
			$('.dl').addClass('dl_change');
		}else{
			$('.dl').removeClass('dl_change');
		}
	}).focusin(function(){
		$(this).parent().addClass('border_change');
	});

	$('.gou').click(function(){
		$(this).toggleClass('gou_change');
	});

});