define([], function(){
	function init(config){
		// 处理参数
		var defaults = {
			id: '',	
			container: null,
			value: 0,
			color: ''
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
		var width = $container.width();
		var height = $container.height();
		var size = width > height ? height: width;
		var $obj = $('<div class="visual-warning visual-warning-' + options.color + '">' + options.value + '</div>');
		$obj.css({
			'width': size + 'px',
			'height': size + 'px',
			'line-height': size + 'px',
		});
		$container.append($obj);
	}
	
	return init;
});