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
	'text!VisualModuleDir/listSpecialTrainAdjustification/listSpecialTrainAdjustification.html'
], function (Vue, Axios, Api, RatioRingEchart, html) {
    function ListSpecialTrainAdjustification(config) {
        var _this = this; 
        var _config = $.extend({
			id:false,
            title: "默认标题",
            data: []
        }, config);
        // 数据请求
        Axios.post( Api.specialTrainAFD ,  {
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

    //支持通过init方法调用
    ListSpecialTrainAdjustification.init = ListSpecialTrainAdjustification;

    /* 模块渲染 */
    ListSpecialTrainAdjustification.render = function(response , config){
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
                        $container: _this.$refs["listSpecialTrainAjustification" + _this.chartIndex[index]],
                        value: _data[index].value,
                        fontSize: 12
                    });
                });
            }
        })
        // 模块挂载
        new visualModule().$mount('#' + config.id);
    }

    return ListSpecialTrainAdjustification;

});
