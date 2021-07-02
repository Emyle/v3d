define(['VisualEcharts'], function(echarts){
	function init(config){
		// 处理参数
		var defaults = {
			id: '',	
			container: null,
			xLineColor: '#aaddff',	// x轴线的颜色
			yLineColor: '#aaddff',	// y轴线的颜色
			xTextColor: '#aaddff',	// x轴字体颜色
			yTextColor: '#aaddff',	// y轴字体颜色
			xLineWidth: 1,			// x轴宽度
			yLineWidth: 1, 			// y轴宽度
			xFontSize: 10,			// x轴字体宽度
			yFontSize: 10,			// y轴字体宽度
			bgColor: '#122B5B',		// 柱状图背景色
			barWidth: '5%', 		//柱图宽度
			barMaxWidth: '15%', 	//最大宽度
			symbolMargin: '3', 		//图形垂直间隔
			symbolSize: [15, 6],	// 图形大小
			colors:['#ff0f4e', '#40c6ff', '#3b80fe', '#a2d337'],	// 几个颜色轮换选
			data:[]
		};
		config = $.extend(defaults, config || {});
		return new RoundRectBar(config);
	}
	function RoundRectBar(config) {	// 渲染echarts主体方法
		// 处理数据
		var max = 0;
		var maxData = [];
		var xData = [];
		$.each(config.data, function(index, item) {
			item.value = item.value || 0;
			var value = Math.round(item.value * 1.5);
			max = max > value? max: value;
			xData.push(item.name);
		});
		$.each(config.data, function(index, item) {
			maxData.push(max);
		});
		var container = config.container;
		if(!container) {
			container = document.getElementById(config.id);
		}
		var myChart = echarts.init(container);
		var option = {
				tooltip: {
					trigger: 'axis',
					axisPointer: {
							// type: 'cross'
					},
					formatter: function(params) {
						return  params[0].marker + params[0].name + '：' + params[0].value;
					}
				},
				grid: [{ //设置边距
								left: 40,
		            bottom: 30,
		            top: 30,
		            right: 30
		        }],
		        xAxis: { //X轴配置
		            data: xData, //X轴数据
		            show: true,
		            axisLine: {
		                show: true,
		                lineStyle: { 
		                	color: config.xLineColor,
		                	width: config.xLineWidth
		                }
		            },
		            axisTick: {
		                show: false,
		            },
		            splitLine: { //隐藏刻度
		                show: false,
		            },
		            axisLabel: { //X轴文字
									color: config.xTextColor,
									fontSize: config.xFontSize,
									interval: 0,  
									// formatter:function(value){  
									// 	var ret = "";//拼接加\n返回的类目项  
									// 	var maxLength = 2;//每项显示文字个数  
									// 	var valLength = value.length;//X轴类目项的文字个数  
									// 	var rowN = Math.ceil(valLength / maxLength); //类目项需要换行的行数  
									// 	if (rowN > 1)//如果类目项的文字大于3,  
									// 	{  
									// 			for (var i = 0; i < rowN; i++) {  
									// 					var temp = "";//每次截取的字符串  
									// 					var start = i * maxLength;//开始截取的位置  
									// 					var end = start + maxLength;//结束截取的位置  
									// 					//这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧  
									// 					temp = value.substring(start, end) + "\n";  
									// 					ret += temp; //凭借最终的字符串  
									// 			}  
									// 			return ret;  
									// 	}  
									// 	else {  
									// 			return value;  
									// 	}  
									// }  
		            },
		        },
		        yAxis: { //Y轴配置
		            show: true,
		            axisLine: {
		                show: true,
		                lineStyle: { 
		                	color: config.yLineColor,
		                	width: config.yLineWidth
		                }
		            },
		            axisTick: { //隐藏刻度
		                show: false,
		            },
		            splitLine: { //隐藏刻度
		                show: false,
		            },
		            axisLabel: { //Y轴文字
		                color: config.yTextColor,
		                fontSize: config.yFontSize
		            },
		        },
			series: [{
					name: '当前值',
					type: 'pictorialBar', //设置类型为象形柱状图
					symbol: 'rect', //图形类型，带圆角的矩形
					barWidth: config.barWidth, //柱图宽度
					barMaxWidth: config.barMaxWidth, //最大宽度
					symbolMargin: config.symbolMargin, //图形垂直间隔
					animationDelay: function(dataIndex, params){ //每个图形动画持续时间
							return params.index * 50;
					},
					itemStyle: {
							normal: {
									color: function(params){ //图形渐变颜色方法，四个数字分别代表，右，下，左，上，offset表示0%到100%
										var index = params.dataIndex % config.colors.length;
										return config.colors[index];
									}
							}
					},
					z: 2,
					symbolRepeat: true, //图形是否重复
					symbolSize: config.symbolSize, //图形元素的尺寸
					data: config.data, //Y轴数据
					animationEasing: 'elasticOut' //动画效果
				},
				{
					name: '极限值',
					type: 'pictorialBar', //设置类型为象形柱状图
					symbol: 'rect', //图形类型，带圆角的矩形
					barWidth: config.barWidth, //柱图宽度
					barMaxWidth: config.barMaxWidth, //最大宽度
					symbolMargin: config.symbolMargin, //图形垂直间隔
					itemStyle: {
							normal: {
									color: config.bgColor
							}
					},
					z: 1,
					symbolRepeat: true, //图形是否重复
					symbolSize: config.symbolSize, //图形元素的尺寸
					data: maxData
				}
			]
		};
		myChart.setOption(option);
		window.addEventListener('resize',function(){
				myChart.resize();
		});
	}
	
	return init;
});