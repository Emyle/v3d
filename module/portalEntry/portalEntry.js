/**
 * 模块1
 * @param config
 Demo:
 */
 define([
  "VisualVue",
  'text!VisualModuleDir/portalEntry/portalEntry.html'
], function (Vue, html) {
  function PortalEntry(config) {
      var _this = this;
      // 组件参数
      var _config = $.extend({
        id:false,
        title: "默认标题",
        data: [],
        type: 'default'
      }, config);
      // 数据请求
      _this.render('', _config);
      return true;
  }

  /* 模块初始化 */
  PortalEntry.init = PortalEntry;

  /* 模块渲染 */
  PortalEntry.render = function(response, config){
      var visualModule = Vue.extend({
          template: html,
          // HTML渲染
          data: function() {
              return {
                 type : config.type
              };
          },
          // 图表渲染
          mounted: function(){
            var _this = this;
          }
      })
      // 模块挂载
      new visualModule().$mount('#' + config.id);
  }

  return PortalEntry;

});
