define(['VisualEcharts', 'VisualZrender'], function(echarts , Zrender){
	function init(config){
		// 处理参数
		var defaults = {
			id: '',	
			container: null,
			bgColor: '#253138',		// 圆环背景色
			color: '#51F5FE',		// 有值部分颜色
			textColor: '#fff',		// 中间值的字体颜色
			fontSize: 28,			// 中间值字体大小
			width: 6,				// loading块的宽度
			height: 15,				// loading块的高度
			shadowBlur: 20, 		// 阴影大小
			segments: 20,			// 分割多少块
			lineWidth: 1,			// 线的宽度
			total: 100,				// 总值
			value: 0				// 显示值（百分比）
		};
		config = $.extend(defaults, config || {});
		return new RingProcess(config);
	}
	
	function RingProcess(config) {	// 渲染echarts主体方法
		var _this = this;
		_this.options = config;
		var $container = config.container ? $(config.container) : $('#' + config.id);
		var width = $container.width(), height = $container.height();
		var $canvas = $('<canvas width="' + width + '" height="' + height + '"></canvas>');
		$container.append($canvas);
		var myCanvas = $canvas[0];
		var ctx = myCanvas.getContext('2d');
		ctx.translate(width/2, height/2);
		//ctx.scale(1, -1);
		_this.options.canvasRadius = (width < height ? width/2 : height/2) * 0.8;
		if(!ctx) {
			return;
		}
		_this.ctx = ctx;
		var angle = 180;
		for(var i=0; i<config.segments; i++) {	// 分成25个块
			var fill = config.value/config.total > i/config.segments
			strokeLine(_this, angle, fill);
			angle = angle - 360/config.segments;
		}
		stockText(_this);
	}
	
	var strokeLine = function(ringProcess, angle, fill) {
		var options = ringProcess.options;
		// var maxRadius = options.width < options.height ? options.width/2: options.height/2;
		var ctx = ringProcess.ctx;
		ctx.save();
		ctx.beginPath(0);
		var begin = [Math.sin(angle*Math.PI/180) * (options.canvasRadius - options.height), Math.cos(angle*Math.PI/180) * (options.canvasRadius - options.height)];
		var end = [Math.sin(angle*Math.PI/180) * options.canvasRadius, Math.cos(angle*Math.PI/180) * options.canvasRadius];
		ctx.moveTo(begin[0], begin[1]);
		ctx.lineTo(end[0], end[1]);
		ctx.lineJoin = "round";
		ctx.lineWidth = options.width; //若是给定了值就用给定的值否则给予默认值2  
		if(fill) {
			ctx.strokeStyle = options.color;
			ctx.shadowColor = options.color;
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;
	    ctx.shadowBlur = options.shadowBlur;
		} else {
			ctx.strokeStyle = options.bgColor;
		}
		ctx.closePath();
		ctx.stroke();
		ctx.restore();
	} 
	
	var stockText = function(ringProcess) {
		var options = ringProcess.options;
		var ctx = ringProcess.ctx;
		var text = options.total ? Math.round(options.value/options.total * 100) + '%': '0%';
		ctx.textBaseline = 'middle'; //设置文本的垂直对齐方式
		ctx.textAlign = 'center';//设置文本的水平对齐方式
		ctx.font = options.fontSize + 'px Arial';
		ctx.fillStyle = options.textColor;
		ctx.strokeStyle = options.textColor;
		ctx.fillText(text, 0, 0);
		ctx.strokeText(text, 0, 0);
	}
	
	return init;
});