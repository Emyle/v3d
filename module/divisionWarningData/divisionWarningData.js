/**
 * 模块1
 * @param config
 Demo:
 */
 define([
  'VisualDir/component/warning/warning',
    'text!VisualModuleDir/divisionWarningData/divisionWarningData.html'
], function (Warning, html) {
    function DivisionWarningData(config) {

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
    DivisionWarningData.init = DivisionWarningData;

    /* 模块渲染 */
    DivisionWarningData.render = function(config){
        var _this = this;
        _this.$dom.append( html );
        Warning({
          id: 'divisionWarningData-main',
          value: 300,
          color: 'blue'
        });
    }

    return DivisionWarningData;

});
