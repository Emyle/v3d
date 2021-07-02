/**
 * data的数据格式：{name:'处级', value: 100, color: '#F7C779'}
 */
define(['VisualEcharts'], function(echarts){
	function init(config){
		// 处理参数
		var defaults = {
			id: '',	
			container: null,	// dom对象
			bgcolor: '#E8E8E8',
			shadowBlur: 10,
			startAngle: 270,
			ringWidth: 10,
			gapWidth: 5,
			text: '',	// 中间显示的名称
			fontColor: '#666666',	// 中间值的字体颜色
			fontSize: 20,
			data: [],
			maxRatio: 0.75, // 最大比例
		};
		config = $.extend(defaults, config || {});
		return new BarPolar(config);
	}
	function BarPolar(config) {	// 渲染echarts主体方法
		// 处理数据
		var colors = [], series = [], max = 0;
		var container = config.container;
		if(!container) {
			container = document.getElementById(config.id);
		}
		var width = container.offsetWidth, height = container.offsetHeight;
		var  begin = width > height ? height/2 -10: width/2-10;
		// 第一遍遍历数据找出最大值
		$.each(config.data, function(index, item) {
			max = item.value > max ? item.value : max;
		});
		max = max === 0 ? 1 : max/config.maxRatio;
		var title = null;
		if(config.text) {
			title = {
		        text: config.text,  //图形标题，配置在中间对应效果图的80%
		        left: 'center',
		        top: 'center',
		        textStyle: {
		        	color: config.fontColor,
		        	fontSize: config.fontSize,
		        	align: 'center'
		        }
			}
		}
		$.each(config.data, function(index, item) {
			colors.push(item.color);
			series.push({
				name: item.name,
				type: 'pie',
				clockWise: true, //顺时加载
	            hoverAnimation: false, //鼠标移入变大
	            startAngle: config.startAngle,
	            radius: [begin, begin + 1],
	            itemStyle: {
	                normal: {
	                    label: {
	                        show: false
	                    },
	                    labelLine: {
	                        show: false
	                    },
	                    borderWidth: config.ringWidth,
	                    shadowBlur: config.shadowBlur,
	                    borderColor: item.color,
	                    shadowColor: 'rgba(0, 0, 0, 0)' //边框阴影
	                }
	            },
	            data: [{
	            	value: item.value,
	            	name: item.name,
	            	itemStyle: {
	            		normal: {
	        	            label: {
	        	                show: false
	        	            },
	        	            labelLine: {
	        	                show: false
	        	            },
	        	            color: item.color,
	        	            borderColor: item.color,
	        	            borderWidth: config.ringWidth
	        	        },
	        	        emphasis: {
	        	        	color: item.color,
	        	            borderColor: item.color,
	        	            borderWidth: config.ringWidth
	        	        }
	            	}
	            },
	            {
	            	value: max - item.value,
	            	name: '',
	            	itemStyle: {
	        	        normal: {
	        	            label: {
	        	                show: false
	        	            },
	        	            labelLine: {
	        	                show: false
	        	            },
	        	            color: config.bgcolor,
	        	            borderColor: config.bgcolor,
	        	            borderWidth: config.ringWidth
	        	        },
	        	        emphasis: {
	        	        	color: config.bgcolor,
	        	            borderColor: config.bgcolor,
	        	            borderWidth: config.ringWidth
	        	        }
	        	    }
	            }]
			});
			
			begin -= (config.ringWidth + config.gapWidth);
		});
		
		var myChart = echarts.init(container);
	    var option = {
	        color: colors,
	        title: title,
	        series: series
	    };
		myChart.setOption(option);
        window.addEventListener('resize',function(){
            myChart.resize();
        });
	}
	
	return init;
});