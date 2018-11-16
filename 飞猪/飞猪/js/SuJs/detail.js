$(function(){
	//日期选择器
	 //页面加载初始化年月
    var mydate = new Date();
    $(".f-year").html( mydate.getFullYear() );
    $(".f-month").html( mydate.getMonth()+1 );
    showDate(mydate.getFullYear(),mydate.getMonth()+1);
    //日历上一月
    $(".f-btn-jian ").click(function(){
        var mm = parseInt($(".f-month").html());
        var yy = parseInt($(".f-year").html());
        if( mm == 1){//返回12月
            $(".f-year").html(yy-1);
            $(".f-month").html(12);
            showDate(yy-1,12);
        }else{//上一月
            $(".f-month").html(mm-1);
            showDate(yy,mm-1);
        }
    })
    //日历下一月
    $(".f-btn-jia").click(function(){
        var mm = parseInt($(".f-month").html());
        var yy = parseInt($(".f-year").html());
        if( mm == 12){//返回12月
            $(".f-year").html(yy+1);
            $(".f-month").html(1);
            showDate(yy+1,1);
        }else{//上一月
            $(".f-month").html(mm+1);
            showDate(yy,mm+1);
        }
    })
    //返回本月
    $(".f-btn-fhby").click(function(){
        $(".f-year").html( mydate.getFullYear() );
        $(".f-month").html( mydate.getMonth()+1 );
        showDate(mydate.getFullYear(),mydate.getMonth()+1);
    })
    
    //读取年月写入日历  重点算法!!!!!!!!!!!
    function showDate(yyyy,mm){
        var dd = new Date(parseInt(yyyy),parseInt(mm), 0);   //Wed Mar 31 00:00:00 UTC+0800 2010  
        var daysCount = dd.getDate();            //本月天数  
        var mystr ="";//写入代码
        var icon = "";//图标代码
        var today = new Date().getDate(); //今天几号  21
        var monthstart = new Date(parseInt(yyyy)+"/"+parseInt(mm)+"/1").getDay()//本月1日周几  
        var lastMonth; //上一月天数
        var nextMounth//下一月天数
        if(  parseInt(mm) ==1 ){
            lastMonth = new Date(parseInt(yyyy)-1,parseInt(12), 0).getDate();
        }else{
            lastMonth = new Date(parseInt(yyyy),parseInt(mm)-1, 0).getDate();
        }
        if( parseInt(mm) ==12 ){
            nextMounth = new Date(parseInt(yyyy)+1,parseInt(1), 0).getDate();
        }else{
            nextMounth = new Date(parseInt(yyyy),parseInt(mm)+1, 0).getDate();
        }
        //计算上月空格数
        for(j=monthstart;j>0;j--){
            mystr += "<div class='f-td f-null f-lastMonth' style='color:#ccc;'>"+(lastMonth-j+1)+"</div>";
        }
        
        //本月单元格
        for(i=0;i<daysCount;i++){
             //这里为一个单元格，添加内容在此
            mystr += "<div class='f-td f-number'><span class='f-day'>"+(i+1)+"</span>"
                    +"<div class='f-yuan'>￥1900</div>"
                    +"<div class=''><span class='major'></span><span class='major'></span></div>"//这里加判断
                    +"</div>"; 
        }
        
        //计算下月空格数
        for(k=0; k<42-(daysCount+monthstart);k++ ){//表格保持等高6行42个单元格
            mystr += "<div class='f-td f-null f-nextMounth' style='color:#ccc;'>"+(k+1)+"</div>";
        }
         
        
        
        //写入日历
        $(".f-rili-table .f-tbody").html(mystr);
        //给今日加class
        if( mydate.getFullYear() == yyyy){
            if( (mydate.getMonth()+1 ) == mm){
                var today = mydate.getDate();
                var lastNum = $(".f-lastMonth").length;
                $(".f-rili-table .f-td").eq(today+lastNum-1).addClass("f-today");
            }
        }
        //绑定选择方法
        $(".f-rili-table .f-number").off("click");
        $(".f-rili-table .f-number").on("click",function(){
            $(".f-rili-table .f-number").removeClass("f-on");
            $(this).addClass("f-on");
        });
        
        //绑定查看方法
        $(".f-yuan").off("mouseover");
        $(".f-yuan").on("mouseover",function(){
            $(this).parent().find(".f-table-msg").show();
        });
        $(".f-table-msg").off("mouseover");
        $(".f-table-msg").on("mouseover",function(){
            $(this).show();
        });
        $(".f-yuan").off("mouseleave");
        $(".f-yuan").on("mouseleave",function(){
            $(this).parent().find(".f-table-msg").hide();
        });
        $(".f-table-msg").off("mouseleave");
        $(".f-table-msg").on("mouseleave",function(){
            $(this).hide();
        });
    }
	//店铺信息显示隐藏
	$(".logo_hover").hover(function(){
		$(this).parent().find(".header_logo_hide").show();
	},function(){
		$(this).parent().find(".header_logo_hide").hide();
	})
	$(".header_logo_hide").hover(function(){
		$(this).show();
	},function(){
		$(this).hide();
	})
	//数量
	
	$(".btn_up").click(function(){
		$a=$(".count>input").val();
//		alert($a);
		$a++;
		$(this).parent().children("input").val($a);
	})
	$(".btn_down").click(function(){
		$a=$(".count>input").val();
//		alert($a);
		$a--;
		if($a>0){
			$(this).parent().children("input").val($a);			
		}else{
			return false;
		}
	})
	
	//套餐选择
	$(".type").click(function(){
		$(this).parent("p").children(".type").children("i").hide();
		$(this).parent("p").children(".type").children("span").css("border-color","#e0e0e0");
		$(this).children("i").show();
		$(this).children("span").css("border-color","orangered");

	})
	
	//section水平切换
	$(".detail_nav>ul>li a").hover(function(){
		$(this).css("background-color","transparent");
	},function(){
		$(this).css("background-color","transparent");
	})
	$(".detail_nav>ul>li a").click(function(){
		$(this).addClass("select_tab_chg");
//		$(".nav_hide_common>a").addClass("select_tab_chg");
		$(this).parent().siblings().children("a").removeClass("select_tab_chg");
	})
	$(".nav_hide_common>a").hover(function(){
		$(this).css("background-color","transparent");
	},function(){
		$(this).css("background-color","transparent");
	})
	$(".nav_hide_common>a").click(function(){
		$(this).addClass("select_tab_chg");
		$(this).css("background-color","white");
		$(this).parent().siblings().children("a").removeClass("select_tab_chg");
	})
	$(".hori_1").click(function(){
		$(".vert_1>a").addClass("vert_chg");
		$(".vert_1>a").parent().addClass("vert_chg_back");
		$(".vert_1>a").parent().siblings().children().removeClass("vert_chg");
		$(".vert_1>a").parent().siblings().removeClass("vert_chg_back");
	})
	$(".hori_2").click(function(){
		$(".vert_2>a").addClass("vert_chg");
		$(".vert_2>a").parent().addClass("vert_chg_back");
		$(".vert_2>a").parent().siblings().children().removeClass("vert_chg");
		$(".vert_2>a").parent().siblings().removeClass("vert_chg_back");
	})
	$(".hori_3").click(function(){
		$(".vert_3>a").addClass("vert_chg");
		$(".vert_3>a").parent().addClass("vert_chg_back");
		$(".vert_3>a").parent().siblings().children().removeClass("vert_chg");
		$(".vert_3>a").parent().siblings().removeClass("vert_chg_back");
	})
	$(".hori_4").click(function(){
		$(".vert_4>a").addClass("vert_chg");
		$(".vert_4>a").parent().addClass("vert_chg_back");
		$(".vert_4>a").parent().siblings().children().removeClass("vert_chg");
		$(".vert_4>a").parent().siblings().removeClass("vert_chg_back");
	})
	
	$(".nav_eception1").hover(function(){
		$(this).css("background-color","white");
		$(".qr_scan").show();
	},function(){
		$(this).css("background-color","#f2f3f4");
		$(".qr_scan").hide();
	})
	
	$(".nav_eception2").hover(function(){
		$(this).css("background-color","white");
		$(".qr_scan2").show();
	},function(){
		$(this).css("background-color","#f2f3f4");
		$(".qr_scan2").hide();
	})
	//section竖直切换
	$(".vert_1>a").click(function(){
		$(".hori_1").addClass("select_tab_chg");
		$(".hori_1").parent().siblings().children("a").removeClass("select_tab_chg");
		$(this).parent().siblings().children("a").removeClass("vert_chg");
		$(this).addClass("vert_chg");
		$(this).parent().addClass("vert_chg_back");
		$(this).parent().siblings().removeClass("vert_chg_back");
		
	})
	$(".vert_2>a").click(function(){
		$(".hori_2").addClass("select_tab_chg");
		$(".hori_2").parent().siblings().children("a").removeClass("select_tab_chg");
		$(this).addClass("vert_chg");
		$(this).parent().siblings().children("a").removeClass("vert_chg");
		$(this).parent().addClass("vert_chg_back");
		$(this).parent().siblings().removeClass("vert_chg_back");
	})
	$(".vert_3>a").click(function(){
		$(".hori_3").addClass("select_tab_chg");
		$(".hori_3").parent().siblings().children("a").removeClass("select_tab_chg");
		$(this).addClass("vert_chg");
		$(this).parent().siblings().children("a").removeClass("vert_chg");
		$(this).parent().addClass("vert_chg_back");
		$(this).parent().siblings().removeClass("vert_chg_back");
	})
	$(".vert_4>a").click(function(){
		$(".hori_4").addClass("select_tab_chg");
		$(".hori_4").parent().siblings().children("a").removeClass("select_tab_chg");
		$(this).addClass("vert_chg");
		$(this).parent().siblings().children("a").removeClass("vert_chg");
		$(this).parent().addClass("vert_chg_back");
		$(this).parent().siblings().removeClass("vert_chg_back");
	})
	
    $(window).scroll(function(){
		if($(window).scrollTop()>1400){
			$(".nav_hide").show(100);
			$(".detail_2ndR>div>ul").show(100);
		}else{
			$(".nav_hide").hide(100);
			$(".detail_2ndR>div>ul").hide(100);
		}
	})
    
    $(".comment_img_small").click(function(){
    	$(this).css("border-color","#f23d6a");
    	$(this).siblings(".comment_img_big").toggle(200);
    })
    $(".comment_img_big").click(function(){
    	$(this).toggle();
    	$(this).siblings(".comment_img_small").css("border-color","#f2f2f2")
    })
    //评论切换
    $(".comm_hot").click(function(){
//  	alert("aa")
    	$(".comment_content2").show();
    	$(".comment_content2").siblings().hide();
    })

	$(".comm_time").click(function(){
		$(".comment_content1").show();
    	$(".comment_content1").siblings().hide();
	})
	$(".comm_whole").click(function(){
		$(".comment_content3").show();
    	$(".comment_content3").siblings().hide();
	})
	$(".comm_more").click(function(){
		$(".comment_content4").show();
    	$(".comment_content4").siblings().hide();
	})
	$(".comm_img").click(function(){
		$(".comment_content5").show();
    	$(".comment_content5").siblings().hide();
	})
	
	//套餐切换
	$(".ill_select_1").click(function(){
		$(this).children(".ill_select_arrow").show();
		$(this).css({"background-color":"#ffc900","border-color":"#ffc900"});
		$(this).siblings().css({"background-color":"#f5f5f5","border-color":"#ccc"})
		$(this).siblings().children(".ill_select_arrow").hide();
		$(".ill_bott1").siblings().hide();
		$(".ill_bott1").show();
	})
	$(".ill_select_2").click(function(){
		$(this).children(".ill_select_arrow").show();
		$(this).css({"background-color":"#ffc900","border-color":"#ffc900"});
		$(this).siblings().css({"background-color":"#f5f5f5","border-color":"#ccc"})
		$(this).siblings().children(".ill_select_arrow").hide();
		$(".ill_bott2").show();
		$(".ill_bott2").siblings().hide();
	})
	$(".ill_select_3").click(function(){
		$(this).children(".ill_select_arrow").show();
		$(this).css({"background-color":"#ffc900","border-color":"#ffc900"});
		$(this).siblings().css({"background-color":"#f5f5f5","border-color":"#ccc"})
		$(this).siblings().children(".ill_select_arrow").hide();
		$(".ill_bott3").siblings().hide();
		$(".ill_bott3").show();
	})
	$(".ill_select_4").click(function(){
		$(this).children(".ill_select_arrow").show();
		$(this).css({"background-color":"#ffc900","border-color":"#ffc900"});
		$(this).siblings().css({"background-color":"#f5f5f5","border-color":"#ccc"})
		$(this).siblings().children(".ill_select_arrow").hide();
		$(".ill_bott4").siblings().hide();
		$(".ill_bott4").show();
	})
	$(".ill_select_5").click(function(){
		$(this).children(".ill_select_arrow").show();
		$(this).css({"background-color":"#ffc900","border-color":"#ffc900"});
		$(this).siblings().css({"background-color":"#f5f5f5","border-color":"#ccc"})
		$(this).siblings().children(".ill_select_arrow").hide();
		$(".ill_bott5").siblings().hide();
		$(".ill_bott5").show();
	})
	$(".ill_select_6").click(function(){
		$(this).children(".ill_select_arrow").show();
		$(this).css({"background-color":"#ffc900","border-color":"#ffc900"});
		$(this).siblings().css({"background-color":"#f5f5f5","border-color":"#ccc"})
		$(this).siblings().children(".ill_select_arrow").hide();
		$(".ill_bott6").siblings().hide();
		$(".ill_bott6").show();
	})
	
	//评论点击切换图片
	$(".comm_time").click(function(){
//		alert("aa")
		$(this).removeClass("click_grey");
		$(this).addClass("click_orange comment_select_chg");
		$(".comm_hot").addClass("click_grey");
		$(".comm_hot").removeClass("click_orange comment_select_chg");
		
	})
	$(".comm_hot").click(function(){
//		alert("aa")
		$(this).removeClass("click_grey");
		$(this).addClass("click_orange comment_select_chg");
		$(".comm_time").addClass("click_grey");
		$(".comm_time").removeClass("click_orange comment_select_chg");
	})
	
	$(".comm_radio>a").click(function(){
//		alert("11");
		$(this).addClass("comm_radio_orange");
		$(this).removeClass("comm_radio_gray");
		$(this).siblings().addClass("comm_radio_gray");
		$(this).siblings().removeClass("comm_radio_orange");
	})
	
	//城市切换
	$(document).click(function(){
				$("#in_city").hide();
			})
			$("#place").click(function(event){
				event.stopPropagation();
			})
			$("#in_city").click(function(event){
				event.stopPropagation();
			})
			$("#place").click(function(){
				$("#in_city").css("top","35px");
				$("#in_city").css("left","40px");
				$("#in_city").show();
			})
	
	
})
