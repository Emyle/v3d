define(["VisualDrillDownDir/indexTemplate", 'VisualDrillDownDir/api'], function (IndexTemplate, Api) {
    var topic = function () {
        IndexTemplate.showDialog({
            title: "网络培训资源数量-专题",
            afterLoad: function () {
                IndexTemplate.getRoundData({
                    url: Api.topicSourceCount,
                    data: {academy: 'ZJCE_SX'},
                    format: function (result) {
                        var data = [];
                        $.each(result, function (i, obj) {
                            data.push({value: obj.value, name: obj.year + "年专题数量"});
                        });
                        return data;
                    }
                });
            }
        });
    };

    var courseWare = function () {
        IndexTemplate.showDialog({
            title: "网络培训资源数量-课件",
            afterLoad: function () {
                IndexTemplate.getRoundData({
                    url: Api.courseWareSourceCount,
                    data: {academy: 'ZJCE_SX'},
                    format: function (result) {
                        var data = [];
                        $.each(result, function (i, obj) {
                            data.push({value: obj.value, name: obj.year + "年课件数量"});
                        });
                        return data;
                    }
                });
            }
        });
    };

    var onlineClass = function () {
        IndexTemplate.showDialog({
            title: "网络培训资源数量-班级",
            afterLoad: function () {
                IndexTemplate.getRoundData({
                    url: Api.onlineClassSourceCount,
                    data: {academy: 'ZJCE_SX'},
                    format: function (result) {
                        var data = [];
                        $.each(result, function (i, obj) {
                            data.push({value: obj.value, name: obj.year + "年班级数量"});
                        });
                        return data;
                    }
                });
            }
        });
    };

    return {
        topic: topic,
        courseWare: courseWare,
        onlineClass: onlineClass
    };
});
