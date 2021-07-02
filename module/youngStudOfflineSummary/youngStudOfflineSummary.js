define([
	'VisualVue',
    'VisualAxios',
    'VisualApi',
	'VisualComponentDir/proportion/proportion',
	'text!VisualModuleDir/youngStudOfflineSummary/youngStudOfflineSummary.html'
], function (Vue, Axios, Api, Proportion, html) {
	
	function YoungStudOfflineSummary(config) {
		var _this = this;
		var _config = $.extend({
			id: null,
            title: ''
        }, config);
		Axios.post( Api.youngStudOfflineSummary ,  {
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
	
	YoungStudOfflineSummary.init = YoungStudOfflineSummary;
	YoungStudOfflineSummary.render = function(response, config) {	// 渲染表单
		var model = response.data.model;
		var visualModule = Vue.extend({
            template: html,
            // HTML渲染
            data: function() {
            	var data = [];
            	data.push({
            		itemValue: model.trainingNum || 0,
            		total: model.planTrainingNum,
            		value: model.trainingNum,
            		text: model.trainingNumRate ? Math.round(model.trainingNumRate*100) + '%': '0%',
            		title: '培训人数'
            	});
            	data.push({
            		itemValue: model.classNum || 0,
            		total: model.planClassNum,
            		value: model.classNum,
            		text: model.classNumRate ? Math.round(model.classNumRate*100) + '%' : '0%',
            		title: '培训班次'
            	});
            	data.push({
            		itemValue: (model.testResults || 0) + '(平均)',
            		total: 200,
            		value: model.testResults,
            		text: '优',
            		title: '“双百分”成绩'
            	});
                return {
                	data: data
                }
            },
            // 图表渲染
            mounted: function(){
            	var _this = this;
            	_this.data.forEach(function(item, index) {
            		Proportion($.extend(item,{
            			container: _this.$refs['youngStudOfflineSummary' + index][0],
            		}));
            	});
            }
        })
        // 模块挂载
        new visualModule().$mount('#' + config.id);
	};
	return YoungStudOfflineSummary;
});