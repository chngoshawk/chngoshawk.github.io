window.onload = function(){
	var ieCheck = function (){
		var b = document.createElement('b');
		b.innerHTML = '<!--[if lte ie 8]>1<![endif]-->';
		return b.innerHTML == 1;
	}
	if(ieCheck()){
		alert('请升级您的浏览器 尊敬的用户，您现在使用的 Internet Explore 浏览器版本过低，建议您升级至 Internet Explorer 11 版本或使用其他浏览器（ 如：Google Chrome 或 Mozilla Firefox ），以便您能继续访问锤子科技的官方网站。');	
	}
}

