/**
 * 模块1
 * @param config
 Demo:
 */
define([
    "VisualVue",
    "VisualAxios",
    "VisualApi",
	'text!VisualModuleDir/avgOfflineHour/avgOfflineHour.html'
], function (Vue, Axios, Api, html) {
    function AvgOfflineHour(config) {
      var _this = this; 
	  var _config = $.extend({
		  id:false,
          title: "默认标题",
          data: []
      }, config);
      // 数据请求
      Axios.post( Api.avgOfflineHour ,  {
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
    AvgOfflineHour.init = AvgOfflineHour;

    /* 模块渲染 */
    AvgOfflineHour.render = function(response , config){
        var _data = response.data.model;
        var visualModule = Vue.extend({
            template: html,
            // HTML渲染
            data: function() {
                return {
                    avgCaculationData: _data
                };
            },
            computed: {
                // 计算属性的 getter
                avg: function () {
                  // `this` 指向 vm 实例
                  $.each( this.avgCaculationData , function( index , item ){
                    item.result = item.classHour / item.studentCount
                  });
                  return this.avgCaculationData
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

    return AvgOfflineHour;

});
