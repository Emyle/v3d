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
  'text!VisualModuleDir/internetEduResource/internetEduResource.html'
], function (Vue, Axios, Api, BaseModule, ProgressBar, html) {
  function InternetEduResource(config) {
    BaseModule.call(this, config)
    var _this = this;
    // 组件参数
    var _config = $.extend({
      id:false,
      title: "默认标题",
      data: [],
      barColor: '#0164b8',
      contrastColor: '#1acdff'
    }, config);
    // 数据请求
    function getTopicSourceCount() {
      return Axios.post(Api.topicSourceCount, { academy: 'ZJCE_SX' });
    }
    
    function getCourseWareSourceCount() {
      return Axios.post(Api.courseWareSourceCount, { academy: 'ZJCE_SX' });
    }
    
    function getOnlineClassSourceCount() {
      return Axios.post(Api.onlineClassSourceCount, { academy: 'ZJCE_SX' });
    }
    
    Axios.all([getTopicSourceCount(), getCourseWareSourceCount(), getOnlineClassSourceCount()])
      .then(Axios.spread(function (data1, data2, data3) {
        _this.render(data1, data2, data3, _config);
      }))
      .catch(function (error) {
        console.log(error);
      });;

    return true;
  }

  /* 模块初始化 */
  InternetEduResource.init = InternetEduResource;

  /* 模块渲染 */
  InternetEduResource.render = function(response1, response2, response3, config){
    var _this = this;
    var topicSum = 0; 
    var courseWareSum = 0;  
    var onlineClassSum = 0;
    $.each( response1.data.model, function( index, item ){
      topicSum += item.value;
    });
    $.each( response2.data.model, function( index, item ){
      courseWareSum += item.value;
    });
    $.each( response3.data.model, function( index, item ){
      onlineClassSum += item.value;
    });
    var topicCurrent = topicSum - response1.data.model[0].value;
    var courseWareCurrent = courseWareSum - response2.data.model[0].value;
    var onlineClassCurrent = onlineClassSum - response3.data.model[0].value;

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
          id: 'internetEduResource-topic',
          titleColor: '#42526e',
          tipColor: '#7a869a',
          value: topicCurrent,
          maxValue: topicSum,
          titleName: '专题',
          barColor: config.barColor,
          contrastColor: config.contrastColor,
          contrast: 'on',
          showBarValue: 'false',
          borderRadius: '10',
          tipType: 'value'
        });
        ProgressBar({
          id: 'internetEduResource-courseWare',
          titleColor: '#42526e',
          tipColor: '#7a869a',
          value: courseWareCurrent,
          maxValue: courseWareSum,
          titleName: '课件',
          barColor: config.barColor,
          contrastColor: config.contrastColor,
          contrast: 'on',
          showBarValue: 'false',
          borderRadius: '10',
          tipType: 'value'
        });
        ProgressBar({
          id: 'internetEduResource-onlineClass',
          titleColor: '#42526e',
          tipColor: '#7a869a',
          value: onlineClassCurrent,
          maxValue: onlineClassSum,
          titleName: '班级',
          barColor: config.barColor,
          contrastColor: config.contrastColor,
          contrast: 'on',
          showBarValue: 'false',
          borderRadius: '10',
          tipType: 'value'
        });
      }
    })
    // 模块挂载
    new visualModule().$mount('#' + config.id);
  }

  return InternetEduResource;

});
