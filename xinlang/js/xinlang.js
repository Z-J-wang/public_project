window.onload = function(){
//		Time_1=setInterval(lunbo,5000);  //5秒自动调用函数 lunbo()
		Time_2=setInterval(left_lunbo,1000);
//		setInterval(left_lunbo_2,4230);
//		setInterval(left_lunbo_3,5000);

}

//var value = 0;				//定义全局变量 value 用来统计marginTop移动的距离
var Time_1 ;
var Time_2 ;//定义全局变量用来保存setInterval，
var Time_3;
var Time_4;

//function lunbo(){
//  Time_3 = setInterval(move,100);   //0.1自动调用move()
//}
//function move(){					//该函数用于移动lunbo_ad div的第一张图片的marginTop,
//	var elems = document.querySelectorAll('.lunbo_ad ul li');
//	var parent_Node = document.querySelector('.lunbo_ad ul');
//	value = value -5;				//函数没执行一次，marginTop就上移动5px
//	elems[0].style.marginTop = value +'px';
//	if(value <= -60){	//当上一移60px后，就把第一个li移除，并让其在ul里的最后面重新生成
//		var Src = elems[0].firstElementChild.firstElementChild.src; //第一个元素移除前，获取其图片的src
//		elems[0].remove();
//		elems[0] = elems[1];										//交换位置，把原本第二的li设为第一的li
//		var newsNode_li = document.createElement("li");
//		var newsNode_a = document.createElement("a");
//		var newsNode_img = document.createElement("img");
//		newsNode_img.src = Src;
//		newsNode_img.style.width = "150px";
//		newsNode_a.appendChild(newsNode_img);
//		newsNode_li.appendChild(newsNode_a);
////		console.log(newsNode_li);
//		parent_Node.appendChild(newsNode_li);
//		value = 0;
//		clearInterval(Time_3);
//	}
//}



var left_value = 0;													//定义全局变量用于存放marginLeft的值
var left_statis = 0;	

function TabContral_like(obj,index){
	var div = document.querySelector('.like_details');
	var divs =document.querySelectorAll('.module_nav_2 ul a div')
	for(var i=0;i<divs.length;i++){
		divs[i].className ='';
		if(index == i){
			divs[i].className ='_sel';
		}
	}
	left_value = -380*index;
	div.style.marginLeft = left_value+'px';	
}

//---------------------------------------------------------------左右轮播函数
											//定义全局变量用于存放第几个divs（是导航条中的红点）的值
var left_value = 0;
function left_lunbo(){
	clearInterval(Time_2);											//在每次5秒调用前先把原本存在的Interval清除掉
	Time_4 = setInterval(move_left_right,50);
}
function move_left_right(){
	var div = document.querySelector('.like_details');				//获取包裹全部ul的div
	var	uls = document.querySelectorAll('.like_details > div');		//获取全部的ul
	var divs =document.querySelectorAll('.module_nav_2 ul a div');	//获取导航条上的全部红点
	
	var $elem = $('.like_details');
	var $uls = 	$('.like_details > div');
	if((left_value >= -380*(uls.length-1))&&(left_statis == 0)){	//判断往左移动是否到头
		left_value = left_value -3;									//函数每执行一次，marginLeft就左移动5px
//		$elem.animate({marginLeft:'380px'},2000);
		if(left_value <= -380*(uls.length-2)){						//判断真正的内容区是否已经显示完，若为真，则通过一直赋边界值实现轮播暂停
			div.style.marginLeft = -380*(uls.length-2);				
		}else{
			div.style.marginLeft = left_value +'px';
		}	
	}else if((left_value <= 380*(uls.length-1))&&(left_statis == 1)){ //判断往右移动是否到头
		left_value = left_value +3;									//函数每执行一次，marginLeft就右移动5px
		if(left_value <= -380*(uls.length-2)){
			div.style.marginLeft = -380*(uls.length-2);
			}else{
			div.style.marginLeft = left_value +'px';
		}
	}
	if(left_value == -380*(uls.length-1)){		//判断往左移动是否到头，到头就变化移动方向，left_statis=1表示右移，left_statis=0表示左移
		left_statis = 1;
		clearInterval(Time_2);
	}else if(left_value == 0){
		left_statis = 0;
	}
	
	var count =Math.abs(parseInt(left_value/380));	//取整数绝对值，用于表示divs的下标
	for(var i=0;i<divs.length;i++){					//清空divs数组中的样式
		divs[i].className ='';
	}
	if(count !=7){
		divs[count].className ='_sel';					//对当前正在显示的divs元素设置红点样式
	}
}

function btn_left(){
	
	if(left_value >= -380){
		left_value  = 0;
	}else{
		left_value = left_value+380;
	}
}
function btn_right(){
	var	 uls = document.querySelectorAll('.like_details ul');		//获取全部的ul
	if(left_value <= -(uls.length-2)*380)
	{
		left_value = -(uls.length-2)*380;
	}else{
		left_value = left_value-380;
	}
}
//var li_num = 0;
//var left_value_2 = 0;
//function left_lunbo_2(){
//  Time_4 = setInterval(move_left_right_2,100);   //0.1自动调用move()
//}
//function move_left_right_2(){
//	var parent_Node = document.querySelector('.carousel_frame');
//	var	 uls = document.querySelectorAll('.carousel_frame >div');		//获取全部的ul
//	var divs =document.querySelectorAll('.dot_div div');	//获取导航条上的全部红点
//	
//	left_value_2 = left_value_2 -5;				//函数没执行一次，marginTop就上移动5px
//	uls[0].style.marginLeft = left_value_2 +'px';
//	if(left_value_2 <= -210){	//当上一移60px后，就把第一个li移除，并让其在ul里的最后面重新生成
//		uls[0].style.marginLeft = "10px";
//		var NewnNode = uls[0].cloneNode(true);
//		uls[0].remove();
//		parent_Node.appendChild(NewnNode);
//		left_value_2 = 0;
//		clearInterval(Time_4);
//		
//		
//		for(var i=0;i<divs.length;i++){
//			divs[i].className = '';
//		}
//		if(li_num == 6){
//			li_num = 0;
//		}else{
//			li_num++;
//		}
//		divs[li_num].className = 'dot_col';
//	}
//
//}
//



//---------------------------------------------------------js实现ad_product_frame轮播
//var left_value_3 = 0;
//function left_lunbo_3(){
//  Time_5 = setInterval(move_left_right_3,100);   //0.1自动调用move()
//}
//function move_left_right_3(){
//	var parent_Node = document.querySelector('.ad_product_frame');
//	var	 uls = document.querySelectorAll('.ad_product_frame > div');		//获取全部的ul
//	left_value_3 = left_value_3 -5;								//函数没执行一次，marginTop就上移动5px
//	uls[0].style.marginLeft = left_value_3 +'px';
//	if(left_value_3 <= -210){								//当上一移60px后，就把第一个li移除，并让其在ul里的最后面重新生成
//		uls[0].style.marginLeft = "10px";
//		var NewnNode = uls[0].cloneNode(true);
//		uls[0].remove();
//		uls[0] = uls[1];										//交换位置，把原本第二的li设为第一的li
//		parent_Node.appendChild(NewnNode);	
//		left_value_3 = 0;
//		clearInterval(Time_5);
//	}
//}
//
$(document).ready(function(){

		setInterval(function(){
			carousel(".ad_product_frame",210,10,2500);
		},1000);	
		
		setInterval(function(){
			carousel(".carousel_frame_1",210,0,3000);
		},1000);
		
		setInterval(function(){
			carousel_dot(".carousel_frame_1",".dot_div",200);
		},1000);
		
		setInterval(function(){
		carousel_top(".carousel_top",150,0,3000);
	},3000)
})
//-----------------------------------------------------------------该函数是用来轮播的
//第一个参数是包裹所有轮播div的的大的div，轮播的div必须的它的子类；
//第二个参数是每个轮播div的宽度
//第三个参数是预留的左外边距
//第四的是一个轮播div的显示需要的时间
//使用该函数必须有一个大的块级元素包裹者需要轮播的div,轮播的必须是div元素，而且obj必须是轮播div的父类，结构如下：
//<div class="obj">
//	<div>轮播的第一 个内容</div>
//	<div>轮播的第二个内容</div>
//	<div>轮播的第三 个内容</div>
//	<div>轮播的第四 个内容</div>
//</div>
function  carousel(obj,size_pic,MarginLeft,time_horizon){
		var $elem = $(obj+'> div:first-child');					//获取轮播框架里的第一个需要轮播的子类
		var $parent_Node = $(obj);								//获取轮播框架
//		console.log($elem.css("margin-left"));
		$elem.animate({marginLeft: -size_pic+'px'},time_horizon);	//使用Jquery的动画方法，实现当前的div的滑动
		if( parseInt($elem.css("margin-left")) <= -size_pic){		//判断一个轮播div是否已近显示完了
			$elem.css("margin-left",MarginLeft+"px");						//若显示完，则初始化，然后复制该div,插入到轮播框架的最后面
			var NewnNode = $elem.clone();
			$elem.remove();
			$parent_Node.append(NewnNode);
		}	
}
//第一个参数是包裹所有轮播div的的大的div，轮播的div必须的它的子类；
//第二个参数是每个轮播div的宽度
//第三个参数是预留的左外边距
//第四的是一个轮播div的显示需要的时间
//使用该函数必须有一个大的块级元素包裹者需要轮播的div,轮播的必须是div元素，而且obj必须是轮播div的父类，结构如下：
//<div class="obj">
//	<div>轮播的第一 个内容</div>
//	<div>轮播的第二个内容</div>
//	<div>轮播的第三 个内容</div>
//	<div>轮播的第四 个内容</div>
//</div>

function  carousel_top(obj,size_pic,Margintop,time_horizon){
		var $elem = $(obj+'>div:first-child');					//获取轮播框架里的第一个需要轮播的子类
		var $parent_Node = $(obj);	
		$elem.animate({marginTop: -size_pic+'px'},time_horizon);	//使用Jquery的动画方法，实现当前的div的滑动
		if( parseInt($elem.css("margin-top")) <= -size_pic){		//判断一个轮播div是否已近显示完了
			$elem.css("margin-top",Margintop+"px");	
			//若显示完，则初始化，然后复制该div,插入到轮播框架的最后面
			var NewnNode = $elem.clone();
			$elem.remove();
			$parent_Node.append(NewnNode);
		}	
}

//----------------------------------------------------------------该函数是用来显示轮播图点的
//第一个参数是包裹所有轮播div的的大的dav，轮播的div必须的它的子类；
//第二个参数是包裹所有的点的父类div,用来设置为点的div必须是它的子类
//第二个参数是每个轮播div的宽度
//使用该函数必须有一个大的块级元素包裹者需要轮播的div,轮播的必须是div元素，而且obj必须是轮播div的父类，结构如下：
//<div class="obj">
//	<div>轮播的第一 个内容</div>
//	<div>轮播的第二个内容</div>
//	<div>轮播的第三 个内容</div>
//	<div>轮播的第四 个内容</div>
//</div>
function carousel_dot(obj,dot_obj,size_pic){
		var $elem = $(obj+'> div:first-child');					//获取轮播框架里的第一个需要轮播的子类
		this.li_num2 = 0;
		var $dot = $(dot_obj+' div');
		if( parseInt($elem.css("margin-left")) <= -size_pic){		//判断一个轮播div是否已近显示完了
			for(var i=0;i<$dot.length;i++){
				$dot[i].className = '';							//赋值前先清空所有点的class
			}
			if(li_num2 == 6){									//如果是最会一个则回到第一个
				li_num2 = 0;
			}else{
				li_num2++;
			}
			$dot[li_num2].className = 'dot_col';				//对应点设置class
		}	
	}
//var status_value = 0;
//obj是被移动的对象;direction是移动的方向（上下左右，默认left）;status_value是一个全局变量，用于存放对象移动的总距离；hopCount用于存放移动一次的距离
//function lunbo_move(obj,direction,status_value,hopCount){
//	status_value = status_value - hopCount;
//	switch (direction){
//		case 1:obj.style.marginLeft = status_value +'px';
//			break;
//		case 2:obj.style.marginRight = status_value +'px';
//			break;
//		case 4:obj.style.marginBottom = status_value +'px';
//			break;
//		case 3:obj.style.marginTop = status_value +'px';
//			break;
//		default:obj.style.marginLeft = status_value +'px';
//			break;
//	}
//}

function _show(obj){
	var elem = obj.firstChild.nextSibling.nextSibling.nextSibling;
	elem.style.display = "inherit";
}
function _hidden(obj){
	var elem = obj.firstChild.nextSibling.nextSibling.nextSibling;
	elem.style.display = "none";
}
function _show_1(obj){
	var elem = obj.nextSibling.nextSibling;
	elem.style.display = "inherit";
}
function _hidden_1(obj){
	var elem = obj.nextSibling.nextSibling;
	elem.style.display = "none";
}
function search_classify(){
	var elem = document.querySelector(".search_classify");
	if(elem.style.display == 'inherit'){
		elem.style.display = 'none';
	} else{
		elem.style.display = 'inherit';
	}
}

function search_reco(){
	var elem = document.querySelector(".search_reco");
	if(elem.style.display == 'inherit'){
		elem.style.display = 'none';
	} else{
		elem.style.display = 'inherit';
	}
}
//----------------------------------------------------选项卡-----------------------------------------------
function TabContral_show(obj,order,index){
	

//	var divs = document.querySelectorAll('#TabControl_'+order+'> div');			//获取选项卡内容区的每个块
//	var a_s = document.querySelectorAll('#TabControl_'+order + '> .module_nav a');	//获取选项卡导航栏的每个a标签
//	for(var i=0;i<divs.length;i++){											//遍历清空数组中的class然后只对选中的块和a标签的class赋值
//		a_s[i].className = "";				
//		divs[i].className = "display_hidden";
//		if(index == i){
//			if(index == 0){
//				obj.className = "hover_first";
//			} else{
//				obj.className = "hover";
//			}
//			divs[index].className = "display_show";
//		}
//	}
	
//-------------------------------------用jQuery代码实现	
	var $divs = $('#TabControl_'+order+'> div');	//获取选项卡内容区的每个块
	var $a_s = $('#TabControl_'+order + '> .module_nav a');				//获取选项卡导航栏的每个a标签
	for(var i = 0;i < $divs.length; i++ ){
		$a_s[i].className = "";
		$divs[i].className = "display_hidden";
		if(index == i){
			if(index == 0){
				obj.className = "hover_first";
			} else{
				obj.className = "hover";
			}
			$divs[index].className = "display_show";
		}
	}
}

//-------------------------------------------ad_others_contain_model模块里的实现鼠标移动到图片上面隐藏图片滑出


$(document).ready(function(){
	$(".ad_others_contain_model").bind("mouseenter",function(){				//为ad_others_contain_model绑定两个事件
		$(this).find(".ad_others_pic_hide").slideDown();					//实现下滑效果
	}).bind("mouseleave",function(){
		$(this).find(".ad_others_pic_hide").slideUp()						//实现上滑滑效果
	})
})
