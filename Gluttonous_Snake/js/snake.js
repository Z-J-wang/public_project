
var $background = $('.background');				//该全局变量用于获取背景图，因为背景图在游戏中不会发生变化，可在最开始获取就行
var coordinate_x = new Array();					//创建一个数组，用于存放蛇的每个身体节点的x坐标值
var coordinate_y = new Array();					//创建一个数组，用于存放蛇的每个身体节点的y坐标值
var status = "Right";							//该全局变量用于存放贪吃蛇行走的方向，默认为向右走
var Time;										//该全局变量用于存放setInterval(Auto_walk,$grade)，用于游戏停止
var $grade;										//该全局变量用于存在游戏等级的数字变量，主要用于设置行走的快慢
var $score = 0;                                 //建个全局变量用于存放分数

$(document).ready(function(){
	Grade();									//初始化等级显示
	
	$(".start").hide();							//页面加载后，在游戏未开始前隐藏蛇头
	
	$(".begin select").click(function(){		//给select标签添加单击事件，用于显示等级
		Grade();
	})
	
	$("#btn_begin").click(function(){           //为开始游戏按钮添加单击事件
		$(".start").show();
		Crate_start_snake_boby();				
		Crate_start_snake_boby();
		create_foot();
		Time = setInterval(Auto_walk,$grade);	//使用setInterval()方法，实现蛇的自动行走
		$(".begin").hide();
	})
	
	$("#btn_exit").click(function(){			//为退出按钮添加单击事件，实现当前窗口关闭
		window.close();	
	})
	
	$("#btn_restart").click(function(){			//为重新开始按钮添加单击事件，实现窗口重新加载
		window.location.reload();
	})
	
	$(window).keydown(function(event){			//为窗口添加键盘事件，
		switch (event.keyCode){
			case 38:{							//判断单击按键是否为上
				move_top();						//为真，则向上移动
				eat();							//执行eat()函数，判断移动的新位置是否有食物
				if(status != "Bottom"){			//判断将要移动的方向是否与现在的移动方向相反，相反则status不变
					status = "Top";				
				}
				
			}
				break;
			case 40:{
				move_bottom();
				eat();
				if(status != "Top"){
					status = "Bottom";
				}
			}
				break;
			case 37:{
				move_left();
				eat();
				if(status != "Right"){
					status = "Left";
				}
			}
				break;
			case 39:{
				move_right();
				eat();
				if(status != "Left"){
					status = "Right";
				}
			}
				break;
		}
	})
})


//创建一节蛇身
function Crate_start_snake_boby(){
	var $newSnake_boby = $("<div class='snake_boby'></div>");					//创建一个新节点（蛇身）
	var $snakes = $(".background>div");											//获取全部的蛇身
	var L_left = parseInt($snakes.eq($snakes.length-1).css("left"))-20+'px';	//查到蛇尾节点，获取x,y坐标值，赋给新建的蛇身节点
	var L_Top = $snakes.eq($snakes.length-1).css("top");
	$newSnake_boby.css("left",L_left);
	$newSnake_boby.css("top",L_Top);
	$background.append($newSnake_boby);											//把新建的蛇身节点添加到背景中
}

function Crate_snake_boby(){
	var $newSnake_boby = $("<div class='snake_boby'></div>");
	var $snakes = $(".background>div");
	var Last_boby_x = parseInt($snakes.eq($snakes.length-1).css("left"));		//获取蛇尾的坐标
	var LastButOne_boby_x = parseInt($snakes.eq($snakes.length-2).css("left")); //获取倒数第二节蛇身的坐标
	var Last_boby_y = parseInt($snakes.eq($snakes.length-1).css("top"));
	var LastButOne_boby_y = parseInt($snakes.eq($snakes.length-2).css("top"));
//	console.log(LastButOne_boby_x,LastButOne_boby_x)
	if(Last_boby_x == LastButOne_boby_x){										//判断最后两节蛇身是否处在垂直
		if(Last_boby_y > LastButOne_boby_y){									//通过判断最后两节蛇身的y坐标来确定新蛇身的添加方向
			$newSnake_boby.css("left",Last_boby_x);
			$newSnake_boby.css("top",Last_boby_y+20+'px');
		}else if(Last_boby_y < LastButOne_boby_y){
			$newSnake_boby.css("left",Last_boby_x);
			$newSnake_boby.css("top",Last_boby_y-20+'px');
		}
	}else if(Last_boby_y == LastButOne_boby_y){
		if(Last_boby_x > LastButOne_boby_x){
			$newSnake_boby.css("left",Last_boby_x+20+'px');
			$newSnake_boby.css("top", Last_boby_y);
		}else if(Last_boby_x < LastButOne_boby_x){
			$newSnake_boby.css("left",Last_boby_x-20+'px');
			$newSnake_boby.css("top", Last_boby_y);
		}
	}
	$background.append($newSnake_boby);
//	console.log($newSnake_boby.css("left"),$newSnake_boby.css("top"))
}

function create_foot(){
	var status = true ;											//新建一个变量用来判断是否生成新的食物
	var $snakes = $(".background>div");
	do{
		this.foot_x = Math.floor(Math.random()*50)*20;			//随机生成一个坐标值
		this.foot_y = Math.floor(Math.random()*30)*20;
		for(var i=0;i < $snakes.length;i++){
			coordinate_y[i] = $snakes.eq(i).css("top");
			coordinate_x[i] = $snakes.eq(i).css("left");
			if(foot_x != parseInt(coordinate_x[i]) && foot_y != parseInt(coordinate_y[i])){		//判断新坐标值是否跟蛇身重叠
				status = false;														//不存在重叠，转化status的值，跳出循环
			}
		}
	}while(status)
	var $foot = $("<span class='foot'></span>");
	$foot.css("top",foot_y+"px");
	$foot.css("left",foot_x+"px");
	$background.append($foot);
//	console.log(foot_x,foot_y);
}

function eat(){
	var $snakes = $(".background>div");
	var $H_Top1 = parseInt($snakes.eq(0).css("top"));				//获取蛇头的坐标
	var $H_Left1 = parseInt($snakes.eq(0).css("left"));
	if($H_Top1 == foot_y && $H_Left1 == foot_x){	                //判断蛇头的坐标和食物的坐标是否重叠，重叠，添加一节蛇身，新建一个食物，分数加一，刷新分数
		$(".foot").remove();
		Crate_snake_boby();
		create_foot();
		++$score;
		$(".score span").html($score);
	}
	
}

function Grade(){
	var value = $(".begin select").val();					 //获取游戏等级
	var $grade_show;										 //该变量用于存放游戏等级的文本内容
	switch (parseInt(value)){								 //根据游戏等级设置setInterval的时间
		case 1: {
			$grade = 500;
			$grade_show = "简单"
		}
			break;
		case 2: {
			$grade = 200;
			$grade_show = "困难";
		}
			break;
		case 3: {
			$grade = 50;
			$grade_show = "地狱";
		}
			break;
	}
	$(".grade span").html($grade_show);
}

function move_right(){
	var $snakes = $(".background>div");
	var $H_Top = parseInt($snakes.eq(0).css("top"));
	var $H_Left = parseInt($snakes.eq(0).css("left"));
	for(var i=0;i < $snakes.length;i++){
		coordinate_y[i] = $snakes.eq(i).css("top");
		coordinate_x[i] = $snakes.eq(i).css("left");
	}
	if(!($H_Top == parseInt(coordinate_y[1]) && ($H_Left+20) == parseInt(coordinate_x[1]))){
		$snakes.eq(0).css("left",$H_Left+20+'px');
		for(var i = 1; i < $snakes.length; i++){
			$snakes.eq(i).css("top",coordinate_y[i-1]);
			$snakes.eq(i).css("left",coordinate_x[i-1]);
		}
		collide_dead();  
	}else{
		return false;
	}
	
}
function move_left(){
	var $snakes = $(".background>div");
	var $H_Top = parseInt($snakes.eq(0).css("top"));
	var $H_Left = parseInt($snakes.eq(0).css("left"));
	for(var i=0;i < $snakes.length;i++){
		coordinate_y[i] = $snakes.eq(i).css("top");
		coordinate_x[i] = $snakes.eq(i).css("left");
	}
	if(!($H_Top == parseInt(coordinate_y[1]) && ($H_Left-20) == parseInt(coordinate_x[1]))){
		$snakes.eq(0).css("left",$H_Left-20+'px');
		for(var i = 1; i < $snakes.length; i++){
			$snakes.eq(i).css("top",coordinate_y[i-1]);
			$snakes.eq(i).css("left",coordinate_x[i-1]);
		}
	collide_dead();
	}else{
		return false;
	}
}
function move_top(){
	var $snakes = $(".background>div");
	var $H_Top = parseInt($snakes.eq(0).css("top"));
	var $H_Left = parseInt($snakes.eq(0).css("left"));
	for(var i=0;i < $snakes.length;i++){
		coordinate_y[i] = $snakes.eq(i).css("top");
		coordinate_x[i] = $snakes.eq(i).css("left");
	}
	if(!(($H_Top-20) == parseInt(coordinate_y[1]) && $H_Left == parseInt(coordinate_x[1]))){
		$snakes.eq(0).css("top",$H_Top-20+'px');
		for(var i = 1; i < $snakes.length; i++){
			$snakes.eq(i).css("top",coordinate_y[i-1]);
			$snakes.eq(i).css("left",coordinate_x[i-1]);
		}
	collide_dead();
	}else{
		return false;
	}
}
function move_bottom(){
	var $snakes = $(".background>div");
	var $H_Top = parseInt($snakes.eq(0).css("top"));
	var $H_Left = parseInt($snakes.eq(0).css("left"));
	for(var i=0;i < $snakes.length;i++){
		coordinate_y[i] = $snakes.eq(i).css("top");
		coordinate_x[i] = $snakes.eq(i).css("left");
	}
	if(!(($H_Top+20) == parseInt(coordinate_y[1]) && $H_Left == parseInt(coordinate_x[1]))){
		$snakes.eq(0).css("top",$H_Top+20+'px');
		for(var i = 1; i < $snakes.length; i++){
			$snakes.eq(i).css("top",coordinate_y[i-1]);
			$snakes.eq(i).css("left",coordinate_x[i-1]);
		}
		collide_dead();
	}else{
		return false;
	}
}

function collide_dead(){
		var $snakes = $(".background>div");
		var $H_Top1 = parseInt($snakes.eq(0).css("top"));			//获取蛇头坐标					
		var $H_Left1 = parseInt($snakes.eq(0).css("left"));
//		console.log($H_Left1,$H_Top1)
		for(var i=0;i < $snakes.length;i++){						//遍历全部蛇身节点坐标
			coordinate_y[i] = $snakes.eq(i).css("top");
			coordinate_x[i] = $snakes.eq(i).css("left");
		}
		for(var j = 1;j < $snakes.length;j++){
//			console.log(parseInt(coordinate_x[j]),parseInt(coordinate_y[j]));
			if($H_Top1 == parseInt(coordinate_y[j]) && $H_Left1 == parseInt(coordinate_x[j])){ //判断蛇头坐标是否跟蛇身任意节点坐标重叠，重叠则认为吃到自己，清空setInterval，显示GameOver
				alert("Game Over");
				clearTimeout(Time);
				$(".GameOver").show();
//				$("#btn_begin").focus();
				return false;
			}
			if($H_Top1 > 580 || $H_Top1 < 0|| $H_Left1 > 980 || $H_Left1 < 0){			//判断是否超出边界
				alert("Game Over");
				clearTimeout(Time);
				$(".GameOver").show();
				return false;
			}
		}
}


function Auto_walk(){
	if(status == "Right"){
		move_right();
		eat();
	}else if(status == "Left"){
		move_left();
		eat();
	}else if(status == "Top"){
		move_top();
		eat();
	}else if(status == "Bottom"){
		move_bottom();
		eat();
	}
}
