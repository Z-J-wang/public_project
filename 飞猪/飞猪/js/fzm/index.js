$(document).ready(function(){
	
	//header_search_btn点击搜索框变化
	$(".header_search_btn button").click(function(){
		$(this).addClass("search_switch_selected").siblings().removeClass("search_switch_selected");
	})
	$(".header_search_btn button:nth-of-type(1)").click(function(){
		$(this).parent().next().children().eq(0).attr("placeholder","目的地/酒店/景点/签证等");
	})
	$(".header_search_btn button:nth-of-type(2)").click(function(){
		$(this).parent().next().children().eq(0).attr("placeholder","");
	})
	$(".header_search_inp input").focus(function(){
		$(this).parent().next().show();
	})
	$(".header_search_inp input").blur(function(){
		$(this).parent().next().hide();
	})
	
})