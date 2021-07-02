define([
	'VisualVue',
    'VisualAxios',
    'VisualApi',
	'text!VisualModuleDir/netAcademy/netAcademy.html'
], function (Vue, Axios, Api, html) {
	
	function NetAcademy(config) {	
		var _this = this;
		var _config = $.extend({
			id: null,
            title: ''
        }, config);

		Axios.post( Api.netAcademy ,  {
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
	
	NetAcademy.init = NetAcademy;
	NetAcademy.render = function(response, config) {	// 渲染表单
		var data = response.data.model;
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
            	
            }
        })
        // 模块挂载
        new visualModule().$mount('#' + config.id);
	};
	return NetAcademy;
});