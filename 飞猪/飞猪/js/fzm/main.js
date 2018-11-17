$(document).ready(function(){
	
	//中间第一部分选项卡centent_frist_l_a
	$(".centent_frist_l_a ul li").click(function(){
		$(this).addClass("centent_frist_l_a_hot").siblings().removeClass("centent_frist_l_a_hot");
		var $a = $(this).index();
		$(this).parent().parent().next().children().eq($a).show().siblings().hide();
	})
	//中间第一部分选项卡centent_frist_l_b_tabnav水平
	$("#centent_frist_l_b_tabnav ul li").click(function(){
		var $a = $(this).index();
		$(this).parent().parent().next().children().eq($a).show().siblings().hide();
		if ($a == 0) {
			$(this).parent().next().animate({left:"30px",width:"68px"},100);
		} else if ($a == 1) {
			$(this).parent().next().animate({width:"115px",left:"107px"},100);
		} else if ($a == 2) {
			$(this).parent().next().animate({left:"235px",width:"68px"},100);
		} else if ($a == 3) {
			$(this).parent().next().animate({left:"313px",width:"116px"},100);
		}
	})
	
	$("#centent_frist_l_b_tabnav1 ul li").click(function(){
		var $a = $(this).index();
		$(this).parent().parent().next().children().eq($a).show().siblings().hide();
		if ($a == 0) {
			$(this).parent().next().animate({left:"30px",width:"40px"},100);
		} else if ($a == 1) {
			$(this).parent().next().animate({width:"40px",left:"80px"},100);
		} else if ($a == 2) {
			$(this).parent().next().animate({left:"130px",width:"40px"},100);
		}
	})
	
	$("#centent_frist_l_b_tabnav2 ul li").click(function(){
		var $a = $(this).index();
		$(this).parent().parent().next().children().eq($a).show().siblings().hide();
		if ($a == 0) {
			$(this).parent().next().animate({left:"30px",width:"40px"},100);
		} else if ($a == 1) {
			$(this).parent().next().animate({width:"50px",left:"80px"},100);
		} else if ($a == 2) {
			$(this).parent().next().animate({left:"145px",width:"50px"},100);
		} else if ($a == 3) {
			$(this).parent().next().animate({left:"210px",width:"50px"},100);
		} else if ($a == 4) {
			$(this).parent().next().animate({left:"275px",width:"50px"},100);
		} else if ($a == 5) {
			$(this).parent().next().animate({left:"335px",width:"40px"},100);
		} else if ($a == 6) {
			$(this).parent().next().animate({left:"390px",width:"70px"},100);
		} else if ($a == 7) {
			$(this).parent().next().animate({left:"478px",width:"85px"},100);
		}
	})
	
	$("#centent_frist_l_b_tabnav3 ul li").click(function(){
		var $a = $(this).index();
		$(this).parent().parent().next().children().eq($a).show().siblings().hide();
		if ($a == 0) {
			$(this).parent().next().animate({left:"30px",width:"66px"},100);
		} else if ($a == 1) {
			$(this).parent().next().animate({width:"66px",left:"105px"},100);
		} else if ($a == 2) {
			$(this).parent().next().animate({left:"185px",width:"66px"},100);
		} else if ($a == 3) {
			$(this).parent().next().animate({left:"260px",width:"60px"},100);
		} else if ($a == 4) {
			$(this).parent().next().animate({left:"323px",width:"60px"},100);
		}
	})
	
	
	//单程返程

	$(".dan1 span").click(function(){
		$(".dan1 span").removeClass("centent_frist_l_b_tabxuan_checka");
		$(".dan1 span").removeClass("centent_frist_l_b_tabxuan_checkb");
		$(this).addClass("centent_frist_l_b_tabxuan_checka").siblings().addClass("centent_frist_l_b_tabxuan_checkb");
		var $a = $(this).index();
		if ($a==0) {
			$(".fancen").css({"color":"#ccc"});
			$("#text").val("");
		} 
		if ($a==1){
			$(".fancen").css({"color":"#6c6c6c"});
		}
	})
	
	$(".dan2 span").click(function(){
		$(".dan2 span").removeClass("centent_frist_l_b_tabxuan_checka");
		$(".dan2 span").removeClass("centent_frist_l_b_tabxuan_checkb");
		$(this).addClass("centent_frist_l_b_tabxuan_checka").siblings().addClass("centent_frist_l_b_tabxuan_checkb");
		var $a = $(this).index();
		if ($a==0) {
			$(".fancen").css({"color":"#ccc"});
			$("#text1").val("");
			$(this).parent().next().show();
			$(this).parent().next().next().hide();
		} 
		if ($a==1){
			$(".fancen").css({"color":"#6c6c6c"});
			$(this).parent().next().show();
			$(this).parent().next().next().hide();
		}if ($a==2) {
			$("#text1").val("");
			$(this).parent().next().hide();
			$(this).parent().next().next().show();
			
		}
	})
	
	
	$(".dan3 span").click(function(){
		$(".dan3 span").removeClass("centent_frist_l_b_tabxuan_checka");
		$(".dan3 span").removeClass("centent_frist_l_b_tabxuan_checkb");
		$(this).addClass("centent_frist_l_b_tabxuan_checka").siblings().addClass("centent_frist_l_b_tabxuan_checkb");
		var $a = $(this).index();
		if ($a==0) {
			$(".dan3_hover").hide();
		} 
		if ($a==1){
			$(".dan3_hover").show();
		}
	})
	
	$(".dan4 span").click(function(){
		$(".dan4 span").removeClass("centent_frist_l_b_tabxuan_checka");
		$(".dan4 span").removeClass("centent_frist_l_b_tabxuan_checkb");
		$(this).addClass("centent_frist_l_b_tabxuan_checka").siblings().addClass("centent_frist_l_b_tabxuan_checkb");
		var $a = $(this).index();
		if ($a==0) {
			$(".select_fri").hide();
			$("#live_city_xuan").show();
			$("#live_city_xuan1").hide();
			$("#live_city1").click(function(){
					$(this).next().show();
			});
			$("#live_city").val("");
		} 
		if ($a==1){
			$(".select_fri").show();
			$("#live_city1").click(function(){
					$(this).next().hide();
			});
			$("#live_city").val("");
			$("#live_city_xuan").hide();
			$("#live_city_xuan1").show();
		}
	})
	//
	
	
	//城市选择器
	$(document).click(function(){ 
	    $("#in_city").hide(); 
    }) 
	$("#in_city").click(function(event){
		event.stopPropagation();
	});
	$(".place").click(function(event){
		event.stopPropagation();
	});
	$(".place").click(function(){
		$("#in_city").css({"top":"145px"});
		$("#in_city").css({"left":"110px"});
		$("#in_city").show(); 
	});
	$(".destination").click(function(event){
		event.stopPropagation();
	});
	$(".destination").click(function(){
		$("#in_city").css({"top":"215px"});
		$("#in_city").css({"left":"110px"});
		$("#in_city").show(); 
	});
	//11
	$(".place1").click(function(event){
		event.stopPropagation();
	});
	$(".place1").click(function(){
		$("#in_city").css({"top":"115px"});
		$("#in_city").css({"left":"150px"});
		$("#in_city").show(); 
	});
	$(".destination1").click(function(event){
		event.stopPropagation();
	});
	$(".destination1").click(function(){
		$("#in_city").css({"top":"115px"});
		$("#in_city").css({"left":"345px"});
		$("#in_city").show(); 
	});
	//22
	//11
	$(".place2").click(function(event){
		event.stopPropagation();
	});
	$(".place2").click(function(){
		$("#in_city").css({"top":"145px"});
		$("#in_city").css({"left":"150px"});
		$("#in_city").show(); 
	});
	$(".destination2").click(function(event){
		event.stopPropagation();
	});
	$(".destination2").click(function(){
		$("#in_city").css({"top":"145px"});
		$("#in_city").css({"left":"345px"});
		$("#in_city").show(); 
	});
	//22
	//11
	$(".place3").click(function(event){
		event.stopPropagation();
	});
	$(".place3").click(function(){
		$("#in_city").css({"top":"175px"});
		$("#in_city").css({"left":"150px"});
		$("#in_city").show(); 
	});
	$(".destination3").click(function(event){
		event.stopPropagation();
	});
	$(".destination3").click(function(){
		$("#in_city").css({"top":"175px"});
		$("#in_city").css({"left":"345px"});
		$("#in_city").show(); 
	});
	//22
	
	//11
	$(".place4").click(function(event){
		event.stopPropagation();
	});
	$(".place4").click(function(){
		$("#in_city").css({"top":"145px"});
		$("#in_city").css({"left":"110px"});
		$("#in_city").show(); 
	});
	$(".destination4").click(function(event){
		event.stopPropagation();
	});
	$(".destination4").click(function(){
		$("#in_city").css({"top":"215px"});
		$("#in_city").css({"left":"110px"});
		$("#in_city").show(); 
	});
	//22
	
	//11
	$(".place5").click(function(event){
		event.stopPropagation();
	});
	$(".place5").click(function(){
		$("#in_city").css({"top":"145px"});
		$("#in_city").css({"left":"110px"});
		$("#in_city").show(); 
	});
	$(".destination5").click(function(event){
		event.stopPropagation();
	});
	$(".destination5").click(function(){
		$("#in_city").css({"top":"215px"});
		$("#in_city").css({"left":"110px"});
		$("#in_city").show(); 
	});
	//22
	
	//11
	$(".place6").click(function(event){
		event.stopPropagation();
	});
	$(".place6").click(function(){
		$("#in_city").css({"top":"103px"});
		$("#in_city").css({"left":"110px"});
		$("#in_city").show(); 
	});
	$(".destination6").click(function(event){
		event.stopPropagation();
	});
	$(".destination6").click(function(){
		$("#in_city").css({"top":"173px"});
		$("#in_city").css({"left":"110px"});
		$("#in_city").show(); 
	});
	//22
	
	//11
	$(".place7").click(function(event){
		event.stopPropagation();
	});
	$(".place7").click(function(){
		$("#in_city").css({"top":"103px"});
		$("#in_city").css({"left":"110px"});
		$("#in_city").show(); 
	});
	$(".place8").click(function(event){
		event.stopPropagation();
	});
	$(".place8").click(function(){
		$("#in_city").css({"top":"103px"});
		$("#in_city").css({"left":"110px"});
		$("#in_city").show(); 
	});
	$(".place9").click(function(event){
		event.stopPropagation();
	});
	$(".place9").click(function(){
		$("#in_city").css({"top":"103px"});
		$("#in_city").css({"left":"110px"});
		$("#in_city").show(); 
	});
	$(".place10").click(function(event){
		event.stopPropagation();
	});
	$(".place10").click(function(){
		$("#in_city").css({"top":"103px"});
		$("#in_city").css({"left":"110px"});
		$("#in_city").show(); 
	});
	$(".place11").click(function(event){
		event.stopPropagation();
	});
	$(".place11").click(function(){
		$("#in_city").css({"top":"103px"});
		$("#in_city").css({"left":"110px"});
		$("#in_city").show(); 
	});
	
	
	
	
	//22
	
	
	
	function aaa(){
		var cityA = $(".city_a_le1 a"); //城市
		
	    var pla = $("#place");  //出发地
	    var dest = $("#destination");  //到达地
	    
	    var pla1 = $("#place1");  //出发地
	    var dest1 = $("#destination1");  //到达地
	    
	    var pla2 = $("#place2");  //出发地
	    var dest2 = $("#destination2");  //到达地
	    
	    var pla3 = $("#place3");  //出发地
	    var dest3 = $("#destination3");  //到达地
	    
	    var pla4 = $("#place4");  //出发地
	    var dest4 = $("#destination4");  //到达地
	    
	    var pla5 = $("#place5");  //出发地
	    var dest5 = $("#destination5");  //到达地
	    
	    var pla6 = $("#place6");  //出发地
	    var dest6 = $("#destination6");  //到达地
	    
	    var pla7 = $("#place7");  //出发地
	    var dest7 = $("#destination7");  //到达地
	    
	    //我们不一样
	    var pla8 = $("#place8");  //出发地
	    var pla9 = $("#place9");  //出发地
	    var pla10 = $("#place10");  //出发地
	    var pla11 = $("#place11");  //出发地
	    var pla12 = $("#place12");  //出发地
	    
	    
	    
	    
	    // 默认值
	    inCity.width = "370";  //城市选择框  宽
	    inCity.height = "auto";  //城市选择框  高
	    inCity.id = "#in_city";  //城市选择框  父级ID
	    inCity.Children = '.city_a_le1';  //城市名box
	    // 初始化 城市HTML模板
	    $(inCity.id).prepend(inCity._template.join(''));
	    inCity.Hot(cityA);
	    
	    //城市 导航
	    var apay = $(".screen a");

	    var placeThis; //当前选择标签
	    apay.click(function(obj){  //城市导航
	        inCity.payment($(this));
	    })

	    inCity.place(pla); //出发地
	    inCity.destination(dest);
	    
	    inCity.place(pla1); //出发地
	    inCity.destination(dest1);
	    
	    inCity.place(pla2); //出发地
	    inCity.destination(dest2);
	    
	    inCity.place(pla3); //出发地
	    inCity.destination(dest3);
	    
	    inCity.place(pla4); //出发地
	    inCity.destination(dest4);
	    
	    inCity.place(pla5); //出发地
	    inCity.destination(dest5);
	    
	    inCity.place(pla6); //出发地
	    inCity.destination(dest6);
	    
	    inCity.place(pla7); //出发地
	    inCity.destination(dest7);
	    
	    
	    //我们不一样
	    inCity.place(pla8); //出发地
	    inCity.place(pla9); //出发地
	    inCity.place(pla10); //出发地
	    inCity.place(pla11); //出发地
	    inCity.place(pla12); //出发地
	    
	    
	    
	    inCity.cityClick(cityA); //显示赋值城市
	    $("#in_city").hide(); 
	}
	aaa();	
	//城市选择器
	
	
	
	
	
	//时间选择器
		$('.doubledate').kuiDate({
			className:'doubledate',
			isDisabled: "0"  // isDisabled为可选参数，“0”表示今日之前不可选，“1”标志今日之前可选
		});
	$(".doubledate").click(function(){
		$(".kui_d_pane").show();
	});
	$(".doubledate").click(function(event){
		event.stopPropagation();
	});
	//时间选择器
	
	
	
	//换到达地方centent_frist_l_b_huan
	$(".centent_frist_l_b_huan img").hover(function(){
		$(this).attr("src","img/fzm/cen_c.png");
	},function(){
		$(this).attr("src","img/fzm/cen_d.png");
	})
	
	$(".centent_frist_l_b_huan img").click(function(){
		var $a = $(this).parent().prev().children().eq(0).children().eq(1).val();
		var $b = $(this).parent().prev().children().eq(1).children().eq(1).val();
		$(this).parent().prev().children().eq(0).children().eq(1).val($b);
		$(this).parent().prev().children().eq(1).children().eq(1).val($a);
	})


	//换到达地方huan2
	$(".huan2 img").click(function(){
		var $a = $(this).parent().prev().children().eq(1).val();
		var $b = $(this).parent().next().children().eq(1).val();
		$(this).parent().prev().children().eq(1).val($b);
		$(this).parent().next().children().eq(1).val($a);
	})

	//再加一程
	$(".multipass_add").click(function(){
		$(this).hide();
		$(this).next().show();
	})
	$(".multipass_d").click(function(){
		$(this).parent().hide();
		$(this).parent().prev().show();
	})


	//时间范围选择替换time_rangejq
	$(".time_rangejq li").click(function(){
		var $a = $(this).text();
		$(this).parent().prev().children().eq(0).html($a);
		$(this).css("background-color","#9cd9ff").siblings().css("background-color","");
	})


	//live_city_xuan客栈选择
	$(".live_city_xuan dl dd span").click(function(){
		var $a = $(this).text();
		$(this).parent().parent().parent().parent().prev().val($a);
		$(this).parent().parent().parent().parent().hide();
	})
	$(document).click(function(){ 
	    $(".live_city").hide(); 
    }) 
	$(".live_city").click(function(event){
		event.stopPropagation();
	});
	$("#live_city").click(function(event){
		event.stopPropagation();
	});
	$("#live_city").click(function(){
		$(this).next().show();
	});
	//22222
	$("#live_city2").click(function(event){
		event.stopPropagation();
	});
	$("#live_city2").click(function(){
		$(this).next().show();
	});

	//22222
	$("#live_city4").click(function(event){
		event.stopPropagation();
	});
	$("#live_city4").click(function(){
		$(this).next().show();
	});

	//live_city1客栈选择
	$(".live_city1 span").click(function(){
		var $a = $(this).text();
		$(this).parent().parent().parent().prev().val($a);
		$(this).parent().parent().parent().hide();
	})
	
	$(document).click(function(){ 
	    $(".live_city1").hide(); 
    }) 
	$(".live_city1").click(function(event){
		event.stopPropagation();
	});
	$("#live_city1").click(function(event){
		event.stopPropagation();
	});
	$("#live_city1").click(function(){
		$(this).next().show();
	});

	//2222
	$("#live_city3").click(function(event){
		event.stopPropagation();
	});
	$("#live_city3").click(function(){
		$(this).next().show();
	});

	//2222
	$("#live_city5").click(function(event){
		event.stopPropagation();
	});
	$("#live_city5").click(function(){
		$(this).next().show();
	});
	$("#live_city6").click(function(event){
		event.stopPropagation();
	});
	$("#live_city6").click(function(){
		$(this).next().show();
	});
	$("#live_city7").click(function(event){
		event.stopPropagation();
	});
	$("#live_city7").click(function(){
		$(this).next().show();
	});
	$("#live_city8").click(function(event){
		event.stopPropagation();
	});
	$("#live_city8").click(function(){
		$(this).next().show();
	});
	$("#live_city9").click(function(event){
		event.stopPropagation();
	});
	$("#live_city9").click(function(){
		$(this).next().show();
	});
	$("#live_city10").click(function(event){
		event.stopPropagation();
	});
	$("#live_city10").click(function(){
		$(this).next().show();
	});
	$("#live_city11").click(function(event){
		event.stopPropagation();
	});
	$("#live_city11").click(function(){
		$(this).next().show();
	});
	$("#live_city12").click(function(event){
		event.stopPropagation();
	});
	$("#live_city12").click(function(){
		$(this).next().show();
	});
	$("#live_city13").click(function(event){
		event.stopPropagation();
	});
	$("#live_city13").click(function(){
		$(this).next().show();
	});
	$("#live_city14").click(function(event){
		event.stopPropagation();
	});
	$("#live_city14").click(function(){
		$(this).next().show();
	});
	$("#live_city15").click(function(event){
		event.stopPropagation();
	});
	$("#live_city15").click(function(){
		$(this).next().show();
	});
	$("#live_city16").click(function(event){
		event.stopPropagation();
	});
	$("#live_city16").click(function(){
		$(this).next().show();
	});
	$("#live_city17").click(function(event){
		event.stopPropagation();
	});
	$("#live_city17").click(function(){
		$(this).next().show();
	});
	$("#live_city18").click(function(event){
		event.stopPropagation();
	});
	$("#live_city18").click(function(){
		$(this).next().show();
	});
	$("#live_city19").click(function(event){
		event.stopPropagation();
	});
	$("#live_city19").click(function(){
		$(this).next().show();
	});
//888888888888888888888888888888888888888888888888888777777777777777u

	//地址范围选择替换dowcity_rangejq
	$(".dowcity_rangejq li").click(function(){
		var $a = $(this).text();
		$(this).parent().prev().children().eq(0).html($a);
		$(this).css("background-color","#ffc900").siblings().css("background-color","");
		$(this).parent().slideUp();
	})
	$(".a_dow").click(function(){
		$(this).next().slideDown();
	})
	$(".dowcity_rangejq1 li").click(function(){
		var $a = $(this).text();
		$(this).parent().prev().children().eq(0).html($a);
		$(this).css("background-color","#ffc900").siblings().css("background-color","");
		$(this).parent().slideUp();
	})
	$(".dowcity_rangejq2 li").click(function(){
		var $a = $(this).text();
		$(this).parent().prev().children().eq(0).html($a);
		$(this).css("background-color","#ffc900").siblings().css("background-color","");
		$(this).parent().slideUp();
	})
	$(".dowcity_rangejq3 li").click(function(){
		var $a = $(this).text();
		$(this).parent().prev().children().eq(0).html($a);
		$(this).css("background-color","#ffc900").siblings().css("background-color","");
		$(this).parent().slideUp();
	})
	$(".dowcity_rangejq4 li").click(function(){
		var $a = $(this).text();
		$(this).parent().prev().children().eq(0).html($a);
		$(this).css("background-color","#ffc900").siblings().css("background-color","");
		$(this).parent().slideUp();
	})
	//1111
	$(".tow_hd_tab ul li").click(function(){
		$(this).css("color","#3d3d3d").siblings().css("color","#666");
		var $a = $(this).index();
		$(this).parent().parent().parent().next().children().eq($a).show().siblings().hide();
		if ($a == 0) {
			//$(".tab_indicator").removeClass("tab_indicator_a");
			//$(".tab_indicator").removeClass("tab_indicator_b");
			$(this).parent().children("div").removeClass("tab_indicator_a");
			$(this).parent().children("div").removeClass("tab_indicator_b");
		} else if ($a == 1) {
			//$(".tab_indicator").removeClass("tab_indicator_b");
			//$(".tab_indicator").addClass("tab_indicator_a");
			$(this).parent().children("div").removeClass("tab_indicator_b");
			$(this).parent().children("div").addClass("tab_indicator_a");
			
		} else if ($a == 2) {
			//$(".tab_indicator").removeClass("tab_indicator_a");
			//$(".tab_indicator").addClass("tab_indicator_b");
			$(this).parent().children("div").removeClass("tab_indicator_a");
			$(this).parent().children("div").addClass("tab_indicator_b");
		}
	})

	
	//0000000
	$(".tow_bd_b span").click(function(){
		$(this).addClass("tow_bd_b_hot").siblings().removeClass("tow_bd_b_hot");
		var $a = $(this).index();
		$(this).parent().parent().parent().next().children().eq($a).show();
		if ($a == 0) {
			$(this).parent().parent().parent().next().children().eq($a).next().hide();
			$(".dowcity_rangejq li").click(function(){
				var $b = $(this).index();
				$(".tow_domestic").children().eq($b).show().siblings().hide();
			})
		} else{
			$(this).parent().parent().parent().next().children().eq($a).prev().hide();
			$(".dowcity_rangejq li").click(function(){
				var $b = $(this).index();
				$(".tow_outside").children().eq($b).show().siblings().hide();
			})
		}
	})


	$(".dowcity_rangejq li").click(function(){
				var $b = $(this).index();
				$(".tow_domestic").children().eq($b).show().siblings().hide();
			})
	$(".dowcity_rangejq1 li").click(function(){
				var $b = $(this).index();
				$(".san_domestic").children().eq($b).show().siblings().hide();
			})
	
	$(".dowcity_rangejq2 li").click(function(){
				var $b = $(this).index();
				$(".si_domestic").children().eq($b).show().siblings().hide();
			})
	$(".dowcity_rangejq3 li").click(function(){
				var $b = $(this).index();
				$(".wu_domestic").children().eq($b).show().siblings().hide();
			})
	
	
	//车票tow_bd_c
	$(".tow_bd_c span").click(function(){
		$(this).addClass("tow_bd_b_hot").siblings().removeClass("tow_bd_b_hot");
		var $a = $(this).text();
		$(".tow_carpiao_city font").text($a);
	})

	$(".tow_bd_c1 span").click(function(){
		$(this).addClass("tow_bd_b_hot").siblings().removeClass("tow_bd_b_hot");
		var $a = $(this).text();
		$(".tow_carpiao_city1 font").text($a);
	})

//3333333333333333333333333333333333333333333333333333333333333333333333

	$(".san_search").click(function(){
		$(this).hide();
		$(this).next().show();
	})

//66666666666666666666666666666666666666666666666666666666
	$(".liu_hd_destionations a").click(function(){
		$(this).addClass("tow_bd_b_hot").siblings().removeClass("tow_bd_b_hot");
		var $a = $(this).index();
		if ($a==0) {
			$(this).parent().parent().next().show();
			$(this).parent().parent().next().next().hide();
		} else{
			$(this).parent().parent().next().hide();
			$(this).parent().parent().next().next().show();
		}
	})

//8888888888888888888888888888888888888888888
	$(".ba_l_prev").click(function(){
		var $a = parseInt($('.ba_l_lun ul').css("marginLeft"));
		//alert($a);
		//$(".ba_l_lun ul").animate({marginLeft:""},1000);
		if ($a == -1302) {
			$(".ba_l_lun ul").animate({marginLeft:"-651px"},2000);
		} else if ($a == -651) {
			$(".ba_l_lun ul").animate({marginLeft:"0px"},2000);
		}
	})
	$(".ba_l_next").click(function(){
		var $a = parseInt($('.ba_l_lun ul').css("marginLeft"));
		//alert($a);
		if ($a == 0) {
			$(".ba_l_lun ul").animate({marginLeft:"-651px"},2000);
		} else if ($a == -651) {
			$(".ba_l_lun ul").animate({marginLeft:"-1302px"},2000);
		}
	})
	
	$(".ba_hd_tab ul li").click(function(){
		$(this).css("color","#3d3d3d").siblings().css("color","#666");
		var $a = $(this).index();
		$(this).parent().parent().parent().next().children().eq($a).show().siblings().hide();
		if ($a == 0) {
//			$(this).parent().children("div").removeClass("tab_indicator_a");
//			$(this).parent().children("div").removeClass("tab_indicator_b");
			$(this).parent().children("div").animate({left:"0px",width:"68px"},100);
		} else if ($a == 1) {
//			$(this).parent().children("div").removeClass("tab_indicator_b");
//			$(this).parent().children("div").addClass("tab_indicator_a");
			$(this).parent().children("div").animate({left:"82px",width:"113px"},100);
		}
	})


	//车票选择出发地
	$(".ba_dow_jq1 li").click(function(){
		var $e = $(this).text();
		$(".ba_carpiao_city").children("font").text($e);
	})

	$(".ba_dow_jq li").click(function(){
		var $a = $(this).index();
		var $b = $(this).parent().parent().prev().children().eq(0).children("span").text();
		if ($a==0) {
			var $c = $(".ba_carpiao_city").children().eq(0).text();
				if ($c == $b) {
					
				}else{
					var $c = $(".ba_carpiao_city").children().eq(0).text();
					var $d = $(".ba_carpiao_city").children().eq(2).text();
					$(".ba_carpiao_city").children("font").text($d);
					$(".ba_carpiao_city").children("span:last-child").text($c);
				}
			$(".ba_dow_jq1 li").unbind();
			$(".ba_dow_jq1 li").click(function(){
				var $ee = $(this).text();
				$(".ba_carpiao_city").children("font").text($ee);
				var $aaa = $(this).text();
				$(this).parent().prev().children().eq(0).html($aaa);
				$(this).css("background-color","#ffc900").siblings().css("background-color","");
				$(this).parent().slideUp();
			})
			
		} else{
			var $c = $(".ba_carpiao_city").children().eq(0).text();
			var $d = $(".ba_carpiao_city").children().eq(2).text();
			$(".ba_carpiao_city").children("font").text($d);
			$(".ba_carpiao_city").children("span:last-child").text($c);
			$(".ba_dow_jq1 li").unbind();
			$(".ba_dow_jq1 li").click(function(){
				var $e = $(this).text();
				$(".ba_carpiao_city").children("span:last-child").text($e);
				var $aa = $(this).text();
				$(this).parent().prev().children().eq(0).html($aa);
				$(this).css("background-color","#ffc900").siblings().css("background-color","");
				$(this).parent().slideUp();
			})
		}
	})
	
	
	//0000000000000000000
	//车票选择出发地
	$(".ba_dow_jq3 li").click(function(){
		var $e = $(this).text();
		$(".ba_carpiao_city1").children("font").text($e);
	})

	$(".ba_dow_jq2 li").click(function(){
		var $a = $(this).index();
		var $b = $(this).parent().parent().prev().children().eq(0).children("span").text();
		if ($a==0) {
			var $c = $(".ba_carpiao_city1").children().eq(0).text();
				if ($c == $b) {
					
				}else{
					var $c = $(".ba_carpiao_city1").children().eq(0).text();
					var $d = $(".ba_carpiao_city1").children().eq(2).text();
					$(".ba_carpiao_city1").children("font").text($d);
					$(".ba_carpiao_city1").children("span:last-child").text($c);
				}
			$(".ba_dow_jq3 li").unbind();
			$(".ba_dow_jq3 li").click(function(){
				var $ee = $(this).text();
				$(".ba_carpiao_city1").children("font").text($ee);
				var $aaa = $(this).text();
				$(this).parent().prev().children().eq(0).html($aaa);
				$(this).css("background-color","#ffc900").siblings().css("background-color","");
				$(this).parent().slideUp();
			})
			
		} else{
			var $c = $(".ba_carpiao_city1").children().eq(0).text();
			var $d = $(".ba_carpiao_city1").children().eq(2).text();
			$(".ba_carpiao_city1").children("font").text($d);
			$(".ba_carpiao_city1").children("span:last-child").text($c);
			$(".ba_dow_jq3 li").unbind();
			$(".ba_dow_jq3 li").click(function(){
				var $e = $(this).text();
				$(".ba_carpiao_city1").children("span:last-child").text($e);
				var $aa = $(this).text();
				$(this).parent().prev().children().eq(0).html($aa);
				$(this).css("background-color","#ffc900").siblings().css("background-color","");
				$(this).parent().slideUp();
			})
		}
	})




	//底部广告弹出
	$(".ad_pig").click(function(){
		$(this).prev().show();
		$(this).stop().animate({left:"-100%"},500).prev().animate({left:"0"},500);
	})
	$(".ad_cen_c6").click(function(){
		$(this).parent().parent().parent().stop().animate({left:"-100%"},500);
		$(".ad_pig").animate({left:"0"},700);
//		$(this).parent().parent().parent().hide(500);
		$(this).parent().parent().parent()
	})

//	window.onload = confirmExit();
//	
//	function confirmExit() {
//	   $(".ad_pig").prev().show();
//		$(".ad_pig").stop().animate({left:"-100%"},500).prev().animate({left:"0"},500);
//	}




//0000000000000000000
$(document).click(function(){ 
	var $a = $("#text").val();
	if ($a !== "") {
		$(".centent_frist_l_b_tabxuan_aaa").children().eq(1).removeClass("centent_frist_l_b_tabxuan_checkb");
		$(".centent_frist_l_b_tabxuan_aaa").children().eq(1).addClass("centent_frist_l_b_tabxuan_checka");
		$(".centent_frist_l_b_tabxuan_aaa").children().eq(0).removeClass("centent_frist_l_b_tabxuan_checka");
		$(".centent_frist_l_b_tabxuan_aaa").children().eq(0).addClass("centent_frist_l_b_tabxuan_checkb");
	} 
	
	var $a = $("#text1").val();
	if ($a !== "") {
		$(".dan2").children().eq(1).removeClass("centent_frist_l_b_tabxuan_checkb");
		$(".dan2").children().eq(1).addClass("centent_frist_l_b_tabxuan_checka");
		$(".dan2").children().eq(0).removeClass("centent_frist_l_b_tabxuan_checka");
		$(".dan2").children().eq(0).addClass("centent_frist_l_b_tabxuan_checkb");
	} 
    }) 






})



