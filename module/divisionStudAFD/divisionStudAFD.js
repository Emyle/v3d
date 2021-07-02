define([
	'VisualVue',
    'VisualAxios',
    'VisualApi',
	'VisualComponentDir/ratioRingEchart/ratioRingEchart',
	'text!VisualModuleDir/divisionStudAFD/divisionStudAFD.html'
], function (Vue, Axios, Api, RatioRingEchart, html) {
	
	function DivisionStudAFD(config) {	
		var _this = this;
		var _config = $.extend({
			id: null,
            title: ''
        }, config);
		Axios.post( Api.divisionStudAFD ,  {
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
	
	DivisionStudAFD.init = DivisionStudAFD;
	DivisionStudAFD.render = function(response, config) {	// 渲染表单
		var data = response.data.model;
		var visualModule = Vue.extend({
            template: html,
            // HTML渲染
            data: function() {
                return {data: data}
            },
            // 图表渲染
            mounted: function(){
            	var _this = this;
            	data.forEach(function(item, index) {
            		RatioRingEchart({
                		container: _this.$refs['divisionStudAFD' + index][0],
                		value: item.value,
                		total: item.total
                	});
            	});
            }
        })
        // 模块挂载
        new visualModule().$mount('#' + config.id);
	};
	return DivisionStudAFD;
});