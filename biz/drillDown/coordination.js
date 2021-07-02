define(["Dialog"], function (Dialog) {

    var init = function () {
        var dialog = new Dialog({
            id: "coordination_dialog",
            title: "多跨协同",
            size: 'lg',
            url: getStaticPath() + "/applications/academy/visual/biz/drillDown/views/coordination.html",
            afterLoad: function () {

            }
        });
    };

    return {init: init};
});
