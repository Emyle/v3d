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
  'VisualDir/component/table/table',
  'text!VisualModuleDir/citySubjectClass/citySubjectClass.html'
], function (Vue, Axios, Api, BaseModule, Table, html) {
  function CitySubjectClass(config) {
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
      headFontSize: '14px',
    }, config);
    // 数据请求
    Axios.post( Api.mainClass ,  {
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
  CitySubjectClass.init = CitySubjectClass;

  /* 模块渲染 */
  CitySubjectClass.render = function(response, config){
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
        Table({
          id: 'cityTable',
          layout: [
            {
              name:'班次', 
              field: 'name', 
              width: '30%', 
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
            },
            {
              name:'人数', 
              field: 'studCount', 
              width: '10%', 
              headTextAlign: 'left',
              bodyTextAlign: 'left',
              click: function(){
                console.log('trclick')
              }
            },
            {
              name:'考核', 
              field: 'examine', 
              width: '10%', 
              headTextAlign: 'left',
              bodyTextAlign: 'left',
              click: function(){
                console.log('trclick')
              }
            },
            {
              name:'评估', 
              field: 'assess', 
              width: '10%', 
              headTextAlign: 'left',
              bodyTextAlign: 'left',
              click: function(){
                console.log('trclick')
              }
            },
            {
              name:'指示', 
              field: 'opinion', 
              width: '10%', 
              headTextAlign: 'left',
              bodyTextAlign: 'left',
              click: function(){
                console.log('trclick')
              }
            },
            {
              name:'状态', 
              field: 'state', 
              width: '15%', 
              headTextAlign: 'left',
              bodyTextAlign: 'left',
              click: function(){
                console.log('trclick')
              }
            },
          ],
          data: _data,
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

  return CitySubjectClass;

});
