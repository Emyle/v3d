define([
    'Grid', 'Dialog', 'Tool', 'SearchBlock', 'AcademyDateSelector', 'VisualDrillDownDir/api'
], function (Grid, Dialog, Tool, SearchBlock, DateSelector, Api) {

    var gridId = 'keyTrainStudClassGrid';
    var searchBlockId = 'searchBlock',
        searchFormId = 'searchForm',
        searchBtnId = 'searchBtn',
        resetBtnId = 'resetBtn';
    var init = function () {
        showDialog();

    };

    function showDialog() {
        var dialogConfig = {
            url: getStaticPath() + '/applications/academy/visual/biz/drillDown/views/keyTrainStudClass.html',
            title: '重点调训干部列表',
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
        var gridConfig = getGridConfig();
        Grid(gridConfig);
    }

    //列表配置项
    function getGridConfig() {
        return {
            id: gridId,
            index: true,
            loading: true,
            pagination: true,
            layout: [
                {
                    name: '姓名',
                    field: 'name',
                    width: '7%'
                },
                {
                    name: '职务',
                    field: 'jobTitle',
                    width: '23%'
                },
                {
                    name: '参加班次',
                    field: 'className',
                    width: '23%'
                },
                {
                    name: '培训时间',
                    field: 'trainingStartDate',
                    width: '20%',
                    format: function (e) {
                        if (e.row.trainingStartDate && e.row.trainingEndDate) {
                            return e.row.trainingStartDate + "至" + e.row.trainingEndDate;
                        } else {
                            return "--";
                        }

                    }
                },
                {
                    name: '成绩',
                    field: 'score',
                    width: '7%',
                    format: function (e) {
                        return e.row.score || "--";
                    }
                }
            ],
            // queryParam: $.extend(Tool.serialize(searchFormId), {
            //     academy: 'ZJCE_SX',
            // }),
            queryParam: {
                academy: 'ZJCE_SX',
            },
            data: {
                type: 'url',
                value: Api.keyTrainStudClass
            }
        };
    }

    return {
        init: init
    };
});
