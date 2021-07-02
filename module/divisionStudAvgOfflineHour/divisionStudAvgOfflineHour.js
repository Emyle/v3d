define([
	'VisualVue',
    'VisualAxios',
    'VisualApi',
	'text!VisualModuleDir/divisionStudAvgOfflineHour/divisionStudAvgOfflineHour.html'
], function (Vue, Axios, Api, html) {
	
	function DivisionStudAvgOfflineHour(config) {	
		var _this = this;
		var _config = $.extend({
			id: null,
            title: ''
        }, config);
		Axios.post( Api.divisionStudAvgOfflineHour ,  {
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
	
	DivisionStudAvgOfflineHour.init = DivisionStudAvgOfflineHour;
	DivisionStudAvgOfflineHour.render = function(response, config) {	// 渲染表单
		var data = response.data.model;
		var visualModule = Vue.extend({
            template: html,
            // HTML渲染
            data: function() {
                return {
                	data: data,
                	style: {}
                }
            },
            // 图表渲染
            mounted: function(){
            	var _this = this;
            	var diam = _this.$refs['divisionStudAvgOfflineHour0'][0].offsetWidth * 0.85;
            	Vue.set(this.$data, 'style', {
    				'height': diam + 'px',
    				'width': diam + 'px',
    				'line-height': diam + 'px'
    			});
            }
        })
        // 模块挂载
        new visualModule().$mount('#' + config.id);
	};
	return DivisionStudAvgOfflineHour;
});