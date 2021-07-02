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
  'text!VisualModuleDir/offlineTrainSituation/offlineTrainSituation.html'
], function (Vue, Axios, Api, BaseModule, html) {
  function OfflineTrainSituation(config) {
    BaseModule.call(this, config)
    var _this = this;
    // 组件参数
    var _config = $.extend({
      id:false,
      title: "默认标题",
      data: [],
      type: 'scifi', 
      cicleBgColor: 'none' ,
      cicleBgpadding: '0px', 
      cicleBgmargin: '0px', 
      cicleBgborderRadius: '0px',
      circleBgWidth: '25%',
      circleBgHeight: '100%',
      titleColor: '#42526e'
    }, config);
    // 数据请求
    function getOfflineTrainStudCount() {
      return Axios.post(Api.offlineTrainStudCount, { academy: 'ZJCE_SX' });
    }
    
    function getOfflineTrainMainClassCount() {
      return Axios.post(Api.offlineTrainMainClassCount, { academy: 'ZJCE_SX' });
    }
    
    function getOfflineTrainClassCount() {
      return Axios.post(Api.offlineTrainClassCount, { academy: 'ZJCE_SX' });
    }
    
    function getofflineDivisionStudAFD() {
      return Axios.post(Api.offlineDivisionStudAFD, { academy: 'ZJCE_SX' });
    }

    Axios.all([getOfflineTrainStudCount(), getOfflineTrainMainClassCount(), getOfflineTrainClassCount(), getofflineDivisionStudAFD()])
      .then(Axios.spread(function (data1, data2, data3, data4) {
        _this.render(data1, data2, data3, data4, _config);
      }))
      .catch(function (error) {
        console.log(error);
      });;

    return true;
  }

  /* 模块初始化 */
  OfflineTrainSituation.init = OfflineTrainSituation;

  /* 模块渲染 */
  OfflineTrainSituation.render = function(response1, response2, response3, response4, config){
    var _this = this;
    var offlineTrainStudCount = 0;
    var offlineTrainMainClassCount = 0;
    var offlineTrainClassCount = 0;
    var offlineDivisionStudAFDValue = 0;
    var offlineDivisionStudAFDSum = 0;
    var offlineDivisionStudAFD = 0
    $.each( response1.data.model , function( index, item ){
      offlineTrainStudCount += item.value
    });
    $.each( response2.data.model , function( index, item ){
      offlineTrainMainClassCount += item.value
    });
    $.each( response3.data.model , function( index, item ){
      offlineTrainClassCount += item.value
    });
    $.each( response4.data.model , function( index, item ){
      offlineDivisionStudAFDValue += item.value;
      offlineDivisionStudAFDSum += item.total;
    });

    offlineDivisionStudAFD = Math.round(offlineDivisionStudAFDValue / offlineDivisionStudAFDSum * 100);
    
    var visualModule = Vue.extend({
        template: html,
        // HTML渲染
        data: function() {
            return {
                offlineTrainStudCount : offlineTrainStudCount,
                offlineTrainMainClassCount: offlineTrainMainClassCount,
                offlineTrainClassCount: offlineTrainClassCount,
                offlineDivisionStudAFD: offlineDivisionStudAFD,
                titleHtml : _this.getTitleHtml(),
                cicleBgColor: config.cicleBgColor ,
                cicleBgpadding: config.cicleBgpadding, 
                cicleBgmargin: config.cicleBgmargin, 
                cicleBgborderRadius: config.cicleBgborderRadius,
                circleBgWidth: config.circleBgWidth,
                circleBgHeight: config.circleBgHeight,
                titleColor: config.titleColor,
                type: config.type
            };
        },
        // 图表渲染
        computed: {
          offlineTrainStudCountComputed: function () {
              if( this.offlineTrainStudCount > 1000 ) {
                return parseInt( this.offlineTrainStudCount / 1000 ) + '千'
              }else{
                return this.offlineTrainStudCount
              }
              
          },
          offlineDivisionStudAFDComputed: function() {
            if( this.offlineDivisionStudAFD > 100 ){
              return 100;
            }else{
              return this.offlineDivisionStudAFD
            }
          }
        },
        mounted: function(){
           _this.setTitleType();
        }
    })
    // 模块挂载
    new visualModule().$mount('#' + config.id);
  }

  return OfflineTrainSituation;

});
