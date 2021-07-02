/**
 * 
 * layout的数据格式{name:'xxx', field: 'xxx', format: function(item, index){}, width: '', headTextAlign: 'center', bodyTextAlign: 'left', click: function(item, index){}}
 */
define([
	'VisualVue',
	'text!VisualComponentDir/table/table.html'
], function(Vue, html){
	function init(config){
		// 处理参数
		var defaults = {
			id: '',					// 容器id
			layout: [],				// 表头和布局，参照layout的数据格式
			data: [],				// 表格数据
			marquee: false,			// 是否循环滚动
			headFontSize: '16px',	// 表头字体大小
			headColor: '#496665',	// 表头字体颜色
			headBgColor: '#000',
			headTextAlign: 'center',// 表头字体对齐方式
			headRowHeight: '40px',	// 表头行高
			bodyFontSize: '14px',	// 表体字体大小
			bodyColor: '#FFFFFF',	// 表体字体颜色
			bodyTextAlign: 'left',	// 表体字体对齐方式
			bodyRowHeight: '30px',	// 表体行高
			rowClick: null, 		// 行点击事件
		};
		config = $.extend(defaults, config || {});
		return new Table(config);
	}
	
	function Table(config) {	// 渲染echarts主体方法
		render(config);	// 渲染页面
	}
	
	// 渲染
	render = function(config) {
		var visualModule = Vue.extend({
			template: html,
			// HTML渲染
			data: function() {
				return config;
			},
			// 图表渲染
			mounted: function(){
				
			}
		})
		// 模块挂载
		new visualModule().$mount('#' + config.id);
	}
	
	return init;
});