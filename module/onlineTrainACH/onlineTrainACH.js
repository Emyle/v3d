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
  'VisualComponentDir/progressBar/progressBar',
  'text!VisualModuleDir/onlineTrainACH/onlineTrainACH.html'
], function (Vue, Axios, Api, BaseModule , ProgressBar, html) {
  function OnlineTrainACH(config) {
     BaseModule.call(this, config)
     var _this = this;
     // 组件参数
     var _config = $.extend({
       id:false,
       title: "默认标题",
       data: [],
       contentTitleColor: '#aaddff',
       barColor: '#0162af',
       backgroundColor: '#f4f7fd',
       numberColor: '#ffffff'
     }, config);
     // 数据请求
     Axios.post( Api.onlineTrainACH ,  {
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
  OnlineTrainACH.init = OnlineTrainACH;

  /* 模块渲染 */
  OnlineTrainACH.render = function(response, config){
    var _this = this;
    var divisionPass = response.data.model[0].divisionPass;
    var divisionTotal = response.data.model[0].divisionTotal;
    var sectionPass = response.data.model[0].sectionPass;
    var sectionTotal = response.data.model[0].sectionTotal;
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
          ProgressBar({
            id: 'onlineTrainACH-topic',
            value: divisionPass,
            maxValue: divisionTotal,
            titleColor: config.contentTitleColor,
            titleName: '县处级干部',
            tipColor: config.contentTitleColor,
            borderRadius: '2',
            contrast: 'off',
            showBarValue: 'true',
            tipType: 'percent',
            barColor: config.barColor,
            backgroundColor: config.backgroundColor,
            numberColor: config.numberColor
          });
          ProgressBar({
            id: 'onlineTrainACH-courseWare',
            value: sectionPass,
            maxValue: sectionTotal,
            titleColor: config.contentTitleColor,
            titleName: '乡科级干部',
            tipColor: config.contentTitleColor,
            borderRadius: '2',
            contrast: 'off',
            showBarValue: 'true',
            tipType: 'percent',
            barColor: config.barColor,
            backgroundColor: config.backgroundColor,
            numberColor: config.numberColor
          });
        }
    })
    // 模块挂载
    new visualModule().$mount('#' + config.id);
  }

  return OnlineTrainACH;

});
