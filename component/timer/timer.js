/**
 * 
 * layout的数据格式{name:'xxx', field: 'xxx', format: function(item, index){}, width: '', headTextAlign: 'center', bodyTextAlign: 'left', click: function(item, index){}}
 */
define(function(){
	function Timer(config){
		// 处理参数
		var defaults = {
			id: ''				// 容器id
		};
		config = $.extend(defaults, config || {});
    this.showTime(config.id);	// 渲染页面
    return true;
	}
	
  /* 模块初始化 */
  Timer.init = Timer;

  function checkTime(i){  //对于小于10的，进行补0处理
    if(i<10){
        i="0"+i
    }
    return i;
  }

  Timer.showTime = function(id){
    var _this = this;
    var now=new Date();
    var year=now.getFullYear() ;
    var month=now.getMonth()+1;
    var date=now.getDate();
    var day=now.getDay();
    // var h=now.getHours();
    // var m=now.getMinutes()  ;
    // var s=now.getSeconds() ;
    // m=checkTime(m);  //将分和秒转换成两位数显示
    // s=checkTime(s);

    //获取的星期day是阿拉伯数字，对应转换一下
    var weekday=new Array(7);
    weekday[0]="星期日";
    weekday[1]="星期一";
    weekday[2]="星期二";
    weekday[3]="星期三";
    weekday[4]="星期四";
    weekday[5]="星期五";
    weekday[6]="星期六";
    document.getElementById(id).innerHTML=year+"年"+month+"月"+date+"日 "+weekday[day];
  }

	return Timer;
});