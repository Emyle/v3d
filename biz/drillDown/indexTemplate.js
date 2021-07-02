define(["Dialog", 'Template','css!VisualDir/css/drillDown/views/indexTemplate.css'], function (Dialog, Template) {

    var default_config = {
        id: "index_dialog",
        size: 'lg',
        height: '450px',
        url: getStaticPath() + "/applications/academy/visual/biz/drillDown/views/indexTemplate.html"
    };

    function showDialog(_config) {
        var config = $.extend({}, default_config, _config);
        var dialog = new Dialog(config);
        return dialog;
    }

    function getRoundData(obj) {
        $.ajax({
            url: obj.url,
            data: obj.data,
            success: function (result) {
                var data = [];
                if (typeof obj.format == "function") {
                    data = obj.format(result);
                }
                var htmlStr = Template("T_Index", {data: data});
                $("#indexTemplate").empty().append(htmlStr);
            }
        });
    }

    return {
        showDialog: showDialog,
        getRoundData: getRoundData
    };
});
