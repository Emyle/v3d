define([
	'VisualVue',
    'VisualAxios',
    'VisualApi',
	'VisualComponentDir/ratioRingEchart/ratioRingEchart',
	'text!VisualModuleDir/topicClassesSummary/topicClassesSummary.html'
], function (Vue, Axios, Api, RatioRingEchart, html) {
	
	function TopicClassesSummary(config) {	
		var _this = this;
		var _config = $.extend({
			id: null,
            title: ''
        }, config);
		Axios.post( Api.topicClassesSummary ,  {
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
	
	TopicClassesSummary.init = TopicClassesSummary;
	TopicClassesSummary.render = function(response, config) {	// 渲染表单
		var data = response.data.model;
		var AFD = [];
		AFD.push({
			value: data.chuTrainingNum,
    		total: data.chuTotalNum,
    		title: '处级干部调训率'
		});
		AFD.push({
			value: data.keTrainingNum,
    		total: data.keTotalNum,
    		title: '科级干部调训率'
		});
		var visualModule = Vue.extend({
            template: html,
            // HTML渲染
            data: function() {
                return {
                	classNum: data.classNum || 0,
                	style: {},
                	fontSize: 12,
                	AFD: AFD
                };
            },
            // 图表渲染
            mounted: function(){
            	var _this = this;
            	var diam = _this.$refs['topicClassesSummaryCount'].offsetWidth * 0.95; 
            	Vue.set(this.$data, 'style', {
    				'height': diam + 'px',
    				'width': diam + 'px',
    				'line-height': diam + 'px'
    			});
            	_this.AFD.forEach(function(item, index) {
            		RatioRingEchart($.extend(item, {
                		container: _this.$refs['topicClassesSummary' + index][0],
                		fontSize: 12
                	}));
            	});
            }
        })
        // 模块挂载
        new visualModule().$mount('#' + config.id);
		
	};
	return TopicClassesSummary;
});