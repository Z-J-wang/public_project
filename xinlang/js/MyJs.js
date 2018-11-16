//获取详细时间
function time_Long(){
	var mydate = new Date();
	var t=mydate.toLocaleString();
	return t;
}

//该函数让指定块相对与屏幕静止，参数obj是需要实现该效果的块的class或id
function ad_fix(obj){								
	var adTop = parseInt($(obj).css("top"));			//获取块的top
	var adLeft = parseInt($(obj).css("left"));			//获取块的left
	$(window).scroll(function(){
		var scTop = parseInt($(this).scrollTop());		//获取屏幕滚动的top
		var scLeft = parseInt($(this).scrollLeft());	//获取屏幕滚动的left
		$(obj).offset({top:adTop+scTop});				//根据adTop和scTop换算出应定位的位置的top
		$(obj).offset({left:adLeft+scLeft});			//根据adLeft和scLeft换算出应定位的位置的left
	})
}


//该函数实现input输入框获取焦点时，placeholder文字消失，实去焦点时文字出现
//第一个参数是需要实现该效果的input,第二个参数是在该文本框中显示是文字
function input_placeholder_focus(obj,str){
	$(obj).val(str);
	$(obj).focus(function(){
			$(this).val("");
		}).blur(function(){
			$(this).val(str);
		})	
}

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
//使用轮播函数需要在onload()里用setInterval()来调用，具体用法如下：
//$(document).ready(function(){
//		setInterval(function(){
//			carousel(".ad_product_frame",210,10,2500);
//		},1000);	
//})
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
//使用轮播函数需要在onload()里用setInterval()来调用，具体用法如下：
//$(document).ready(function(){
//		setInterval(function(){
//			carousel(".ad_product_frame",210,10,2500);
//		},1000);	
//})
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
//使用轮播函数需要在onload()里用setInterval()来调用，具体用法如下：
//$(document).ready(function(){
//		setInterval(function(){
//			carousel(".ad_product_frame",210,10,2500);
//		},1000);	
//})
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

//选项卡函数
function TabContral_show(obj,order,index){
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