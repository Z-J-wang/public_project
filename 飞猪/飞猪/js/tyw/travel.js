$(document).ready(function(){

//图片轮播
			var count = 0;
		    var timer = null;
		    //
		    function slide() {
		        $('.page_img li').eq(count).show().siblings().hide();
		        //$('.page_con li').eq(count).css('background', '#FE3C3A').siblings().css('background', '#CCCCCC');
		    	$('.page_con li').eq(count).css({"background":"#FE3C3A","color":"white"}).siblings().css({"background":"gray","color":"black"});
		    }
		    function time (){
		        count ++;
		        if(count >= $('.page_img li').length){
		            count = 0;
		        }
		        slide();
		    }
		    slide();
		    timer = setInterval(time, 1000);
		    $('.btn-l').click(function () {
		        count--;
		        if (count < 0) {
		            count = $('.page_img li').length - 1;
		        }
		        slide();
		    });
		    $('.btn-r').click(function () {
		        time();
		        return false;
		        
		    });
		    $('.page_con li').mouseenter(function () {
		        clearInterval(timer);
		        count = $(this).index();
		        slide();
		        return false;
		    });
		    $('#banner_center').mouseenter(function () {
		        $('#banner_center span').show();
		        clearInterval(timer);
		        return false;
		    });
		    $('#banner_center').mouseleave(function () {
		        $('#banner_center span').hide();
		        timer = setInterval(time, 1000);
		        return false;
		    });
		    
		    //轮播结束
		    
		//加边框 开始
//		    $(".main-topr22").hover(function(){
//		    	//alert("11")
//		    	$(this).css("border":"2px red solid");
//		    })
		//加边框结束
		    
 	// 选项卡
			$(".jingnei nav dl dd").click(function(){
			var	a = $(this).index();
			$(this).css("background-color","#ffc900").siblings().css("background-color","white");
			
//			alert(a)
		   $(this).parent().parent().next().children().eq(a).show().siblings().hide();	
		   
			})
	//选项卡结束
//		$(".jingnei nav dl dd").focus(function(){
//			$("this").css("background-color","#FFFFCC");
//		});
//	
	
//周边游的阴影开始
			$(".zhoubian-all1").hover(function(){
				$(".zhoubian-bla1").show();
				$(".zhoubian-T1 a").animate({"bottom":"30px"},200)
			},function(){
				$(".zhoubian-bla1").hide();
				$(".zhoubian-T1 a").animate({"bottom":"0px"},200)
			})
			
			$(".zhoubian-all2").hover(function(){
				$(".zhoubian-bla2").show();
				$(".zhoubian-T2 a").animate({"bottom":"30px"},200)
			},function(){
				$(".zhoubian-bla2").hide();
				$(".zhoubian-T2 a").animate({"bottom":"0px"},200)
			})
			
			$(".zhoubian-all3").hover(function(){
				$(".zhoubian-bla3").show();
				$(".zhoubian-T3 a").animate({"bottom":"30px"},200)
			},function(){
				$(".zhoubian-bla3").hide();
				$(".zhoubian-T3 a").animate({"bottom":"0px"},200)
			})
			
			
			$(".zhoubian-all4").hover(function(){
				$(".zhoubian-bla4").show();
				$(".zhoubian-T4 a").animate({"bottom":"30px"},200)
			},function(){
				$(".zhoubian-bla4").hide();
				$(".zhoubian-T4 a").animate({"bottom":"0px"},200)
			})
			
			
			$(".zhoubian-all5").hover(function(){
				$(".zhoubian-bla5").show();
				$(".zhoubian-T5 a").animate({"bottom":"30px"},200)
			},function(){
				$(".zhoubian-bla5").hide();
				$(".zhoubian-T5 a").animate({"bottom":"0px"},200)
			})
			
			
			$(".zhoubian-all6").hover(function(){
				$(".zhoubian-bla6").show();
				$(".zhoubian-T6 a").animate({"bottom":"30px"},200)
			},function(){
				$(".zhoubian-bla6").hide();
				$(".zhoubian-T6 a").animate({"bottom":"0px"},200)
			})
			
			
			
			$(document).click(function(){
				$("#in_city").hide();
			})
			$("#place").click(function(event){
				event.stopPropagation();
			})
			$("#in_city").click(function(event){
				event.stopPropagation();
			})
			$("#place").click(function(){
				$("#in_city").css("top","35px");
				$("#in_city").css("left","40px");
				$("#in_city").show();
			})

			

//周边游的阴影结束
	
	
		    
})