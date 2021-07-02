/**
 * 模块1
 * @param config
 Demo:
 */
 define([
  "VisualVue",
  "VisualAxios",
  "VisualApi",
  'VisualDir/component/table/table',
  'VisualCoreDir/baseModule',
  'text!VisualModuleDir/keyTrainStudClass/keyTrainStudClass.html'
], function (Vue, Axios, Api, Table, BaseModule, html) {
  function KeyTrainStudClass(config) {
    BaseModule.call(this, config)
    var _this = this;
    // 组件参数
    var _config = $.extend({
      id:false,
      title: "默认标题",
      data: [],
      headColor: '',	// 表头字体颜色
      headBgColor: '',
      bodyColor: '', // 表体字体颜色
      bodyRowHeight: '30px',
      headFontSize: '14px'
    }, config);
    // 数据请求
    Axios.post( Api.keyTrainStudClass ,  {
      academy: 'ZJCE_SX',
      pageSize: 10
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
  KeyTrainStudClass.init = KeyTrainStudClass;

  /* 模块渲染 */
  KeyTrainStudClass.render = function(response, config){
    var _this = this;
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
        Table({
          id: 'classTable',
          layout: [
            {
              name:'姓名', 
              field: 'name', 
              width: '10%', 
              headTextAlign: 'left',
              bodyTextAlign: 'left', 
              click: function(){
                console.log('trclick')
              }
            },
            {
              name:'职务', 
              field: 'jobTitle', 
              width: '40%', 
              headTextAlign: 'left',
              bodyTextAlign: 'left',
              click: function(){
                console.log('trclick')
              }
            },
            {
              name:'班次', 
              field: 'className', 
              width: '35%', 
              headTextAlign: 'left',
              bodyTextAlign: 'left',
              click: function(){
                console.log('trclick')
              }
            },
            {
              name:'时间', 
              field: 'trainingStartDate', 
              width: '15%', 
              headTextAlign: 'left',
              bodyTextAlign: 'left',
              format: function(item, index){    
                return item.trainingStartDate.split('-')[1] + item.trainingStartDate.split('-')[2] + '-' + item.trainingEndDate.split('-')[1] + item.trainingEndDate.split('-')[2]
              }, 
              click: function(){
                console.log('trclick')
              }
            }
          ],
          data: response.data.model.curPageData,
          marquee: true,
          headColor: config.headColor,	// 表头字体颜色
          headBgColor: config.headBgColor,
          bodyColor: config.bodyColor, // 表体字体颜色
          bodyRowHeight: config.bodyRowHeight,
          headFontSize: config.headFontSize,
          rowClick: function(){
            console.log('click')
          }
        });
      }
    })
    // 模块挂载
    new visualModule().$mount('#' + config.id);
  }

  return KeyTrainStudClass;

});
