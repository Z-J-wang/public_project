//把事件添加给 window.onload的函数   (注：winfdow.onload是在网页每次加载完毕就会触发)
function addLoadEvent(func){							
	var oldonload = window.onload;
	if(typeof window.onload != 'function'){
		window.onload = func;
	}
	else {
		window.onload = function(){
			oldonload();
			func();
		}
	}
}

//addLoadEvent(change_1);
//切换到账号登陆
function login_change_1(){
	var elem_1 = document.getElementById("phone_num_login");
	var elem_2 = document.getElementById("account_num_login");
	elem_1.style.display="none";
	elem_2.style.display = "inherit";
}
//切换的手机号登陆
function login_change_2(){
	var elem_1 = document.getElementById("phone_num_login");
	var elem_2 = document.getElementById("account_num_login");
	elem_2.style.display="none";
	elem_1.style.display = "inherit";
	
}
//男换到女
function change_1(){
	var elem_1 = document.getElementById("boy");
	var elem_2 = document.getElementById("girl");
	elem_1.style.display="none";
	elem_2.style.display = "inherit";
}
//女换到男
function change_2(){
	var elem_1 = document.getElementById("boy");
	var elem_2 = document.getElementById("girl");
	elem_2.style.display="none";
	elem_1.style.display = "inherit";
}
function open_forget_password(){
	mui.openWindow({
    				url:'forget_password.html',
    				id:'forget_password'
    			})
}
function open_login(){
	mui.openWindow({
    				url:'login.html',
    				id:'forget_password'
    			})
}
function open_main(){
	mui.openWindow({
    				url:'main.html',
    				id:'mian'
    			})
}
function open_discover(){
	mui.openWindow({
    				url:'discover.html',
    				id:'mian'
    			})
}
//read界面单击换样式
function read_bar_hidden(){
	var elem_1=document.getElementById("header_bar");
	var elem_2 = document.getElementById("read_footer_bar");
	if(elem_2.style.display == 'inherit')
	{
		elem_2.style.display = "none";
		elem_1.style.display = "none";
	}
	else{
		elem_2.style.display = "inherit";
		elem_1.style.display = "inherit";
		
	}		
}

function help_style_change_2(){
	var elem_1 = document.getElementById("right_2");
	var elem_2 =document.getElementById("right_1");
	var elem_3 =document.getElementById("right_3");
	var elem_4 =document.getElementById("right_4");
	elem_2.style.display ="none";
	elem_1.style.display = "inherit";
	elem_3.style.display ="none";
	elem_4.style.display ="none";
	var style_1 = document.getElementById("style_1");
	var style_2 = document.getElementById("style_2");
	var style_3 = document.getElementById("style_3");
	var style_4 = document.getElementById("style_4");
	style_1.style.color ="darkgrey";
	style_2.style.color ="#000000";
	style_3.style.color ="darkgrey";
	style_4.style.color ="darkgrey";
}
function help_style_change_1(){
	var elem_1 = document.getElementById("right_2");
	var elem_2 =document.getElementById("right_1");
	var elem_3 =document.getElementById("right_3");
	var elem_4 =document.getElementById("right_4");
	elem_1.style.display ="none";
	elem_2.style.display = "inherit";
	elem_3.style.display ="none";
	elem_4.style.display ="none";
	var style_2 = document.getElementById("style_1");
	var style_1 = document.getElementById("style_2");
	var style_3 = document.getElementById("style_3");
	var style_4 = document.getElementById("style_4");
	style_1.style.color ="darkgrey";
	style_2.style.color ="#000000";
	style_3.style.color ="darkgrey";
	style_4.style.color ="darkgrey";
}
function help_style_change_3(){
	var elem_1 = document.getElementById("right_2");
	var elem_2 =document.getElementById("right_1");
	var elem_3 =document.getElementById("right_3");
	var elem_4 =document.getElementById("right_4");
	elem_1.style.display ="none";
	elem_3.style.display = "inherit";
	elem_2.style.display ="none";
	elem_4.style.display ="none";
	var style_1 = document.getElementById("style_1");
	var style_2 = document.getElementById("style_2");
	var style_3 = document.getElementById("style_3");
	var style_4 = document.getElementById("style_4");
	style_1.style.color ="darkgrey";
	style_3.style.color ="#000000";
	style_2.style.color ="darkgrey";
	style_4.style.color ="darkgrey";
}
function help_style_change_4(){
	var elem_1 = document.getElementById("right_2");
	var elem_2 =document.getElementById("right_1");
	var elem_3 =document.getElementById("right_3");
	var elem_4 =document.getElementById("right_4");
	elem_1.style.display ="none";
	elem_4.style.display = "inherit";
	elem_3.style.display ="none";
	elem_2.style.display ="none";
	var style_1 = document.getElementById("style_1");
	var style_2 = document.getElementById("style_2");
	var style_3 = document.getElementById("style_3");
	var style_4 = document.getElementById("style_4");
	style_1.style.color ="darkgrey";
	style_4.style.color ="#000000";
	style_3.style.color ="darkgrey";
	style_2.style.color ="darkgrey";
}
