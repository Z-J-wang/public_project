$(document).ready(function(){
	
//	切换登录状态
	$("#choose_loginType label").click(function(){
		var $label = $("#choose_loginType label");
		for (var i=0;i< $label.length;i++){
			$label.eq(i).removeClass("logintype_active");
		}
		$(this).addClass("logintype_active");
	})
	
	$("#accountType").click(function(){
		$("#login_tip").html("");
		$("#account_login").removeClass("div_hidden");
		$("#phone_login").addClass("div_hidden");
	})
	
	$("#phoneType").click(function(){
		$("#login_tip").html("");
		$("#account_login").addClass("div_hidden");
		$("#phone_login").removeClass("div_hidden");
	})
	
	
	//切换注册状态
	$("#change_phone_reg").click(function(){
		$("#chang_email_reg").removeClass("div_hidden");
		$("#change_phone_reg").addClass("div_hidden");
		$("#email_reg").removeClass("div_hidden");
		$("#phone_reg").addClass("div_hidden");
	})
	
	$("#chang_email_reg").click(function(){
		$("#chang_email_reg").addClass("div_hidden");
		$("#change_phone_reg").removeClass("div_hidden");
		$("#phone_reg").removeClass("div_hidden");
		$("#email_reg").addClass("div_hidden");
	})
	
	
//	地区选择
	$(".area_nav li").click(function(){
		var $lis = $(".area_nav li");
		var $divs = $(".area_list>ul");
		var $index = $(this).index();
		$("#choose_area input").focus();
		for (var i=0;i<$lis.length;i++){
			$lis.eq(i).removeClass("area_nav_active");
			$divs.eq(i).addClass("div_hidden");
		}
		$(this).addClass("area_nav_active");
		$divs.eq($index).removeClass("div_hidden");
	})
	
	$(".area_list li").click(function(){
		var $temp = $(this).text();
		$("#choose_area input").val($temp);
		$(".area").hide(); 
	})
	
	$("#choose_area input").focus(function(){
		$(".area").show();
	})
	
	$(document).click(function(){ 
	    	$(".area").hide(); 
   		 }) 
	$("#choose_area").click(function(event){
		event.stopPropagation();
	});
	
	
	
	
//	注册界面的输入判断
//手机号码的判断
	$("input[name='tel']").blur(function(){
		$val = $(this).val();
		$(this).parent().next().remove();
		if ($val == "") {
			$text = '<span class="tip"><img src="img/jie/error_v2.png"/> 手机号码不能为空</span>';
			$(this).parent().parent().append($text);
		}else if($val.length < 11){
			$text = '<span class="tip"><img src="img/jie/error_v2.png"/> 请输入正确的手机号码格式</span>';
			$(this).parent().parent().append($text);
		}else {
			$text = '<span class="tip"><img src="img/jie/icon_accept_v2.gif"/></span>';
			$(this).parent().parent().append($text);
		}
	})
	//邮箱格式判断
	$("input[name='email']").blur(function(){
		$val = $(this).val();
		$(this).parent().next().remove();
		var $pattern = /^[a-zA-Z0-9][\w\.-]*[a-zA-Z0-9]@[a-zA-Z0-9][\w\.-]*[a-zA-Z0-9]\.[a-zA-Z][a-zA-Z\.]*[a-zA-Z]$/;
		if ($val == "") {
			$text = '<span class="tip"><img src="img/jie/error_v2.png"/> 邮箱不能为空</span>';
			$(this).parent().parent().append($text);
		}else if($pattern.test($val) == false){
			$text = '<span class="tip"><img src="img/jie/error_v2.png"/> 请输入正确的邮箱地址</span>';
			$(this).parent().parent().append($text);
		}else {
			$text = '<span class="tip"><img src="img/jie/icon_accept_v2.gif"/></span>';
			$(this).parent().parent().append($text);
		}
	})
//密码框的判断
	$("input[name='pwd']").focus(function(){
		$(this).parent().next().remove();
		$text = '<span class="tip"><img src="img/jie/error_v2.png"/> 密码由数字和英文字母组成，3-15位</span>';
		$(this).parent().parent().append($text);
	})
	
	$("input[name='pwd']").blur(function(){
		$val = $(this).val();
		$(this).parent().next().remove();
		var $pattern = /^[a-zA-Z0-9]+$/;
		if ($val == "") {
			$text = '<span class="tip"><img src="img/jie/error_v2.png"/> 密码不能为空</span>';
			$(this).parent().parent().append($text);
		}else if($val.length < 3||$val.length>15){
			$text = '<span class="tip"><img src="img/jie/error_v2.png"/> 密码不能少于3位，多于15</span>';
			$(this).parent().parent().append($text);
		}else if($pattern.test($val) == false){
			$text = '<span class="tip"><img src="img/jie/error_v2.png"/> 密码格式不正确</span>';
			$(this).parent().parent().append($text);
		}else {
			$text = '<span class="tip"><img src="img/jie/icon_accept_v2.gif"/></span>';
			$(this).parent().parent().append($text);
		}
	})
	//验证码
	$("input[name='yzm']").blur(function(){
		$val = $(this).val();
		$(this).parent().next().remove();
		if ($val == "") {
			$text = '<span class="tip"><img src="img/jie/error_v2.png"/> 验证码不能为空</span>';
			$(this).parent().parent().append($text);
		}else {
			$text = '<span class="tip"><img src="img/jie/icon_accept_v2.gif"/></span>';
			$(this).parent().parent().append($text);
		}
	})
	//激活码
	$("input[name='jhm']").blur(function(){
		$val = $(this).val();
		$(this).parent().next().remove();
		if ($val == "") {
			$text = '<span class="tip"><img src="img/jie/error_v2.png"/> 激活码不能为空</span>';
			$(this).parent().parent().append($text);
		}else {
			$text = '<span class="tip"><img src="img/jie/icon_accept_v2.gif"/></span>';
			$(this).parent().parent().append($text);
		}
	})
	
	//登录界面的错误提示
	$("#login_submit").click(function(){
		
		
		if($("#accountType input").is(':checked') == true){
			$("#login_tip").html("");
			if($("input[name='username_a']").val()==""){
				$text = '<p>账户错误</p>';
				$("#login_tip").append($text)
			}
			if($("input[name='user_pwd_a']").val()==""){
				$text = '<p>密码错误</p>';
				$("#login_tip").append($text)
			}
			if($("input[name='yzm_a']").val()==""){
				$text = '<p>验证码错误</p>';
				$("#login_tip").append($text)
			}
		}else if($("#phoneType input").is(':checked') == true){
			$("#login_tip").html("");
			if($("input[name='username_a']").val()==""){
				$text = '<p>手机号码错误</p>';
				$("#login_tip").append($text)
			}
			if($("input[name='yzm_a']").val()==""){
				$text = '<p>验证码错误</p>';
				$("#login_tip").append($text)
			}
		}
		
		
	})
	
//	用户管理界面
//	一级选项卡
	$(".User_nav li").click(function(){
		var $lis = $(".User_nav li");
		var $divs = $(".User_main>div"); 
		var $index = $(this).index();
		for (var i=0;i<$lis.length;i++){
			$lis.eq(i).removeClass("active");
			$divs.eq(i).addClass("div_hidden");
		}
		$(this).addClass("active");
		$divs.eq($index).removeClass("div_hidden");
	})
//	我的账户,二级选项卡
	$(".myAccount_nav li").click(function(){
		var $lis = $(".myAccount_nav li");
		var $divs = $(".myAccount_main>div");
		var $index = $(this).index();
		for (var i=0;i<$lis.length;i++){
			$lis.eq(i).removeClass("active");
			$divs.eq(i).addClass("div_hidden");
		}
		$(this).addClass("active");
		$divs.eq($index).removeClass("div_hidden");
	})
//	我的订单/二级选项卡
	$(".myIndent_nav li").click(function(){
		var $lis = $(".myIndent_nav li");
		for (var i=0;i<$lis.length;i++){
			$lis.eq(i).removeClass("MY_nav_active");
		}
		$(this).addClass("MY_nav_active");
	})
	
	$(".QB_indent li").click(function(){
		var $lis = $(".QB_indent li");
		for (var i=0;i<$lis.length;i++){
			$lis.eq(i).removeClass("I_active");
		}
		$(this).addClass("I_active");
	})
	
//	帮助
	$(".User_help_nav li").click(function(){
		var $lis = $(".User_help_nav li");
		var $divs = $(".User_help_content>div");
		var $index = $(this).index();
		for (var i=0;i<$lis.length;i++){
			$lis.eq(i).removeClass("active");
			$divs.eq(i).addClass("div_hidden");
		}
		$(this).addClass("active");
		$divs.eq($index).removeClass("div_hidden");
	})
})