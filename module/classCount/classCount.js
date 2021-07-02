/**
 * 模块1
 * @param config
 Demo:
 */
define([
    'VisualEcharts',
    'text!VisualModuleDir/classCount/classCount.html'
], function (Echarts, html) {
    function ClassCount(config) {

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
    ClassCount.init = ClassCount;

    /* 模块渲染 */
    ClassCount.render = function(config){
        var _this = this;
        _this.$dom.append( html );
        // 基于准备好的dom，初始化echarts实例
        var myChart = Echarts.init(document.getElementById('classCount-main'));

        // 指定图表的配置项和数据
        var option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['主体班', '专题班', '轮训班'],
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: '直接访问',
                    type: 'bar',
                    barWidth: '60%',
                    data: [10, 52, 200]
                }
            ]
        };
 
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
    }

    return ClassCount;

});
