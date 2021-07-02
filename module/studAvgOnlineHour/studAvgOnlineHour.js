/**
 * 模块1
 * @param config
 Demo:
 */
 define([
    "VisualVue",
    "VisualAxios",
    "VisualApi",
    'VisualCoreDir/baseModule',
    'text!VisualModuleDir/studAvgOnlineHour/studAvgOnlineHour.html'
  ], function (Vue, Axios, Api, BaseModule, html) {
    function StudAvgOnlineHour(config) {
      BaseModule.call(this, config)
      var _this = this;
      // 组件参数
      var _config = $.extend({
        id:false,
        title: "默认标题",
        data: [],
        type: 'scifi'
      }, config);

      Axios.post( Api.studAvgOnlineHour ,  {
        academy: 'ZJCE_SX',
      })
      .then(function (response) {
        _this.render(response, _config);
      })
      .catch(function (error) {
        console.log(error);
      });
      // 数据请求
      
      return true;
    }
  
    /* 模块初始化 */
    StudAvgOnlineHour.init = StudAvgOnlineHour;
  
    /* 模块渲染 */
    StudAvgOnlineHour.render = function(response, config){
      var _this = this;
      var divisionAvgHours = parseInt(response.data.model[0].divisionAvgHours);
      var sectionAvgHours = parseInt(response.data.model[0].sectionAvgHours);
      var visualModule = Vue.extend({
          template: html,
          // HTML渲染
          data: function() {
              return {
                divisionAvgHours: divisionAvgHours,
                sectionAvgHours: sectionAvgHours,
                titleHtml : _this.getTitleHtml(),
                type: config.type
              };
          },
          // 图表渲染
          mounted: function(){
             _this.setTitleType();
          }
      })
      // 模块挂载
      new visualModule().$mount('#' + config.id);
    }
  
    return StudAvgOnlineHour;
  
  });
  