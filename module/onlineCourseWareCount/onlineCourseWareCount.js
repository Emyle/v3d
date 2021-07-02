/**
 * 模块1
 * @param config
 Demo:
 */
 define([
	'VisualComponentDir/barPolar/barPolar',
  'text!VisualModuleDir/onlineCourseWareCount/onlineCourseWareCount.html'
], function (BarPolar, html) {
    function OnlineCourseWareCount(config) {

        var _config = $.extend({
			id:false,
            title: "默认标题",
            data: []
        }, config);

        this.dom = document.getElementById(_config.id);
        this.$dom = $(this.dom);
        this.render(_config);

        return true;
    }

    //支持通过init方法调用
    OnlineCourseWareCount.init = OnlineCourseWareCount;

    /* 模块渲染 */
    OnlineCourseWareCount.render = function(config){
        var _this = this;
        _this.$dom.append( html );
        BarPolar({
          id: 'onlineCourseWareCount-main',
          text: 3568,
          ringWidth: 5,
          data: [
            {name:'2018', value: 789, color: '#66B5C9'},
            {name:'2019', value: 789, color: '#066E89'},
            {name:'2020', value: 569, color: '#F3FD1C'},
            {name:'2021', value: 189, color: '#F7C779'},
          ]
        });
    }

    return OnlineCourseWareCount;

});
