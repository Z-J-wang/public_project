window.onload = function(){
	setInterval(lunbo,1000);
	
}




function change_li(obj,index){
	var lis = document.querySelectorAll('.AQ_right_head ul li');
	var divs = document.querySelectorAll('.con_one > div ');
	for(var i=0;i<lis.length;i++){
		lis[i].className='';
		divs[i].className='tap_hidden';
		if(index==i){
			//给当前li添加class='hot';
			obj.className ='hot';
			divs[i].className='';
		}
	}
}

function change_li2(obj,index){
	var lis = document.querySelectorAll('.AH_right_head ul li');
	var divs = document.querySelectorAll('.con_one > div ');
	for(var i=0;i<lis.length;i++){
		lis[i].className='';
		divs[i].className='tap_hidden';
		if(index==i){
			//给当前li添加class='hot';
			obj.className ='hot2';
			divs[i].className='';
		}
	}
}

function change_li3(obj,index){
	var lis = document.querySelectorAll('.member_r_czzx_bt p');
	var divs = document.querySelectorAll('.member_r_czzx_text>div');
	for(var i=0;i<lis.length;i++){
		lis[i].className='';
		divs[i].className='tap_hidden';
		if(index==i){
			//给当前li添加class='hot';
			obj.className ='til_btn';
			divs[i].className='';
		}
	}
}

function change_li4(obj,index){
	var lis = document.querySelectorAll('.container_mian ul li');
//	var divs = document.querySelectorAll('.con_one > div ');
	for(var i=0;i<lis.length;i++){
		lis[i].className='';
//		divs[i].className='tap_hidden';
		if(index==i){
			//给当前li添加class='hot';
			obj.className ='hong_5';
//			divs[i].className='';
		}
	}
}
//-----------------------------------------------------------轮播图----------------------------------------------------------------------------


var index = 0;

function lunbo(){
	var lis = document.querySelectorAll('.container_head_mid ul:first-child li');
	var divs = document.querySelectorAll('.container_head_mid ul:nth-child(2) li div');
//	console.log(divs);
	if(index >= 3){
		index=0;
	}
	for(var i = 0; i<lis.length; i++){
		lis[i].className = 'lunbo_hidden';
		divs[i].className = 'whi';
	}
	lis[index].className = 'lunbo_show';
	divs[index].className = 'org';
	index++;
}

