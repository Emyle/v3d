define(["Dialog", "Grid",'Tool', 'SearchBlock', 'AcademyDateSelector',"VisualDrillDownDir/api"
], function (Dialog, Grid,Tool, SearchBlock, DateSelector, Api) {

    var gridId = 'citySubjectClassGrid';
    var searchBlockId = 'searchBlock',
        searchFormId = 'searchForm',
        searchBtnId = 'searchBtn',
        resetBtnId = 'resetBtn';

    var isKey;
    var init = function (type) {
        isKey = type;
        var dialog = new Dialog({
            id: "city_subject_dialog",
            title: isKey ? "重点班次列表" : "市委主体班次列表",
            size: 'lg',
            url: getStaticPath() + "/applications/academy/visual/biz/drillDown/views/citySubjectClass.html",
            afterLoad: function () {
                SearchBlock.init(searchBlockId);
                DateSelector.initYearSelector('searchYear');
                bindEvents();
                initGrid();
            }
        });
    };

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
        var config = {
            id: gridId,
            index: true,
            loading: true,
            pagination: true,
            layout: [
                {
                    name: '年度',
                    field: 'year',
                    width: '50px'
                },
                {
                    name: '班级名称',
                    field: 'name',
                    width: '250px'
                },
                {
                    name: '时间',
                    field: 'trainingStartDate',
                    width: '200px',
                    format: function(e){
                        if (e.row.trainingStartDate && e.row.trainingEndDate) {
                            return e.row.trainingStartDate + "至" + e.row.trainingEndDate;
                        } else {
                            return "--";
                        }
                    }
                },
                {
                    name: '班级性质',
                    field: 'classNature',
                    width: '150px',
                    format: function(e){
                        return e.row.classNature || "--";
                    }
                },
                // {
                //     name: '学制',
                //     field: 'classNature',
                //     width: '100px'
                // },
                {
                    name: '人数',
                    field: 'studentCount',
                    width: '50px',
                    format: function(e){
                        return e.row.studentCount || "--";
                    }
                },
                {
                    name: '课表',
                    field: 'schedule',
                    width: '50px',
                    format: function (e) {
                        return e.row.schedule || "--";
                    }
                },
                {
                    name: 'TPS考核',
                    field: 'tPS',
                    width: '100px',
                    format: function (e) {
                        return e.row.tPS || "--";
                    }
                },
                {
                    name: '教学评估',
                    field: 'assess',
                    width: '100px',
                    format: function (e) {
                        return e.row.assess || "--";
                    }
                },
                {
                    name: '成果',
                    field: 'achievement',
                    width: '50px',
                    format: function (e) {
                        return e.row.achievement || "--";
                    }
                },
                {
                    name: '市领导指示',
                    field: 'opinion',
                    width: '100px',
                    format: function (e) {
                        return e.row.opinion || "--";
                    }
                },
                {
                    name: '班级状态',
                    field: 'state',
                    width: '100px',
                    format: function (e) {
                        return e.row.state || "--";
                    }
                }
            ],
            toolbar: [],
            queryParam:$.extend(Tool.serialize(searchFormId),
                {
                    academy: 'ZJCE_SX',
                    isKey:isKey?"Y":"N",
                    classType: "1"
                }),
            data: {
                type: 'url',
                value: Api.class
            }
        };
        Grid(config);
    }

    return {init: init};
});
