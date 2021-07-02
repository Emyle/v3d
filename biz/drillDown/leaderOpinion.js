define([
    'Grid', 'Dialog', 'Tool', 'SearchBlock', 'AcademyDateSelector', 'VisualDrillDownDir/api'
], function (Grid, Dialog, Tool, SearchBlock, DateSelector, Api) {

    var gridId = 'leaderOpinionGrid';
    var searchBlockId = 'searchBlock',
        searchFormId = 'searchForm',
        searchBtnId = 'searchBtn',
        resetBtnId = 'resetBtn';

    var init = function () {
        showDialog();
    };

    function showDialog() {
        var dialogConfig = {
            url: getStaticPath() + '/applications/academy/visual/biz/drillDown/views/leaderOpinion.html',
            title: '领导指示列表',
            size: 'lg',
            afterLoad: function () {
                SearchBlock.init(searchBlockId);
                DateSelector.initYearSelector('searchYear');
                bindEvents();
                initGrid();
            }
        };
        Dialog(dialogConfig);

    }

    //事件绑定
    function bindEvents() {
        //查询按钮点击事件
        $('#' + searchBtnId).on('click', initGrid);

        //重置按钮点击事件
        $('#' + resetBtnId).on('click', function () {
            $('#' + searchFormId)[0].reset();
            initGrid();
        });
    }

    function initGrid() {
        var gridConfig = getGridConfig();
        Grid(gridConfig);

    }

    //列表配置项
    function getGridConfig() {
        return {
            id: gridId,
            loading: true,
            pagination: true,
            index: true,
            layout: [
                {
                    name: '年度',
                    field: 'year',
                    width: '10%'
                },
                {
                    name: '领导名称',
                    field: 'name',
                    width: '10%'
                },
                {
                    name: '指示内容',
                    field: 'opinion',
                    width: '30%'
                },
                {
                    name: '指示时间',
                    field: 'time',
                    width: '20%'
                },
                {
                    name: '班级名称',
                    field: 'className',
                    width: '30%'
                },
            ],
            toolbar: [],
            queryParam: $.extend(Tool.serialize(searchFormId), {
                academy: 'ZJCE_SX',
            }),
            data: {
                type: 'url',
                value: Api.leaderOpinion
            }
        };
    }

    return {
        init: init
    };
});
