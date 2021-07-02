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
  'VisualDir/component/roundRectBar/roundRectBar',
  'text!VisualModuleDir/specialTrainDis/specialTrainDis.html'
], function (Vue, Axios, Api, BaseModule, RoundRectBar, html) {
  function SpecialTrainDis(config) {
    BaseModule.call(this, config)
    var _this = this;
    // 组件参数
    var _config = $.extend({
      id:false,
      title: "默认标题",
      data: [],
      colors: ['#0463a6', '#389cf8', '#20c7fc', '#43e9c6'],
      xTextColor: '#7a869a',
      yTextColor: '#7a869a',
      bgColor: '#122B5B'
    }, config);
    // 数据请求
    Axios.post( Api.specialTrainDis ,  {
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
  SpecialTrainDis.init = SpecialTrainDis;

  /* 模块渲染 */
  SpecialTrainDis.render = function(response, config){
     var _this = this;
     var _data = response.data.model;
     var visualModule = Vue.extend({
        template: html,
        // HTML渲染
        data: function() {
            return {
               titleHtml : _this.getTitleHtml()
            };
        },
        // 图表渲染
        mounted: function(){
          _this.setTitleType();
          RoundRectBar({
            id: 'visual-special-bar',
            data: _data,
            colors: config.colors,
            xTextColor: config.xTextColor,
            yTextColor: config.yTextColor,
            bgColor: config.bgColor
          })
        }
      })
      // 模块挂载
      new visualModule().$mount('#' + config.id);
  }

  return SpecialTrainDis;

});
