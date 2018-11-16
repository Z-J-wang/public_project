$(document).ready(function(){
//	回到顶部
	$(".HDDB").click(function(){
		$('body,html').animate({scrollTop:0},500);
	})
	
//	意见反馈
	$(".YJFK").hover(function(){
//		$(this).find(".TCK").show();
		$(this).find(".TCK").stop().animate({left:"-80px"});
		
	},function(){
		$(this).find(".TCK").stop().animate({left:"20px"})
//		$(this).find(".TCK").hide(500);
	})
	
//	返回顶部
	$(".HDDB").hover(function(){
		$(this).find(".TCK").show();
		$(this).find(".TCK").animate({left:"-75px"})
	},function(){
		$(this).find(".TCK").animate({left:"20px"})
		$(this).find(".TCK").hide(500);
	})
//	二维码
	$(".EWM").hover(function(){
//		$(this).find(".TCK_ewm").animate({left:"-120px"})
	$(this).find(".TCK_ewm").show(500)
	},function(){
//		$(this).find(".TCK_ewm").animate({left:"40px"})
		$(this).find(".TCK_ewm").hide(500);
	})
})
