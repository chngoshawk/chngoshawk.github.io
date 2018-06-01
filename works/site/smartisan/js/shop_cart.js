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
	$('.assign_detail').on('click',function(){
		location.assign('./detail.html');
	});


	// 价格统计 计算
	
	$('.btn1,.btn_all').on('click',function(){
		$('.btn1,.btn_all').toggleClass('btn_change');
		changeStyle();
	});

	$('.check').on('mouseover',function(){
		$(this).css({background:'linear-gradient(#7592d4,#5272c6)'});
	}).on('mouseout',function(){
		$(this).css({background:'linear-gradient(#799cea,#567ce6)'})
	});
	function changeStyle(){
		if($('.btn1').hasClass('btn_change')){
			$('.all_num').empty().text('0').addClass('total_change');
			$('.total_price').empty().text('0.00').addClass('total_change');
			$('.total_yen').addClass('total_change');
			$('.check').addClass('check_change').off('mouseover').off('mouseout');
		}else{
			$('.all_num').empty().text('0').removeClass('total_change');
			$('.total_price').empty().text('0.00').removeClass('total_change');
			$('.total_yen').removeClass('total_change');
			$('.check').removeClass('check_change').on('mouseover',function(){
				$(this).css({background:'linear-gradient(#7592d4,#5272c6)'});
			}).on('mouseout',function(){
				$(this).css({background:'linear-gradient(#799cea,#567ce6)'})
			});
			cal_sum();
		}
	}

	$('.jian').click(function(){

		var num = parseInt($('.fin_number').text());

		if(num === 1){
			return;
		}else {
			num -= 1;
			$('.fin_number').empty().html(num);
			changeStyle();
		}
		
	});
	$('.add').click(function(){
		var num = parseInt($('.fin_number').text());
		if(num === 200){
			return;
		}else {
			num += 1;
			$('.fin_number').empty().html(num);
			changeStyle();
		}
	});

	var single_price = parseFloat($('.price_sum').text());

	function cal_sum(){
		var num = parseFloat($('.fin_number').text());
		$('.all_num').empty().text(num);
		var sum = num * single_price;

		sum = sum.toFixed(2);

		if(sum.length > 6){
			$('.price_sum').empty().text(sum.substr(0,sum.length-6)+','+sum.substr(sum.length-6,6));
			$('.total_price').empty().text($('.price_sum').text());
		}else{
			$('.price_sum').empty().text(sum);
			$('.total_price').empty().text($('.price_sum').text());
		}
	}
	// 统计计算 完毕
	



	// 放大镜
	$('.small').mouseover(function(){
		$('.cover,.max').show();
	}).mouseout(function(){
		$('.cover,.max').hide();
	}).mousemove(function(ev){
		if(ev.pageX-$(this).offset().left < $('.cover').outerWidth()/2){
			$('.cover').css({left:0});
		}else if(ev.pageX-$(this).offset().left > $(this).outerWidth()-$('.cover').outerWidth()/2){
			$('.cover').css({left:$(this).outerWidth()-$('.cover').outerWidth()});
		}else{
			$('.cover').css({left:ev.pageX-$('.small').offset().left-$('.cover').outerWidth()/2});
		}
		if(ev.pageY-$(this).offset().top < $('.cover').outerHeight()/2){
			$('.cover').css({top:0});
		}else if(ev.pageY-$(this).offset().top > $(this).outerHeight()-$('.cover').outerHeight()/2){
			$('.cover').css({top:$(this).outerHeight()-$('.cover').outerHeight()});
		}else{
			$('.cover').css({top:ev.pageY-$('.small').offset().top-$('.cover').outerHeight()/2});
		}

		$('.max').css({left:$('.small').offset().left+$('.small').outerWidth()+20,top:$('.small').offset().top}).scrollLeft((ev.pageX-$('.small').offset().left)*5-$('.max').outerWidth()/2).scrollTop((ev.pageY-$('.small').offset().top)*5-$('.max').outerHeight()/2);
	});
	// 放大镜 结束
	


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