define([], function(){
	function init(config){
		// 处理参数
		var defaults = {
			id: '',	
			container: null,
			total: 0,
			value: 0,
			text: '',
			color: '#999999',
			fontColor: '#ffffff'
		};
		config = $.extend(defaults, config || {});
		return new Proportion(config);
	}
	
	function Proportion(config) {	// 渲染echarts主体方法
		this.options = config;
		render(this);	// 渲染页面
	}
	
	// 渲染
	function render(proportion) {
		var options = proportion.options;
		var $container = options.container ? $(options.container) : $('#' + options.id);
		var height = options.total ? options.value / options.total * 100 : 100;
		height = height > 100 ? '100%': height + '%';
		var borderRadius = $container.width() / 2 + 'px';
		var $obj = $('<div class="visual-proportion"></div>');
		var $progress = $('<div class="proportion-progress"><div class="text">' + options.text + '</div></div>');
		$obj.css({
			'border': '1px solid ' + options.color,
			'border-radius': borderRadius
		});
		$progress.css({
			'background': options.color,
			'height': height,
			'border-radius': borderRadius,
			'color': options.fontColor,
		});
		$obj.append($progress);
		$container.append($obj);
	}
	
	return init;
});