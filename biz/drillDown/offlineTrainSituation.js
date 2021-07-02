define(["VisualDrillDownDir/indexTemplate","VisualDrillDownDir/api"], function (IndexTemplate,Api) {
    var showRound_1 = function () {
        IndexTemplate.showDialog({
            title: "脱产培训情况-培训总人次",
            afterLoad: function () {
                IndexTemplate.getRoundData({
                    url: Api.offlineTrainStudCount,
                    data: {academy: 'ZJCE_SX'},
                    format: function (result) {
                        var data = [];
                        $.each(result, function (i, obj) {
                            data.push({value: obj.value, name: obj.year + "年脱产培训人次"});
                        });
                        return data;
                    }
                });
            }
        });
    };

    var showRound_2 = function () {
        IndexTemplate.showDialog({
            title: "脱产培训情况-主体班次数",
            afterLoad: function () {
                IndexTemplate.getRoundData({
                    url: Api.offlineTrainMainClassCount,
                    data: {academy: 'ZJCE_SX'},
                    format: function (result) {
                        var data = [];
                        $.each(result, function (i, obj) {
                            data.push({value: obj.value, name: obj.year + "年主体班次数"});
                        });
                        return data;
                    }
                });
            }
        });
    };

    var showRound_3 = function () {
        IndexTemplate.showDialog({
            title: "脱产培训情况-开设班级数",
            afterLoad: function () {
                IndexTemplate.getRoundData({
                    url: Api.offlineTrainClassCount,
                    data: {academy: 'ZJCE_SX'},
                    format: function (result) {
                        var data = [];
                        $.each(result, function (i, obj) {
                            data.push({value: obj.value, name: obj.year + "年开设班级数"});
                        });
                        return data;
                    }
                });
            }
        });
    };

    var showRound_4 = function () {
        IndexTemplate.showDialog({
            title: "脱产培训情况-干部调训率",
            afterLoad: function () {
                IndexTemplate.getRoundData({
                    url: Api.offlineDivisionStudAFD,
                    data: {academy: 'ZJCE_SX'},
                    format: function (result) {
                        var data = [];
                        $.each(result, function (i, obj) {
                            data.push({value: obj.value, name: obj.year + "年实际调训县处级干部人数"});
                            data.push({value: obj.realTotal, name: obj.year + "年县处级干部总人数"});
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
        showRound_4: showRound_4
    };
});
