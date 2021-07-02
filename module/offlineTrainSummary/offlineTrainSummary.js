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
	'text!VisualModuleDir/offlineTrainSummary/offlineTrainSummary.html'
], function (Vue, Axios, Api, BaseModule, ProgressBar, html) {
    function OfflineTrainSummary(config) {
        BaseModule.call(this, config)
        var _this = this;
        // 组件参数
        var _config = $.extend({
			id:false,
            title: "默认标题",
            data: [],
            titleType: 'scifi',
            contentTitleColor: '#aaddff',
            progressBarBgColor: '#122b5b',
            provinceColor: '#e77c6c',
            cityColor: '#fae61b',
            sectionColor: '#00fefb',
            numberColor: '#ffffff'
        }, config);
        // 数据请求
        Axios.post( Api.offlineTrainSummary ,  {
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

    /* 模块渲染 */
    OfflineTrainSummary.prototype.render = function(response, config){
        var _this = this;
        var _data = response.data.model[0];
        var classInfo = _data.classes;
        var lilunClass = classInfo[0];
        var zhuantiClass = classInfo[1];
        var jingshenClass = classInfo[2];
        var shangjiClass = classInfo[3];
        var sumCountProvice = parseInt(lilunClass.provinceStudCount) + parseInt(zhuantiClass.provinceStudCount) + parseInt(jingshenClass.provinceStudCount) + parseInt(shangjiClass.provinceStudCount);
        var sumCountCity = parseInt(lilunClass.cityStudCount) + parseInt(zhuantiClass.cityStudCount) + parseInt(jingshenClass.cityStudCount) + parseInt(shangjiClass.cityStudCount);
        var sumCountSection = parseInt(lilunClass.sectionStudCount) + parseInt(zhuantiClass.sectionStudCount) + parseInt(jingshenClass.sectionStudCount) + parseInt(shangjiClass.sectionStudCount);
        var planClassCount = _data.planClassCount;
        var classCountSum = parseInt(lilunClass.classCount) + parseInt(zhuantiClass.classCount) + parseInt(jingshenClass.classCount);
        var visualModule = Vue.extend({
            template: html,
            // HTML渲染
            data: function() {
                return {
                   contentTitleColor: config.contentTitleColor,
                   provinceColor: config.provinceColor,
                   cityColor: config.cityColor,
                   sectionColor: config.sectionColor,
                   sumCountProvice : sumCountProvice,
                   sumCountCity : sumCountCity,
                   sumCountSection : sumCountSection,
                   planClassCount : planClassCount,
                   classCountSum : classCountSum,
                   titleHtml : _this.getTitleHtml()
                };
            },
            // 图表渲染
            mounted: function(){
                _this.setTitleType();
                ProgressBar({
                   id : "module-1-1",
                   titleName: '理论党性班(' + lilunClass.classCount + ')',
                   backgroundColor: config.progressBarBgColor,
                   borderRadius: '2',
                   titleColor: config.contentTitleColor,
                   value: [{ 
                      value : lilunClass.provinceStudCount, 
                      color : config.provinceColor
                   }, 
                   { 
                      value : lilunClass.cityStudCount,
                      color : config.cityColor
                   }, 
                   { 
                      value : lilunClass.sectionStudCount,
                      color : config.sectionColor
                   }],
                   maxValue: parseInt(lilunClass.sectionStudCount) + parseInt(lilunClass.cityStudCount) + parseInt(lilunClass.provinceStudCount),
                   numberColor: config.numberColor
                });
                ProgressBar({
                   id : "module-1-2",
                   titleName: '专题研讨班(' + zhuantiClass.classCount + ')',
                   backgroundColor: config.progressBarBgColor,
                   borderRadius: '2',
                   titleColor: config.contentTitleColor,
                   value: [{ 
                      value : zhuantiClass.provinceStudCount, 
                      color : config.provinceColor
                   }, 
                    { 
                        value : zhuantiClass.cityStudCount,
                        color : config.cityColor
                    }, 
                    { 
                        value : zhuantiClass.sectionStudCount,
                        color : config.sectionColor
                    }],
                    maxValue: parseInt(zhuantiClass.sectionStudCount) + parseInt(zhuantiClass.cityStudCount) + parseInt(zhuantiClass.provinceStudCount),
                    numberColor: config.numberColor
                });
                ProgressBar({
                    id : "module-1-3",
                    titleName: '精神轮训班(' + jingshenClass.classCount + ')',
                    backgroundColor: config.progressBarBgColor,
                    borderRadius: '2',
                    titleColor: config.contentTitleColor,
                    value: [{ 
                        value : jingshenClass.provinceStudCount,
                        color : config.provinceColor
                    }, 
                    { 
                        value : jingshenClass.cityStudCount,
                        color : config.cityColor
                    }, 
                    { 
                        value : jingshenClass.sectionStudCount,
                        color : config.sectionColor
                    }],
                    maxValue: parseInt(jingshenClass.sectionStudCount) + parseInt(jingshenClass.cityStudCount) + parseInt(jingshenClass.provinceStudCount),
                    numberColor: config.numberColor
                });
                ProgressBar({
                    id : "module-1-4",
                    titleName: '上级调训班(' + shangjiClass.classCount + ')',
                    backgroundColor: config.progressBarBgColor,
                    borderRadius: '2',
                    maxValue: 200,
                    titleColor: config.contentTitleColor,
                    value: [{ 
                        value : shangjiClass.provinceStudCount, 
                        color : config.provinceColor
                    }, 
                    { 
                        value : shangjiClass.cityStudCount,
                        color : config.cityColor
                    }, 
                    { 
                        value : shangjiClass.sectionStudCount,
                        color : config.sectionColor
                    }],
                    maxValue: parseInt(shangjiClass.sectionStudCount) + parseInt(shangjiClass.cityStudCount) + parseInt(shangjiClass.provinceStudCount),
                    numberColor: config.numberColor
                });
            }
        })
        // 模块挂载
        new visualModule().$mount('#' + config.id);
    }

    return OfflineTrainSummary;
});
