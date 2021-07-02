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
  'VisualDir/component/ringProcess/ringProcess',
  'text!VisualModuleDir/mainIndex/mainIndex.html'
], function (Vue, Axios, Api, BaseModule, RingProcess, html) {
  function MainIndex(config) {
    BaseModule.call(this, config)
    var _this = this;
    // 组件参数
    var _config = $.extend({
      id:false,
      title: "默认标题",
      data: [],
      indexColor: '#3753d2',
      desColor: '#7a869a',
      bgColor: '#253138',
      color: '#51F5FE'
    }, config);
    // 数据请求
    function getThoryTrainProcess() {
      return Axios.post(Api.thoryTrainProcess, { academy: 'ZJCE_SX' });
    }
    
    function getSpecialTrainProcess() {
      return Axios.post(Api.specialTrainProcess, { academy: 'ZJCE_SX' });
    }
    
    function getTrainCompletion() {
      return Axios.post(Api.trainCompletion, { academy: 'ZJCE_SX' });
    }
    
    function getDivisionWarning() {
      return Axios.post(Api.divisionWarning, { academy: 'ZJCE_SX' });
    }

    function getOrgTrainProcess() {
      return Axios.post(Api.orgTrainProcess, { academy: 'ZJCE_SX' });
    }

    Axios.all([getThoryTrainProcess(), getSpecialTrainProcess(), getTrainCompletion(), getDivisionWarning(), getOrgTrainProcess()])
      .then(Axios.spread(function (data1, data2, data3, data4, data5) {
        _this.render(data1, data2, data3, data4, data5, _config);
      }))
      .catch(function (error) {
        console.log(error);
      });;

    return true;
  }

  /* 模块初始化 */
  MainIndex.init = MainIndex;

  /* 模块渲染 */
  MainIndex.render = function(response1, response2, response3, response4, response5, config){
    var _this = this;
    var thoryTrainProcessPercent = parseInt( response1.data.model[0].value / response1.data.model[0].total * 100 );
    var specialTrainProcessPercent =  parseInt( response2.data.model[0].value / response2.data.model[0].total * 100 );
    var offlineHours = response3.data.model[0].offlineHours;
    var studCount = response3.data.model[0].studCount;
    var standard = response3.data.model[0].standard;
    var trainCompletionPercentTemp =  parseInt( offlineHours / studCount / standard * 100 ) ;
    var trainCompletionPercent = trainCompletionPercentTemp > 100 ? 100 : trainCompletionPercentTemp;
    var divisionWarningSum = 0;
    $.each( response4.data.model , function ( index , item) {
      divisionWarningSum += item.value;
    });
    var orgTrainProcessPercent = 0;
    if(response5.data.model && response5.data.model.length) {
    	orgTrainProcessPercent = parseInt( response5.data.model[0].value / response5.data.model[0].total * 100 );
    } 
    var visualModule = Vue.extend({
      template: html,
      // HTML渲染
      computed: {
        thoryTrainProcessPercentComputed : function(){
          return this.thoryTrainProcessPercent > 100 ? 100 : this.thoryTrainProcessPercent;
        },
        specialTrainProcessPercentComputed : function(){
          return this.specialTrainProcessPercent > 100 ? 100 : this.specialTrainProcessPercent;
        },
        orgTrainProcessPercentComputed: function(){
          return this.orgTrainProcessPercent > 100 ? 100 : this.orgTrainProcessPercent;
        },
        warnStyle : function(){
          if( _this.titleType == 'flatClean' ){
            if( this.divisionWarningSum > 0 ){
              return 'yellowFlat'
            }else{
              return 'blueFlat'
            }
          }else{
            if( this.divisionWarningSum > 0 ){
              return 'yellow'
            }else{
              return 'blue'
            }
          }

        },
        blueStyle : function(){
          if( _this.titleType == 'flatClean' ){
            return 'blueFlat'
          } else{
            return 'blue'
          }
        }
      },
      data: function() {
          return {
            thoryTrainProcessPercent: thoryTrainProcessPercent,
            specialTrainProcessPercent: specialTrainProcessPercent,
            orgTrainProcessPercent: orgTrainProcessPercent,
            divisionWarningSum: divisionWarningSum,
            titleHtml : _this.getTitleHtml(),
            indexColor: config.indexColor,
            desColor: config.desColor
          };
      },
      // 图表渲染
      mounted: function(){
        _this.setTitleType();
        RingProcess({
          id: 'visual-trainCompletion',
          value: trainCompletionPercent,
          textColor: config.indexColor,
          bgColor: config.bgColor,
          color: config.color,	
        });
      }
    })
    // 模块挂载
    new visualModule().$mount('#' + config.id);
  }

  return MainIndex;

});
