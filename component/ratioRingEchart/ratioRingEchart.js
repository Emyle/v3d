define(['VisualEcharts'], function(echarts){
	function init(config){
		// 处理参数
		var defaults = {
			id: '',	
			container: null,
			bgColor: '#F2F2F2',		// 圆环背景色
			color: '#999999',		// 有值部分颜色
			fontColor: '#666666',	// 中间值的字体颜色
			fontSize: 20,
			total: 100,				// 总值
			value: 0,				// 显示值（百分比）
			radius: ['70%', '90%']
		};
		config = $.extend(defaults, config || {});
		return new RatioRing(config);
	}
	function RatioRing(config) {	// 渲染echarts主体方法
		var container = config.container;
		if(!container) {
			container = document.getElementById(config.id);
		}
		var myChart = echarts.init(container);
		var option = {
			title: {
		        text: config.total? Math.round(config.value/config.total*100) + '%': '0%',  //图形标题，配置在中间对应效果图的80%
		        left: 'center',
		        top: 'center',
		        textStyle: {
		        	color: config.fontColor,
		        	fontSize: config.fontSize,
		        	align: 'center'
		        }
			},
			series: [
				{
					type: 'pie',
					radius: config.radius,  //设置内外环半径,两者差值越大，环越粗
					hoverAnimation: false,
					label: {
						normal: {
							show: false,
			            }
					},
					data: [
						{                  
							value: config.value,
							itemStyle: {
								normal: {
									color: config.color
								},
								emphasis:{
									color:config.color
								}
							}
						},
			            {
							value: config.total - config.value,
							itemStyle: {
								normal: {
									color: config.bgColor
								},
								emphasis:{
									color:config.bgColor
								}
							}
			            }
					]
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