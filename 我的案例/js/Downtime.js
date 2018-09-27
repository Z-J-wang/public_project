function downTimeFun() {
    //最开始的时间（js文件加载进来一开始拿到的本地时间）
    var zuikaishiTime = new Date();
    //相差值的时间
    var chazhiTime = zuikaishiTime;
 
    $(".downTim").each(function () {//有多个downTime元素，所以用each方法遍历
        var $this = $(this);
        //判断连接全局变量
        var in_app = null;
        //用来判断是否显示天数的变量
        var lxfday = $this.attr("lxfday");
        //多少时间后倒计时
        var _difftime = $this.attr("data-difftime") * 1000;
        //活动持续进行多少时间
        var _goingtime = $this.attr('data-goingtime') * 1000;
 
        //每一秒轮回一次执行的倒计时函数
        var lunfun = function () {
            //绝对时间计算方式（轮回每次后拿到的本地时间）
            chazhiTime = new Date();
            //经过了多少秒（每次拿到的本地时间-最开始拿到的本地时间）
            var jingguoTime = chazhiTime - zuikaishiTime;
            //倒计时剩余时间（倒计时的总时间-经过了的时间）
            var difftime = _difftime - jingguoTime;
            //活动剩余时间（活动持续进行总时间-经过的时间）
            var goingtime = _goingtime - jingguoTime;
            //转换
            //毫秒除以1000得秒
            var seconds = difftime / 1000;
            //秒除以60得分（用Math.floor方法向下取时间）
            var minutes = Math.floor(seconds / 60);
            //取时
            var hours = Math.floor(minutes / 60);
            //取天
            var days = Math.floor(hours / 24);
             
            //"%"是取余运算，可以理解为60进一后取余数，然后只要余数。
            var CHour = hours % 24;
            var CMinute = minutes % 60;
            var CSecond = Math.floor(seconds % 60);
            //小于9的数前面都补上0
            if (CHour <= 9) CHour = '0' + CHour;
            if (CMinute <= 9) CMinute = '0' + CMinute;
            if (CSecond <= 9) CSecond = '0' + CSecond;
 
            //减去倒计时，活动持续时间的数据
            var holdtime = difftime + goingtime;
 
            if (holdtime <= 0) {
                //已经结束
                $this.html("<span>已经结束</span>");
            } else if (holdtime > 0 && 0 < difftime) {
                //还没开始
                if (days == 0) {
                    //输出没有天数的数据
                    $this.html("倒计时 <span>" + CHour + "</span>:<span>" + CMinute + "</span>:<span>" + CSecond + "</span>");
                } else {
                    //输出有天数的数据
                    $this.html("倒计时 <span>" + days + "</span>天<span>" + CHour + "</span>:<span>" + CMinute + "</span>" + CSecond + "</span>");
                };
                setTimeout(function () {
                    if (!difftime <= 0) {
                        lunfun();
                    }
                }, 1000);
            } else if (holdtime > 0 && difftime <= 0) {
                //正在进行时的时间
                $this.html("<span>正在进行时</span>");
                setTimeout(function () {
                    if (!holdtime <= 0) {
                        lunfun();
                    }
                }, 1000);
            };
        };
        lunfun();
 
    });
    window.downTimeFun = downTimeFun;
};