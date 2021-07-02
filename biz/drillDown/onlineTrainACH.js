define(["VisualDrillDownDir/indexTemplate", 'VisualDrillDownDir/api'], function (IndexTemplate, Api) {
    var init = function () {
        IndexTemplate.showDialog({
            title: "网络培训考核达标率",
            afterLoad: function () {
                IndexTemplate.getRoundData({
                    url: Api.onlineTrainACH,
                    data: {academy: 'ZJCE_SX'},
                    format: function (result) {
                        var data = [];
                        $.each(result, function (i, obj) {
                            data.push({value: obj.divisionPass, name: obj.year + "年县处级干部考核达标人数"});
                            data.push({value: obj.sectionPass, name: obj.year + "年乡科级干部考核达标人数"});
                            data.push({value: obj.divisionTotal, name: obj.year + "年县处级干部人数"});
                            data.push({value: obj.sectionTotal, name: obj.year + "年乡科级干部人数"});
                        });
                        return data;
                    }
                });
            }
        });
    };

    return {
        init: init
    };
});
