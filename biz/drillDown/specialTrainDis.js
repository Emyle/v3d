define(["VisualDrillDownDir/indexTemplate", 'VisualDrillDownDir/api'], function (IndexTemplate, Api) {
    var init = function () {
        IndexTemplate.showDialog({
            title: "2018年至今专业能力与知识培训分布",
            afterLoad: function () {
                IndexTemplate.getRoundData({
                    url: Api.specialTrainDis,
                    data: {academy: 'ZJCE_SX'},
                    format: function (result) {
                        var data = [];
                        $.each(result, function (i, obj) {
                            data.push({
                                value: obj.value, 
                                name: obj.name + (obj.name.substr(obj.name.length-1,1) == "班" ? "":"班") + "累计班次数"
                            });
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
