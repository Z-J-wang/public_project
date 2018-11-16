var startindex = 0;
var sid;
window.onload =function(){
fnslide();
}
function fnslide(index){
//单击，要清空定时器;
clearTimeout(sid);
if(index){
	startindex =parseInt(index) ;
	}
var imgdivs = document.querySelectorAll('.slide .slide-img div')
var circledivs = document.querySelectorAll(".slide .slide-num div");
//让一张图片显示，其它图片隐藏
for(var i=0;i<imgdivs.length;i++){
imgdivs[i].className='slide-img-hidden';
circledivs[i].className='out';
if(i==startindex){
	imgdivs[i].className='slide-img-display';
	circledivs[i].className='hot';
	}
	}
	startindex++;
if(startindex==3){startindex=0;}
	sid =setTimeout(fnslide,3000);
}



function tabshow(obj,index){
	//清空所有li class的样式;
	var lis = document.querySelectorAll('.ee li');
	var divs = document.querySelectorAll('.tab-content article');
	for(var i=0;i<lis.length;i++){
		lis[i].className='';
		divs[i].className='tab-content-display';
		if(index==i){
			//给当前li添加class='hot';
			obj.className ='hot';
			divs[i].className='';
		}
	}
}



function tabshow2(obj,index){
	//清空所有li class的样式;
	var lis = document.querySelectorAll('.e2 li');
	var divs = document.querySelectorAll('.e3 section');
	for(var i=0;i<lis.length;i++){
		lis[i].className='';
		divs[i].className='tab-content-display';
		if(index==i){
			//给当前li添加class='hot';
			obj.className ='hot2';
			divs[i].className='';
		}
	}
}


function tabshow3(obj,index){
	//清空所有li class的样式;
	var lis = document.querySelectorAll('.f2 li');
	var divs = document.querySelectorAll('.f3 section');
	for(var i=0;i<lis.length;i++){
		lis[i].className='';
		divs[i].className='tab-content-display';
		if(index==i){
			//给当前li添加class='hot';
			obj.className ='hot3';
			divs[i].className='';
		}
	}
}


function tabshow4(obj,index){
	//清空所有li class的样式;
	var lis = document.querySelectorAll('.g2 li');
	var divs = document.querySelectorAll('.g3 section');
	for(var i=0;i<lis.length;i++){
		lis[i].className='';
		divs[i].className='tab-content-display';
		if(index==i){
			//给当前li添加class='hot';
			obj.className ='hot4';
			divs[i].className='';
		}
	}
}


function tabshow5(obj,index){
	//清空所有li class的样式;
	var lis = document.querySelectorAll('.h2 li');
	var divs = document.querySelectorAll('.h3 section');
	for(var i=0;i<lis.length;i++){
		lis[i].className='';
		divs[i].className='tab-content-display';
		if(index==i){
			//给当前li添加class='hot';
			obj.className ='hot5';
			divs[i].className='';
		}
	}
}


function tabshow6(obj,index){
	//清空所有li class的样式;
	var lis = document.querySelectorAll('.i2 li');
	var divs = document.querySelectorAll('.i3 section');
	for(var i=0;i<lis.length;i++){
		lis[i].className='';
		divs[i].className='tab-content-display';
		if(index==i){
			//给当前li添加class='hot';
			obj.className ='hot6';
			divs[i].className='';
		}
	}
}

function tabshow7(obj,index){
	//清空所有li class的样式;
	var lis = document.querySelectorAll('.j2 li');
	var divs = document.querySelectorAll('.j3 section');
	for(var i=0;i<lis.length;i++){
		lis[i].className='';
		divs[i].className='tab-content-display';
		if(index==i){
			//给当前li添加class='hot';
			obj.className ='hot7';
			divs[i].className='';
		}
	}
}



//第二板块

function tabshow8(obj,index){
	//清空所有li class的样式;
	var lis = document.querySelectorAll('.l2 li');
	var divs = document.querySelectorAll('.l3 section');
	for(var i=0;i<lis.length;i++){
		lis[i].className='';
		divs[i].className='tab-content-display';
		if(index==i){
			//给当前li添加class='hot';
			obj.className ='hot8';
			divs[i].className='';
		}
	}
}


//第三板块
function tabshow9(obj,index){
	//清空所有li class的样式;
	var lis = document.querySelectorAll('.n2 li');
	var divs = document.querySelectorAll('.n3 section');
	for(var i=0;i<lis.length;i++){
		lis[i].className='';
		divs[i].className='tab-content-display';
		if(index==i){
			//给当前li添加class='hot9';
			obj.className ='hot9';
			divs[i].className='';
		}
	}
}

//第四板块
function tabshow10(obj,index){
	//清空所有li class的样式;
	var lis = document.querySelectorAll('.o2 li');
	var divs = document.querySelectorAll('.o3 section');
	for(var i=0;i<lis.length;i++){
		lis[i].className='';
		divs[i].className='tab-content-display';
		if(index==i){
			//给当前li添加class='hot10';
			obj.className ='hot10';
			divs[i].className='';
		}
	}
}



//第五板块
function tabshow11(obj,index){
	//清空所有li class的样式;
	var lis = document.querySelectorAll('.p2 li');
	var divs = document.querySelectorAll('.p3 section');
	for(var i=0;i<lis.length;i++){
		lis[i].className='';
		divs[i].className='tab-content-display';
		if(index==i){
			//给当前li添加class='hot10';
			obj.className ='hot11';
			divs[i].className='';
		}
	}
}


//第六板块

function tabshow12(obj,index){
	//清空所有li class的样式;
	var lis = document.querySelectorAll('.q2 li');
	var divs = document.querySelectorAll('.q3 section');
	for(var i=0;i<lis.length;i++){
		lis[i].className='';
		divs[i].className='tab-content-display';
		if(index==i){
			//给当前li添加class='hot12';
			obj.className ='hot12';
			divs[i].className='';
		}
	}
}



//回到顶部导航条

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
	if(t>100){
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




