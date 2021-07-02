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
    'text!VisualModuleDir/classACH/classACH.html'
], function (Vue, Axios, Api, RatioRingEchart, html) {
    function ClassACH(config) {
        var _this = this; 
        // 组件参数
        var _config = $.extend({
			id:false,
            title: "默认标题",
            data: []
        }, config);

        // 数据请求
        Axios.post( Api.classACH ,  {
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
    ClassACH.init = ClassACH;

    /* 模块渲染 */
    ClassACH.render = function(response, config){
        var _data = response.data.model;
        var visualModule = Vue.extend({
            template: html,
            // HTML渲染
            data: function() {
                return {
                    ajustificationData: _data
                };
            },
            computed: {
                // 计算属性的 getter
                calculation: function () {
                    return this.ajustificationData.realClassNum / this.ajustificationData.planClassNum
                }
            },
            // 图表渲染
            mounted: function(){
                var _this = this;
                RatioRingEchart({
                    $container: $(_this.$refs.refClassACH),
                    value: _this.calculation,
                    fontSize: 12
                });
            }
        })
        // 模块挂载
        new visualModule().$mount('#' + config.id);
    }

    return ClassACH;

});
