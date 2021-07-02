define([
	'VisualVue',
    'VisualAxios',
    'VisualApi',
	'VisualComponentDir/barPolar/barPolar',
	'text!VisualModuleDir/avgOnlineHour/avgOnlineHour.html'
], function (Vue, Axios, Api, BarPolar, html) {
	
	function AvgOnlineHour(config) {	
		var _this = this;
		var _config = $.extend({
			id: null,
            title: ''
        }, config);
		Axios.post( Api.avgOnlineHour ,  {
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
	
	AvgOnlineHour.init = AvgOnlineHour;
	AvgOnlineHour.render = function(response, config) {	// 渲染表单
		var _this = this;
		var data = response.data.model;
		$.each(data, function(index, item) {
			item.divisionStudent = Math.round(item.divisionHours/item.divisionCount);
			item.sectionStudent = Math.round(item.sectionHours/item.sectionCount);
		});
		var visualModule = Vue.extend({
            template: html,
            // HTML渲染
            data: function() {
                return {
                	divisionColor: '#F7C779',
                	sectionColor: '#F3FD1C',
                	data: data
                }
            },
            // 图表渲染
            mounted: function(){
            	var _this = this;
            	_this.data.forEach(function(item, index){
            		var echartData = [
						{name:'处级', value: item.divisionStudent, color: _this.divisionColor},
						{name:'科级', value: item.sectionStudent, color: _this.sectionColor}
					];
					BarPolar({
						container: _this.$refs['avgOnlineHour' + index][0],
						ringWidth: 5,
						gapWidth: 3,
						data: echartData
					});
            	});
            }
        })
        // 模块挂载
        new visualModule().$mount('#' + config.id);
	};
	return AvgOnlineHour;
});