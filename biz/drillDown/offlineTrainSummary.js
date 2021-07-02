define(["Dialog", "Grid", 'Template','VisualDrillDownDir/api'], function (Dialog, Grid, Template,Api) {

    var init = function () {
        var dialog = new Dialog({
            id: "offline_train_dialog",
            title: "脱产培训概况",
            size: 'lg',
            height:'620px',
            url: getStaticPath() + "/applications/academy/visual/biz/drillDown/views/offlineTrainSummary.html",
            afterLoad: function () {
                getData();

            }
        });
    };

    function getData() {
        $.ajax({
            url: Api.offlineTrainSummary,
            data: {
                academy: 'ZJCE_SX'
            },
            success: function (result) {
                var htmlStr = Template("T_OfflineTrainSummary", {data:result});
                $("#offlineTrainSummary").empty().append(htmlStr);
                $.each(result, function (i, row) {
                    initGrid(row.year, row.classes);
                });
            }
        });
    }

    function initGrid(year, data) {
        var config = {
            id: "grid_" + year,
            loading: true,
            pagination:false,
            layout: [
                {
                    name: '名称',
                    field: 'name'
                },
                {
                    name: '实际开班数(个)',
                    field: 'classCount',
                    align: 'left'
                },
                {
                    name: '省管干部数(人次)',
                    field: 'provinceStudCount'
                },
                {
                    name: '市管干部数(人次)',
                    field: 'cityStudCount'
                },
                {
                    name: '科级干部数(人次)',
                    field: 'sectionStudCount'
                }
            ],
            toolbar: [],
            data: data
        };
        Grid(config);
    }

    return {init: init};
});
