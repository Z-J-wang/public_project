$(document).ready(function(){

//图片轮播
			var count = 0;
		    var timer = null;
		    //
		    function slide() {
		    	$('.page_img li').eq(count).siblings().hide();
		    	
		    	$('.page_img li').eq(count).fadeIn();
//		        $('.page_img li').eq(count).fadeIn().siblings().fadeOut();
		        //$('.page_con li').eq(count).css('background', '#FE3C3A').siblings().css('background', '#CCCCCC');
		    	$('.page_con li').eq(count).css({"background":"#FE3C3A","color":"white"}).siblings().css({"background":"#CCCCCC","color":"black"});
		    }
		    function time (){
		        count ++;
		        if(count >= $('.page_img li').length){
		            count = 0;
		        }
		        slide();
		    }
		    slide();
		    timer = setInterval(time, 2000);
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
		    $('.page_con li').click(function () {
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
		    
		$(".xinxilan_all").hover(function(){
//			$(".xinxilan img").css({"width":"450px","height":"800px"});
//			$(".xinxilan img").animate({width:"450px",height:"800px"},1000);		
			$(".xinxilan_intro").animate({bottom:"360px"},1000);
			$(".xinxilan_intro p").slideUp(1000);
			$(".xinxilan_intro1").show();
			$(".xinxilan_intro1").animate({bottom:"280px"},1000);
			
		},function(){
			$(".xinxilan_intro").animate({bottom:"300px"},1000);		
			$(".xinxilan_intro1").animate({bottom:"220px"},1000);
			$(".xinxilan_intro1").hide();
			$(".xinxilan_intro p").slideDown(1000);
		})
		    
		    
})    