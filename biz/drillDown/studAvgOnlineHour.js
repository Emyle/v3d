define(["VisualDrillDownDir/indexTemplate", 'VisualDrillDownDir/api'], function (IndexTemplate, Api) {
    var init = function () {
        IndexTemplate.showDialog({
            title: "干部人均网络学时",
            afterLoad: function () {
                IndexTemplate.getRoundData({
                    url: Api.studAvgOnlineHour,
                    data: {academy: 'ZJCE_SX'},
                    format: function (result) {
                        var data = [];
                        $.each(result, function (i, obj) {
                            data.push({value: parseInt(obj.divisionAvgHours), name: obj.year + "年县处级干部人均网络学时"});
                            data.push({value: parseInt(obj.sectionAvgHours), name: obj.year + "年乡科级干部人均网络学时"});
                            data.push({value: obj.divisionStudCount, name: obj.year + "年县处级干部人数"});
                            data.push({value: obj.sectionStudCount, name: obj.year + "年乡科级干部人数"});
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
