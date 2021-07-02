define([
	'VisualVue',
    'VisualAxios',
    'VisualApi',
	'VisualEcharts',
	'text!VisualModuleDir/superiorClassSummary/superiorClassSummary.html'
], function (Vue, Axios, Api, echarts, html) {
	
	function SuperiorClassSummary(config) {	
		var _this = this;
		var _config = $.extend({
			id: null,
            title: ''
        }, config);
		Axios.post( Api.superiorClassSummary ,  {
            academy: 'ZJCE_SX',
        })
        .then(function (response) {
            _this.render(response, _config);
        })
        .catch(function (error) {
          console.log(error);
        });
        return true;
	}
	
	SuperiorClassSummary.init = SuperiorClassSummary;
	SuperiorClassSummary.render = function(response, config) {	// 渲染表单
		var data = response.data.model;
		var superiorClassSummary = this;
		var visualModule = Vue.extend({
            template: html,
            // HTML渲染
            data: function() {
                return {
                	data: data
                }
            },
            // 图表渲染
            mounted: function(){
            	var _this = this;
            	superiorClassSummary.renderAjustification(_this.$refs['superiorClassSummary1'], {
            		central: this.data.countryTrainingNum,
            		province: this.data.provinceTrainingNum
            	});
            	superiorClassSummary.renderCompletion(_this.$refs['superiorClassSummary2'],Math.round(this.data.provinceClassNum/this.data.planProvinceClassNum*100));
            }
        })
        // 模块挂载
        new visualModule().$mount('#' + config.id);
		
	};
	
	SuperiorClassSummary.renderAjustification = function(container, ajustification) {
		var myChart = echarts.init(container);
		var option = {
			tooltip: {
		        trigger: 'item'
		    },
			title: {
		        text: ajustification.central + ajustification.province,  //图形标题，配置在中间对应效果图的80%
		        left: 'center',
		        top: 'center',
		        textStyle: {
		        	color: '#666666',
		        	fontSize: 20,
		        	align: 'center'
		        }
			},
			series: [
				{
					type: 'pie',
					radius: ['60%', '90%'],  //设置内外环半径,两者差值越大，环越粗
					hoverAnimation: false,
					label: {
						normal: {
							show: false,
			            }
					},
					data: [
						{      
							name: '中央',
							value: ajustification.central,
							itemStyle: {
								normal: {
									color: '#389FFD'
								}
							}
						},
			            {
							name: '省级',
							value: ajustification.province,
							itemStyle: {
								normal: {
									color: '#55D0D0'
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
	};
	
	SuperiorClassSummary.renderCompletion = function(container, completion) {
		var myChart = echarts.init(container);
		var option = {
			tooltip: {
		        trigger: 'item',
		        formatter: '{b}：{d}%'
		    },
			title: {
		        text: completion + '%',  //图形标题，配置在中间对应效果图的80%
		        left: 'center',
		        top: 'center',
		        textStyle: {
		        	color: '#666666',
		        	fontSize: 20,
		        	align: 'center'
		        }
			},
			series: [
				{
					type: 'pie',
					radius: ['60%', '90%'],  //设置内外环半径,两者差值越大，环越粗
					hoverAnimation: false,
					label: {
						normal: {
							show: false,
			            }
					},
					data: [
						{        
							name: '已完成',
							value: completion,
							itemStyle: {
								normal: {
									color: '#FBB024'
								}
							}
						},
			            {
							name: '未完成',
							value: 100-completion,
							itemStyle: {
								normal: {
									color: '#FDFD24'
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
	};
	
	return SuperiorClassSummary;
});