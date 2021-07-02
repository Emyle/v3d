define([
	'VisualVue',
    'VisualAxios',
    'VisualApi',
	'VisualComponentDir/ratioRingEchart/ratioRingEchart',
	'text!VisualModuleDir/onlineACH/onlineACH.html'
], function (Vue, Axios, Api, RatioRingEchart, html) {
	
	function OnlineACH(config) {	
		var _this = this;
		var _config = $.extend({
			id: null,
            title: ''
        }, config);

		Axios.post( Api.onlineACH ,  {
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
	
	OnlineACH.init = OnlineACH;
	OnlineACH.render = function(response, config) {	// 渲染表单
		var model = response.data.model;
		var data = [];
		data.push({
			value: model.divisionStudent,
			title: '处级干部'
		});
		data.push({
			value: model.sectionStudent,
			title: '科级干部'
		});
		
		var visualModule = Vue.extend({
            template: html,
            // HTML渲染
            data: function() {
                return {
                	data: data
                }
            },
            // 图表渲染
            mounted: function(){
            	var _this = this;
            	_this.data.forEach(function(item, index) {
            		RatioRingEchart({
                		container: _this.$refs['onlineACH' + index][0],
                		value: data.divisionStudent
                	});
            	});
            }
        })
        // 模块挂载
        new visualModule().$mount('#' + config.id);
	};
	return OnlineACH;
});