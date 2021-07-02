define(["VisualDrillDownDir/offlineTrainSummary",
        "VisualDrillDownDir/citySubjectClass",
        'VisualDrillDownDir/keyTrainStudClass',
        'VisualDrillDownDir/popularClassRank',
        'VisualDrillDownDir/orgAvgClassHourRank',
        'VisualDrillDownDir/offlineTrainSituation',
        'VisualDrillDownDir/leaderOpinion',
        'VisualDrillDownDir/excellentStud',
        'VisualDrillDownDir/mainIndex',
        'VisualDrillDownDir/studAvgOnlineHour',
        'VisualDrillDownDir/onlineTrainResource',
        'VisualDrillDownDir/onlineTrainACH',
        'VisualDrillDownDir/theoryTrainDis',
        'VisualDrillDownDir/specialTrainDis',
        'VisualDrillDownDir/coordination',
        'VisualDrillDownDir/indexDesc',
        'css!VisualDir/css/drillDown/views/index.css'],
    function (OfflineTrainSummary, CitySubjectClass,
              KeyTrainStudClass, PopularClassRank, OrgAvgClassHourRank,
              OfflineTrainSituation, LeaderOpinion, ExcellentStud, MainIndex,
              StudAvgOnlineHour, OnlineTrainResource, OnlineTrainACH,
              TheoryTrainDis, SpecialTrainDis, Coordination,IndexDesc) {
        var init = function () {

            $("#visual-page1").on("click", "#module-1", function () {
                //脱产培训情况
                OfflineTrainSummary.init();
            });

            $("#visual-page1").on("click", "#module-2", function () {
                //市委主体班次
                CitySubjectClass.init(false);
            });

            $("#visual-page1").on("click", "#module-3", function () {
                //重点调训干部
                KeyTrainStudClass.init();
            });

            $("#visual-page1").on("click", "#module-12", function () {
                //最受欢迎的课件
                PopularClassRank.init();
            });

            $("#visual-page1").on("click", "#module-13", function () {
                //各单位平均学时榜
                OrgAvgClassHourRank.init();

            });

            $("#visual-page1").on("click", "#visual-portal-entry1", function () {
                //领导指示
                LeaderOpinion.init();
            });

            $("#visual-page1").on("click", "#visual-portal-entry2", function () {
                //重点班次
                CitySubjectClass.init(true);
            });

            $("#visual-page1").on("click", "#visual-portal-entry3", function () {
                //优秀学员
                ExcellentStud.init();
            });

            $("#visual-page1").on("click", "#visual-portal-entry4", function () {
                //多跨协同
                Coordination.init();
            });


            $("#visual-page1").on("click", "#visual-offlineTrainSituation-round1", function () {
                //脱产培训情况-培训总人次
                OfflineTrainSituation.showRound_1();
            });

            $("#visual-page1").on("click", "#visual-offlineTrainSituation-round2", function () {
                //脱产培训情况-主体班次数
                OfflineTrainSituation.showRound_2();
            });

            $("#visual-page1").on("click", "#visual-offlineTrainSituation-round3", function () {
                //脱产培训情况-开设班级数
                OfflineTrainSituation.showRound_3();
            });

            $("#visual-page1").on("click", "#visual-offlineTrainSituation-round4", function () {
                //脱产培训情况-干部调训率
                OfflineTrainSituation.showRound_4();
            });

            $("#visual-page1").on("click", "#module-9", function () {
                //干部人均网络学时
                StudAvgOnlineHour.init();
            });

            $("#visual-page1").on("click", "#internetEduResource-topic", function () {
                //网络培训资源数量-专题
                OnlineTrainResource.topic();
            });

            $("#visual-page1").on("click", "#internetEduResource-courseWare", function () {
                //网络培训资源数量-课件
                OnlineTrainResource.courseWare();
            });

            $("#visual-page1").on("click", "#internetEduResource-onlineClass", function () {
                //网络培训资源数量-班级
                OnlineTrainResource.onlineClass();
            });

            $("#visual-page1").on("click", "#module-11", function () {
                //网络培训考核达标率
                OnlineTrainACH.init();
            });

            $("#visual-page1").on("click", "#visual-mainIndex-round1", function () {
                //重点指标完成情况-理论和党性教育进度
                MainIndex.showRound_1();
            });

            $("#visual-page1").on("click", "#visual-mainIndex-round2", function () {
                //重点指标完成情况-专业化能力培训进度
                MainIndex.showRound_2();
            });

            $("#visual-page1").on("click", "#visual-mainIndex-round3", function () {
                //重点指标完成情况-各单位调训进度
                MainIndex.showRound_3();
            });

            $("#visual-page1").on("click", "#visual-mainIndex-round4", function () {
                //重点指标完成情况-县处级干部培训预警
                MainIndex.showRound_4();
            });

            $("#visual-page1").on("click", "#visual-trainCompletion", function () {
                //重点指标完成情况-脱产培训学时进度
                MainIndex.showTrainCompletion();
            });

            $("#visual-page1").on("click", "#module-5", function () {
                TheoryTrainDis.init();
            });

            $("#visual-page1").on("click", "#module-6", function () {
                SpecialTrainDis.init();
            });

            $("#visual-page1").on("click", "#visual-trainCompletion-index", function () {
                IndexDesc.init();
            });


        };

        return {
            init: init
        };
    });
