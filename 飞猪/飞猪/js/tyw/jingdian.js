$(document).ready(function(){
	$(".main-topl-1").hover(function(){
		$(".list").show();
	},function(){
	})
		
		$(document).mouseover(function(){
			$(".list").hide();
		})
		$(".main-topl-1").mouseover(function(event){
			event.stopPropagation();
		})
		$(".list").mouseover(function(event){
			event.stopPropagation();
		})
//	选项卡开始
			$(".guonei-conr nav ul li").click(function(){
			var	a = $(this).index();
			$(this).css("background-color","#ffc900").siblings().css("background-color","white");
			//alert(a)
		    $(this).parent().parent().next().children().eq(a).show().siblings().hide();	
		   
			})
//选项卡结束
	
})	