$(function(){
	$('a').click(function(ev){
		ev.preventDefault();
	});

	// 设置页面跳转
	$('.assign_log').click(function(){
		location.assign('./login.html');
	});
	// 设置页面跳转



	// 默认打开页面鼠标聚焦在 电话号码
	$('.us_num').focus().parent().css({borderColor: '#6B93F2'});
	// 默认打开页面鼠标聚焦在 电话号码


	//设置打开国家列表并选择国家 这里只实现了改变国家的功能，并不能改变区号
	$('.country').click(function(){
		$('.cou_angle,.cou_list').toggleClass('geos_show');
	});

	$('.cou_list li').click(function(){
		$('.country').text($(this).text());
		$(this).parent().removeClass('geos_show');
	});
	//设置打开国家列表并选择国家 这里只实现了改变国家的功能，并不能改变区号


	//定义正则表达式
	var reg_phone = /^1[3-9][0-9]{9}$/;
	var reg_yzm = /^\w{6}$/;
	var reg_psw = /(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^.{6,16}$/;
	//定义正则表达式


	//用户手机号正则判断 并实现一些样式改变的功能
	$('.us_num').focusout(function(){
		var us_num = $(this).val();
		if(reg_phone.test(us_num)){
			$('.get_yzm').addClass('get_yzm_change');
		}else{
			$('.get_yzm').removeClass('get_yzm_change');
		}
	});
	$('.us_num').focusout(function(){

		$(this).parent().removeClass('border_change').on('mouseover',function(){
			$(this).stop().animate({borderColor:'#ccc'});
		});
		$('.country').removeClass('country_change');

		var userName = $('.us_num').val();

		if(!reg_phone.test(userName) && !userName == ''){
			$(this).parent().off('mouseout').off('mouseover').css({borderColor:'#D16D62',opacity:1});
			$('.num_err').show();
		}else{
			$(this).parent().css({borderColor:'#ccc'});
			$('.num_err').hide();
		}
	}).focusin(function(){
		$(this).parent().addClass('border_change').off('mouseover').removeAttr('style');
		$('.country').addClass('country_change');
	});
	//用户手机号正则判断 并实现一些样式改变的功能



	//用户验证码判断
	$('.yan').focusin(function(){
		$(this).parent().addClass('border_change').off('mouseover').removeAttr('style');
	}).focusout(function(){
		$(this).parent().removeClass('border_change').on('mouseover',function(){
			$(this).stop().animate({borderColor:'#ccc'});
		});
		var yzm = $(this).val();
		if(!reg_yzm.test(yzm) && yzm != ''){
			$(this).parent().off('mouseout').off('mouseover').css({borderColor:'#D16D62',opacity:1});
			$('.yzm_err').show();
		}else{
			$(this).parent().css({borderColor:'#ccc'});
			$('.yzm_err').hide();
		}
	});
	//用户验证码判断



	//用户密码判断
	$('.password1').focusin(function(){
		$(this).parent().addClass('border_change').off('mouseover').removeAttr('style');
	}).focusout(function(){
		var password = $(this).val();
		if(!reg_psw.test(password) && password != ''){
			$(this).parent().off('mouseout').off('mouseover').css({borderColor:'#D16D62',opacity:1});
			$(this).siblings('i').show();
		}else{
			$(this).parent().css({borderColor:'#ccc'});
			$(this).siblings('i').hide();
		}
	});

	$('.password2').focusin(function(){
		$(this).parent().addClass('border_change').off('mouseover').removeAttr('style');
	}).focusout(function(){
		var password1 = $('.password1').val();
		var password2 = $(this).val();
		if(password1 != password2){
			$(this).parent().off('mouseout').off('mouseover').css({borderColor:'#D16D62',opacity:1});
			$(this).siblings('i').show();
		}else{
			$(this).parent().css({borderColor:'#ccc'});
			$(this).siblings('i').hide();
		}
	});
	//用户密码判断



	// 判断是否符合注册条件 并改变注册按钮样式
	$('input').focusout(check);
	$('.gou').click(function(){
		var userName = $('.us_num').val();
		var yzm = $('.yan').val();
		var password1 = $('.password1').val();
		var password2 = $('.password2').val();

		if(reg_phone.test(userName) && reg_yzm.test(yzm) && reg_psw.test(password1) && (password1 === password2) && ($(this).css('backgroundPosition') === '0px -20px')){
			$('.zhuce').addClass('zhuce_change');
		}else{
			$('.zhuce').removeClass('zhuce_change');
		}
	});

	function check(){
		var userName = $('.us_num').val();
		var yzm = $('.yan').val();
		var password1 = $('.password1').val();
		var password2 = $('.password2').val();

		if(reg_phone.test(userName) && reg_yzm.test(yzm) && reg_psw.test(password1) && (password1 === password2) && ($('.gou').css('backgroundPosition') === '0% 0%')){
			$('.zhuce').addClass('zhuce_change');
		}else{
			$('.zhuce').removeClass('zhuce_change');
		}

	}
	// 判断是否符合注册条件 并改变注册按钮样式


	// 改变密码提示 显示 和 隐藏
	$('.password').click(function(ev){
		$('.psw_tip').stop().fadeOut(500);
		$(this).siblings('.psw_tip,.angle').stop().fadeIn(500);
		ev.stopPropagation();
	});
	$('html,body').click(function(ev){
		$('.psw_tip').hide();
		ev.stopPropagation();
	})

	$('.gou').click(function(){
		$(this).toggleClass('gou_change');
	});
	// 改变密码提示 显示 和 隐藏

});