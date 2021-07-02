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
  'text!VisualModuleDir/orgAvgClassHourRank/orgAvgClassHourRank.html'
], function (Vue, Axios, Api, BaseModule, Table, html) {
  function OrgAvgClassHourRank(config) {
    BaseModule.call(this, config)
    var _this = this;
    // 组件参数
    var _config = $.extend({
      id:false,
      title: "默认标题",
      data: [],
      headFontSize: '16px'
    }, config);
    // 数据请求
    Axios.post( Api.orgAvgClassHourRank ,  {
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
  OrgAvgClassHourRank.init = OrgAvgClassHourRank;

  /* 模块渲染 */
  OrgAvgClassHourRank.render = function(response, config){
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
            id: 'orgAvgClassHourRankTable',
            layout: [
              {
                name:'排序', 
                field: 'rank', 
                width: '20%', 
                headTextAlign: 'left',
                bodyTextAlign: 'left',
                click: function(){
                  console.log('trclick')
                }
              },
              {
                name:'名称', 
                field: 'name', 
                width: '60%', 
                headTextAlign: 'left',
                bodyTextAlign: 'left',
                click: function(){
                  console.log('trclick')
                }
              },
              {
                name:'学时', 
                field: 'classHour', 
                width: '20%', 
                headTextAlign: 'left',
                bodyTextAlign: 'left',
                click: function(){
                  console.log('trclick')
                }
              }
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

  return OrgAvgClassHourRank;

});
