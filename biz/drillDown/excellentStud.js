define([
    'Grid', 'Dialog', 'Tool', 'SearchBlock', 'AcademyDateSelector','VisualDrillDownDir/api'
], function (Grid, Dialog, Tool, SearchBlock, DateSelector, Api) {

    var gridId = 'excellentStudGrid';
    var searchBlockId = 'searchBlock',
        searchFormId = 'searchForm',
        searchBtnId = 'searchBtn',
        resetBtnId = 'resetBtn';
    var init = function () {
        showDialog();

    };

    function showDialog() {
        var dialogConfig = {
            url: getStaticPath() + '/applications/academy/visual/biz/drillDown/views/excellentStud.html',
            title: '优秀学员列表',
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
            index: true,
            loading: true,
            pagination: true,
            layout: [
                {
                    name: '姓名',
                    field: 'name',
                    width: '8%'
                },
                {
                    name: '参加班级',
                    field: 'className',
                    width: '28%'
                },
                {
                    name: '性别',
                    field: 'gender',
                    width: '7%'
                },
                {
                    name: '年龄',
                    field: 'age',
                    width: '7%'
                },
                {
                    name: '工作单位及职位',
                    field: 'jobTitle',
                    width: '28%'
                },
                {
                    name: '职级',
                    field: 'positionLevel',
                    width: '7%'
                },
                {
                    name: 'TPS考核成绩',
                    field: 'tps',
                    width: '15%',
                }
            ],
            queryParam: $.extend(Tool.serialize(searchFormId), {
                academy: 'ZJCE_SX',
            }),
            data: {
                type: 'url',
                value: Api.excellentStud
            }
        };
    }

    return {
        init: init
    };
});
