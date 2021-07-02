define([
	'VisualVue',
    'VisualAxios',
    'VisualApi',
	'text!VisualModuleDir/onlineHourRank/onlineHourRank.html'
], function (Vue, Axios, Api, html) {
	function OnlineHourRank(config) {	
		var _this = this;
		var _config = $.extend({
			id: null,
            title: ''
        }, config);
		Axios.post( Api.onlineHourRank ,  {
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
	
	OnlineHourRank.init = OnlineHourRank;
	OnlineHourRank.render = function(response, config) {	// 渲染表单
		var model = response.data.model;
		var data = [{},{},{}];	
		for (var key in model) {  
			model[key].forEach(function(item, index) {
				if(index < 3) {
    				data[index][key] = item.name
    			}
			});
        }
		
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
	return OnlineHourRank;
});