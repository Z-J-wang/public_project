//$(function () { $("[data-toggle='popover']").popover(); });
//$(function () { $(".popover-options").popover({html : true });});
$(document).ready(function() {

	$(".a_p>a,.prime_info").hover(function() {
		$(".prime_info").show();
	}, function() {
		$(".prime_info").hide();
	})

	//	搜索框类别选择
	$(".dropdown-menu a").click(function() {
		var $text = $(this).text();
		$(".change_text").text($text);
	})

	//	$(".A_branch,dropdown_menu_2").hover(function(){
	//		$(".dropdown_menu_2").show();
	//	},function(){
	//		$(".dropdown_menu_2").hide()
	//	})
	
	$(".dropdown_menu_2>ul li,.dropdown_meun_list,.dropdown_meun_list_img").hover(function(){
		$(".dropdown_meun_list_img").show();
		$(".dropdown_meun_list").show();
	},function(){
		$(".dropdown_meun_list_img").hide();
		$(".dropdown_meun_list").hide();
	})
	
	$(".shop_car").click(function(){
		window.location.href = "shoppingCar.html";
	})
	
	$("#create_account").click(function(){
		window.location.href = "reg.html";
	})
	
	$(".user_bar,.user_interface").hover(function() {
		$(".user_interface").show();
		$(".bg_color").show();
	}, function() {
		$(".user_interface").hide();
		$(".bg_color").hide();
	})

	$(".try_prime,.prime_way").hover(function() {
		$(".prime_way").show();
		$(".bg_color").show();
	}, function() {
		$(".prime_way").hide();
		$(".bg_color").hide();
	})

	$(".lan_bar,.change_lan").hover(function() {
		$(".change_lan").show();
		$(".bg_color").show();
	}, function() {
		$(".change_lan").hide();
		$(".bg_color").hide();
	})
	
	$(".change_lan>div").click(function(){
		var $divs = $(".change_lan>div");
		for (var i = 0; i<$divs.length;i++) {
			$divs.eq(i).find("img").attr("src","img/lan_1.png");
		}
		$(this).find("img").attr("src","img/lan_2.png");
	})
	
	$(".foo_lan").hover(function(){
		$(this).find(".change_lan").slideDown();
	},function(){
		$(this).find(".change_lan").slideUp();
	})
	
	$(".now_price").click(function() {
		$(this).css("border", "solid 1px dodgerblue");
	}).blur(function() {
		$(this).css("border", "solid 1px transparent");
	})

	//倒计时
	downTimeFun();

	//长条轮播
	$("#left").click(function() {
		carousel_srcoll_left(".carousel_long_content", 1480, 2, 1000);
	})
	$("#right").click(function() {
		carousel_scroll_right(".carousel_long_content", 1480, 2, 1000);
	})

	$("#left_2").click(function() {
		carousel_srcoll_left(".carousel_long_content_2", 1480, 2, 1000);
	})
	$("#right_2").click(function() {
		carousel_scroll_right(".carousel_long_content_2", 1480, 2, 1000);
	})
	
	$(".Game_Book button").click(function(){
		var $src = $(this).prev().attr("src");
		$(".pop_up_img img").attr("src",$src);
		$(".bg_color").show();
		$(".pop_up").show();
	})
	
	$(".close_pos").click(function(){
		$(".bg_color").hide();
		$(".pop_up").hide();
	})
	
	
	//返回顶部
	$("#return_top").click(function() {
		$('body,html').animate({
			scrollTop: 0
		}, 500);
	})
	
	$("#change_pass").click(function(){
		window.location.href = "Login_pass.html";
	})
	
	$("#login").click(function(){
		window.location.href = "index.html";
	})
	
	//	登录
	//按钮点击变色
	$(".login_input>button,.btn_style").click(function() {
		$(this).addClass("change_btn");
	})
	$(".btn_create_new_acount").click(function() {
		$(this).addClass("change_btn");
	})

	//	搜索记录框
	$(".login_input input").focus(function() {
		$(this).parent().find(".tip_user").slideDown();
	}).blur(function() {
		$(this).parent().find(".tip_user").slideUp();
	})

	//下三角旋轉
	var tro_status = 0;
	$(".help_login").click(function() {
		if(tro_status == 0) {
			$(this).find(".tro").css({
				"transform": "rotate(0deg)",
				"transition": "transform .5s"
			});
			$(this).find("div").slideDown();
			tro_status = 1;
		} else if(tro_status == 1) {
			$(this).find(".tro").css({
				"transform": "rotate(-90deg)",
				"transition": "transform .5s"
			});
			$(this).find("div").slideUp();
			tro_status = 0;
		}
	})
	
//	注册界面
	$(".tip_user li").click(function(){
		var $login_H_account = $("#login_H_account").text();
		var $login_H_pwd = "12356822";
		$(this).parent().parent().find("input").val($login_H_account);
	})
	
	//------------------------------------------购物车
	//选择购物的数量
	
	function SC_total_price(){
		var $num = $(this).text();
		var $product_price = $(".shop_car_list .product_price");
		var $all_price = $(".all_price");
		var $elem = $(this).parent().prev().find(".pro_count");
		var $tatol = 0;
		var $product_prices = $(".shop_car_list .product_price");
		$elem.text($num);
		for(var i = 0; i < $product_prices.length; i++) {
			var $nums = $product_prices.eq(i).parent().next().find(".pro_count").text();
			var $price = $product_prices.eq(i).text().substring(1);
			$tatol += $price * $nums;
		}
		$all_price.text("$" + $tatol.toFixed(2));
	}

	SC_total_price();
	
	$(".choose_num>li").click(function() {
		var $num = $(this).text();
		var $product_price = $(".shop_car_list .product_price");
		var $all_price = $(".all_price");
		var $elem = $(this).parent().prev().find(".pro_count");
		var $tatol = 0;
		var $product_prices = $(".shop_car_list .product_price");
		$elem.text($num);
		for(var i = 0; i < $product_prices.length; i++) {
			var $nums = $product_prices.eq(i).parent().next().find(".pro_count").text();
			var $price = $product_prices.eq(i).text().substring(1);
			$tatol += $price * $nums;
		}
		$all_price.text("$" + $tatol.toFixed(2));

//		SC_total_price();
	})
	
	$(".BH_user_evaluation").hover(function(){
		$(".eval_detail").show();
		$(".progress-bar").each(function(){
			var $num = parseInt($(this).children("span").text());
			$(this).animate({"width":$num+"%"},10)
		})
	},function(){
		$(".eval_detail").hide();
		$(".progress-bar").each(function(){
			var $num = parseInt($(this).children("span").text());
			$(this).animate({"width":"0%"},10)
		})
	})
	
	
	
	//删除商品
	$(".del_product").click(function() {
		$(this).parent().parent().parent().parent().remove();
		SC_total_price();
	})

	//	 --------------------------------------------------------------------------详情页
	//	点击换图片
	$(".img_list li").click(function() {
		var $src = $(this).find("img").attr("src");
		$(".pro_big_img").attr("src", $src);
		$(".pro_big_img").attr("jqimg", $src);
	})

	$(".input_style input").focus(function() {
		$(this).parent().css({
			"border": "1px solid orange",
			"box-shadow": "0px 0px 10px 1px orange"
		});
	}).blur(function() {
		$(this).parent().css({
			"border": "none",
			"box-shadow": "none"
		});
	})

	$(".more_ans a").click(function() {
		$(".more_ans>div").slideDown();
	})
	
	$(".more_ans input[type='button']").click(function() {
		$(".more_ans>div").slideUp();
	})
	var $in_status = 0;
	$(".fre_buy_list input").click(function(){
		var $imgs  = $(".pro_show>div");
		var $checks = $(".fre_buy_list input");
		var $a = $(".fre_buy_list a");
		var $all_price = $(".fre_buy .all_price");
		var $product_prices = $(".fre_buy_list .product_price");
		var $tatol = 0;
		for( var i = 0; i < $checks.length; i++){
			var $s = $checks.eq(i).is(':checked');
			if($s == false){
				$imgs.eq(i).hide();
				console.log($(this).next().text())
				$a.eq(i).css("color","gainsboro");
			}else if($s == true){
				$imgs.eq(i).show();
				$a.eq(i).css("color","#337ab7");
				var $price = $product_prices.eq(i).text().substring(1);
		 		$tatol += $price*1;
			}
			$all_price.text("$"+$tatol.toFixed(2));
		}
			
//			alert($tatol)
			
		})

})