define(["Dialog","Grid"], function (Dialog,Grid) {

    var gridId = "indexDescGrid";

    var data = [
        {name: "理论和党性教育进度",desc: "理论和党性教育进度是本市县处级干部年度理论和党性教育的目标完成度，是该类干部实际参训人数与目标施训人数（180）的比值。"},
        {name: "专业化能力培训进度", desc: "专业化能力培训进度是区县（市）党政班子成员年度专业化能力培训的目标完成度，是该类干部实际参训人数与目标施训人数（66）的比值。"},
        {name: "脱产培训学时进度", desc: "脱产培训学时进度是评估本市县处级干部整体的脱产学时达标程度，是该类干部年度人均脱产学时与年均脱产学时标准（110） 的比值。"},
        {name: "各单位调训进度", desc: "各单位调训进度是完成干部调训计划目标的单位数量与全部单位数量的比值。"},
        {name: "县处级干部培训预警", desc: "县处级干部培训预警是针对区县（市）党政班子成员的主体班次培训学时不足和专业能力培训学时不足的预警。"}
    ];

    var init = function () {
        var dialog = new Dialog({
            id: "indexDesc_dialog",
            title: "指标说明",
            size: 'lg',
            url: getStaticPath() + "/applications/academy/visual/biz/drillDown/views/indexDesc.html",
            afterLoad: function () {
                initGrid();
            }
        });
    };

    function initGrid() {
        var config = {
            id: gridId,
            loading: true,
            pagination: false,
            textEllipsis:false,
            layout: [
                {
                    name: '指标名称',
                    field: 'name',
                    width: '20%'
                },
                {
                    name: '指标说明',
                    field: 'desc',
                    width: '80%'
                }
            ],
            toolbar: [],
            data: data
        };
        Grid(config);
    }

    return {init: init};
});
