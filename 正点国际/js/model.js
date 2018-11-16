//工具栏的脚本-----------------------------------------------------------------------------------
function mouse_out_wx(){
	var elem = document.querySelector(".ewn");
	elem.style.display = "none";
}
function mouse_over_wx(){
	var elem = document.querySelector(".ewn");
	elem.style.display = "inherit";
}
function mouse_out_ph(){
	var elem =document.querySelector(".PH_tel");
	elem.style.display = "none";
}
function mouse_over_ph(){
	var elem =document.querySelector(".PH_tel");
	elem.style.display = "inherit";
}


var value = 220;
function _sroll(){
	var t = document.documentElement.scrollTop || document.body.scrollTop;//获取距离顶部的滚动距离
	if(t>200){
		move_show();
	}else if(t<100){
		move_hidden();
	}
	
}
function move_show(){
		var elem = document.querySelector(".tool_border");
		if(parseInt(elem.style.height)==300) return false;//获取高度，并只取其中的数值，判断是否全部显示，是跳出
		var xp_H = value+2+'px';
		value=value+2;//对全局变量进行修改
		elem.style.height = xp_H;
		if(value<300){
			setTimeout(move_show,100);
		}else{
			value = 220;//重置value，防止重复执行
		}
}
function move_hidden(){
		var elem = document.querySelector(".tool_border");
		if(parseInt(elem.style.height)==220) return false;
		var xp_H = value-2+'px';
		value=value-2;
		elem.style.height = xp_H;
		if(value>220){
			setTimeout(move_hidden,100);
		}else{
			value = 300;
		}
}