define([
    'Grid', 'Dialog', 'Tool', 'SearchBlock', 'AcademyDateSelector', 'VisualDrillDownDir/api'
], function (Grid, Dialog, Tool, SearchBlock, DateSelector, Api) {

    var gridId = 'orgAvgClassHourRankGrid';
    var searchBlockId = 'searchBlock',
        searchFormId = 'searchForm',
        searchBtnId = 'searchBtn',
        resetBtnId = 'resetBtn';

    var init = function () {
        showDialog();

    };

    function showDialog() {
        var dialogConfig = {
            url: getStaticPath() + '/applications/academy/visual/biz/drillDown/views/orgAvgClassHourRank.html',
            title: '各单位平均学时榜',
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
                    name: '单位名称',
                    field: 'name',
                    width: '30%'
                },
                {
                    name: '干部人数（处级/科级）',
                    field: 'divisionStudCount',
                    width: '30%',
                    format: function(e){
                        return e.row.divisionStudCount+'/'+e.row.sectionStudCount
                    }
                },
                {
                    name: '干部人均网络学时（处级/科级）',
                    field: 'divisionAvgHours',
                    width: '30%',
                    format: function(e){
                        return e.row.divisionAvgHours+'/'+e.row.sectionAvgHours
                    }
                }
            ],
            queryParam: $.extend(Tool.serialize(searchFormId), {
                academy: 'ZJCE_SX',
            }),
            data: {
                type: 'url',
                value: Api.pageOrgAvgClassHourRank
            }
        };
    }

    return {
        init: init
    };
});
