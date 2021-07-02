/**
 * 模块1
 * @param config
 Demo:
 */
define([
	'VisualComponentDir/ratioRingEchart/ratioRingEchart',
	'text!VisualModuleDir/studAFD/studAFD.html'
], function (RatioRingEchart, html) {
    function StudAFD(config) {

        var _config = $.extend({
			id:false,
            title: "默认标题",
            data: []
        }, config);

        this.dom = document.getElementById(_config.id);
        this.$dom = $(this.dom);
        this.render(_config);

        return true;
    }

    //支持通过init方法调用
    StudAFD.init = StudAFD;

    /* 模块渲染 */
    StudAFD.render = function(config){
        var _this = this;
        _this.$dom.append( html );
        RatioRingEchart({
    		id: 'studAFD-main',
    		value: 35,
            fontSize: 12
    	});
    }

    return StudAFD;

});
