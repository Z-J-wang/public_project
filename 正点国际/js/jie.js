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