define(["VisualDrillDownDir/indexTemplate","VisualDrillDownDir/api"], function (IndexTemplate,Api) {
    var showRound_1 = function () {
        IndexTemplate.showDialog({
            title: "重点指标完成情况-理论和党性教育进度",
            afterLoad: function () {
                IndexTemplate.getRoundData({
                    url: Api.thoryTrainProcess,
                    data: {academy: 'ZJCE_SX'},
                    format: function (result) {
                        var data = [];
                        $.each(result, function (i, obj) {
                            data.push({value: obj.value, name: obj.year + "年已调训县处级干部总数"});
                            data.push({value: obj.total, name: obj.year + "年县处级干部目标施训人数"});
                        });
                        return data;
                    }
                });
            }
        });
    };

    var showRound_2 = function () {
        IndexTemplate.showDialog({
            title: "重点指标完成情况-各单位调训进度",
            afterLoad: function () {
                IndexTemplate.getRoundData({
                    url: Api.orgTrainProcess,
                    data: {academy: 'ZJCE_SX'},
                    format: function (result) {
                        var data = [];
                        $.each(result, function (i, obj) {
                            obj.value =  obj.value || 0;
                            data.push({value: (obj.total - obj.value < 0 ? 0 : obj.total - obj.value), name: obj.year + "年未完成调训的单位数量"});
                            data.push({value: obj.total, name: obj.year + "年单位总数量"});
                        });
                        return data;
                    }
                });
            }
        });
    };

    var showRound_3 = function () {
        IndexTemplate.showDialog({
            title: "重点指标完成情况-专业化能力培训进度",
            afterLoad: function () {
                IndexTemplate.getRoundData({
                    url: Api.specialTrainProcess,
                    data: {academy: 'ZJCE_SX'},
                    format: function (result) {
                        var data = [];
                        $.each(result, function (i, obj) {
                            data.push({value: obj.value, name: obj.year + "年已调训党政班子成员总数"});
                            data.push({value: obj.total, name: obj.year + "年党政班子成员总数"});
                        });
                        return data;
                    }
                });
            }
        });
    };

    var showRound_4 = function () {
        IndexTemplate.showDialog({
            title: "重点指标完成情况-县处级干部培训预警",
            afterLoad: function () {
                IndexTemplate.getRoundData({
                    url: Api.divisionWarning,
                    data: {academy: 'ZJCE_SX'},
                    format: function (result) {
                        var data = [];
                        $.each(result, function (i, obj) {
                            data.push({value: obj.value, name: obj.name});
                        });
                        return data;
                    }
                });
            }
        });
    };

    var showTrainCompletion = function () {
        IndexTemplate.showDialog({
            title: "重点指标完成情况-脱产培训学时进度",
            afterLoad: function () {
                IndexTemplate.getRoundData({
                    url: Api.trainCompletion,
                    data: {academy: 'ZJCE_SX'},
                    format: function (result) {
                        var data = [];
                        $.each(result, function (i, obj) {
                            data.push({value: obj.standard, name: obj.year + "年县处级干部人均脱产学时"});
                            data.push({value: obj.offlineHours, name: obj.year + "年县处级干部脱产学时总数"});
                            data.push({value: obj.studCount, name: obj.year + "年县处级干部总数"});
                        });
                        return data;
                    }
                });
            }
        });
    };

    return {
        showRound_1: showRound_1,
        showRound_2: showRound_2,
        showRound_3: showRound_3,
        showRound_4: showRound_4,
        showTrainCompletion: showTrainCompletion
    };
});
