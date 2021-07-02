define([
	"VisualVue",
	'text!VisualComponentDir/progressBar/progressBar.html'
], function(Vue, html){
	function init(config){
		// 处理参数
		var defaults = {
			id: '',	
			/* value: [{ 
				value : 280, 
				color : '#00ff00'
			}, 
			{ 
				value : 500,
				color : '#ff0000'
			}, 
			{ 
				value : 100,
				color : '#00ffff'
			}], */
			value: 100, // 可以传数值 或者 数组 ， 传数值默认为双值
			maxValue: 1000,
			backgroundColor: 'none',
			titleName: '县处级干部',
			titleColor: '#FFF',
			tipColor: '#FFF',
			barColor: '#03b6fd',
			contrast: 'on', // 是否开启补全进度条  on开启 off关闭
			contrastColor: '#ffae00',
			barHeight: '15',
			backgroundHeight: '30',
			borderRadius: '5',
			numberColor: '#000000',
			tipType: 'value',  // '' , value , percent
			showBarValue: 'true' 
		};
		config = $.extend(defaults, config || {});
		return new ProgressBar(config);
	}
	
	function ProgressBar(config) {	// 渲染echarts主体方法
		render(config);	// 渲染页面
	}
	
	// 渲染
	function render(config) {
		var visualModule = Vue.extend({
			template: html,
			// HTML渲染
			data: function() {
				return {
					id: config.id,
					maxValue : config.maxValue,
					value : config.value,
					titleName : config.titleName,
					percent: config.value / config.maxValue * 100,
					contrastPercent: 100 - ( config.value / config.maxValue * 100 ),
					backgroundColor: config.backgroundColor,
					titleColor: config.titleColor,
					barColor: config.barColor,
					contrast: config.contrast,
					contrastColor: config.contrastColor,
					barHeight: config.barHeight,
					backgroundHeight: config.backgroundHeight,
					borderRadius: config.borderRadius,
					type: config.value.length ? 'multiple' : 'single',
					numberColor: config.numberColor,
					tipType: config.tipType,
					showBarValue: config.showBarValue,
					tipColor: config.tipColor
				};
			},
			computed: {
				percents: function () {
					if( config.value.length ){
						var result = [];
						for ( i = 0 ; i < this.value.length ; i++ ) {
							var percent = Math.round( this.value[i].value / this.maxValue * 100 ) ;
							this.value[i].percent = percent + '%';
						}
						result = this.value
						return result
					}
				},
				percentComputed: function() {
					if( this.percent > 100 ){
						return 100;
					}else{
						return parseInt( this.percent );
					}
				},
				/* 有无背景边框，会影响tip间距 */
				tipShift: function() {
					if( this.backgroundColor == 'none' ){
						 return parseFloat(this.barHeight)
					}else{
						 return parseFloat(this.barHeight) + parseFloat( ( this.backgroundHeight - this.barHeight ) / 2 )
					}
					
				}
			},
			// 图表渲染
			mounted: function(){
				var _this = this;
			}
		})
		// 模块挂载
		new visualModule().$mount('#' + config.id);
	}
	
	return init;
});