define([
    'Grid', 'Dialog', 'Tool', 'SearchBlock', 'AcademyDateSelector','VisualDrillDownDir/api'
], function (Grid, Dialog, Tool, SearchBlock, DateSelector, Api) {

    var gridId = 'popularClassRankGrid';
    var searchBlockId = 'searchBlock',
        searchFormId = 'searchForm',
        searchBtnId = 'searchBtn',
        resetBtnId = 'resetBtn';

    var init = function () {
        showDialog();
    };

    function showDialog() {
        var dialogConfig = {
            url: getStaticPath() + '/applications/academy/visual/biz/drillDown/views/popularClassRank.html',
            title: '最受欢迎的课件榜',
            size: 'lg',
            afterLoad: function () {
                // SearchBlock.init(searchBlockId);
                // DateSelector.initYearSelector('searchYear');
                // bindEvents();
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

        $.ajax({
            url: Api.popularClassRank,
            // data: $.extend(Tool.serialize(searchFormId), {
            //     academy: 'ZJCE_SX',
            // }),
            data: {
                academy: 'ZJCE_SX',
            },
            success: function (result) {
                var gridConfig = getGridConfig(result);
                Grid(gridConfig);
            },

        });
    }

    //列表配置项
    function getGridConfig(data) {
        return {
            id: gridId,
            loading: true,
            pagination: true,
            layout: [
                {
                    name: '排序',
                    field: 'rank',
                    width: '10%'
                },
                {
                    name: '课件名称',
                    field: 'name',
                    width: '80%'
                },
                {
                    name: '点播数量',
                    field: 'hits',
                    width: '10%'
                }
            ],
            toolbar: [],
            data: data
        };
    }

    return {
        init: init
    };
});
