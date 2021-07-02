/**
 * 模块1
 * @param config
 Demo:
 */
define([
    "VisualVue",
    "VisualAxios",
    "VisualApi",
	'VisualComponentDir/ratioRingEchart/ratioRingEchart',
	'text!VisualModuleDir/listTheoryTrainAjustification/listTheoryTrainAjustification.html'
], function (Vue, Axios, Api, RatioRingEchart, html) {
    function ListTheoryTrainAjustification(config) {
        var _this = this;
        // 组件参数
        var _config = $.extend({
			id:false,
            title: "默认标题",
            data: []
        }, config);
        // 数据请求
        Axios.post( Api.theoryTrainAFD ,  {
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

    /* 模块初始化 */
    ListTheoryTrainAjustification.init = ListTheoryTrainAjustification;

    /* 模块渲染 */
    ListTheoryTrainAjustification.render = function(response, config){
        var _data = response.data.model;
        var visualModule = Vue.extend({
            template: html,
            // HTML渲染
            data: function() {
                return {
                    ajustificationData: _data,
                    chartIndex: ['Left','Middle','Right']
                };
            },
            // 图表渲染
            mounted: function(){
                var _this = this;
                $.each(_data, function(index, item) {
                    RatioRingEchart({
                        $container: _this.$refs["listTheoryTrainAjustification" + _this.chartIndex[index]],
                        value: _data[index].value,
                        fontSize: 12
                    });
                });
            }
        })
        // 模块挂载
        new visualModule().$mount('#' + config.id);
    }

    return ListTheoryTrainAjustification;

});
