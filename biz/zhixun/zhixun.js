define([
    'VisualRem',
    "VisualVue",
    'VisualModuleDir/offlineTrainSummary/offlineTrainSummary',
    'VisualModuleDir/citySubjectClass/citySubjectClass',
    'VisualModuleDir/keyTrainStudClass/keyTrainStudClass',
    'VisualModuleDir/theoryTrainDis/theoryTrainDis',
    'VisualModuleDir/offlineTrainSituation/offlineTrainSituation',
    'VisualModuleDir/specialTrainDis/specialTrainDis',
    'VisualModuleDir/portalEntry/portalEntry',
    'VisualModuleDir/mainIndex/mainIndex',
    'VisualModuleDir/studAvgOnlineHour/studAvgOnlineHour',
    'VisualModuleDir/internetEduResource/internetEduResource',
    'VisualModuleDir/onlineTrainACH/onlineTrainACH',
    'VisualModuleDir/popularClassRank/popularClassRank',
    'VisualModuleDir/orgAvgClassHourRank/orgAvgClassHourRank',
    'VisualDrillDownDir/index',
    'VisualComponentDir/timer/timer',
    "css!VisualDir/css/index-rem.css",
    "css!VisualDir/css/zhixun/zhixun-rem.css"
], function (
    rem,
    Vue,
    OfflineTrainSummary,
    CitySubjectClass,
    KeyTrainStudClass,
    TheoryTrainDis,
    OfflineTrainSituation,
    SpecialTrainDis,
    PortalEntry,
    MainIndex,
    StudAvgOnlineHour,
    InternetEduResource,
    OnlineTrainACH,
    PopularClassRank,
    OrgAvgClassHourRank,
    DrillDown,
    Timer
){
    var init = function () {

        document.title='绍兴干部教育智训平台';

        const app = new Vue({
            el: "#visual-page1"
        });

        rem.init();

        Timer.init({
            id: "visual-autoTime"
        });

        var module1 = new OfflineTrainSummary({
            vue: app,
            id: "module-1",
            title: '脱产培训情况',
            titleType: 'scifi',
            contentTitleColor: '#aaddff',
            progressBarBgColor: '#122b5b',
            provinceColor: '#e77c6c',
            cityColor: '#fae61b',
            sectionColor: '#00fefb',
            numberColor: '#000000'
        });

        var module2 = CitySubjectClass.init({
            vue: app,
            id: "module-2",
            title: '市委主体班次',
            titleType: 'scifi',
            headColor: '#3e5e7b',	// 表头字体颜色
            headBgColor: '#none', // 
            bodyColor: '#aaddff', // 表体字体颜色
            headFontSize: '16px'
        });

        var module3 = KeyTrainStudClass.init({
            vue: app,
            id: "module-3",
            title: '重点调训干部',
            titleType: 'scifi',
            headColor: '#3e5e7b',	// 表头字体颜色
            headBgColor: '#none', // 
            bodyColor: '#aaddff', // 表体字体颜色
            headFontSize: '16px'
        });

        var module4 = OfflineTrainSituation.init({
            vue: app,
            id: "module-4",
            title: '2018至今脱产培训情况',
            type: 'scifi',
            titleType: 'scifi',
            titleColor: ''
        });

        var module5 = TheoryTrainDis.init({
            vue: app,
            id: "module-5",
            title: '2018年至今理论党性教育分布',
            titleType: 'scifiClean',
            colors: ['#ff0f4e', '#40c6ff', '#3b80fe', '#a2d337'],
            xTextColor: '#aaddff',
            yTextColor: '#aaddff',
            bgColor: '#122B5B'
        });

        var module6 = SpecialTrainDis.init({
            vue: app,
            id: "module-6",
            title: '2018年至今专业能力与知识培训分布',
            titleType: 'scifiClean',
            colors: ['#ff0f4e', '#40c6ff', '#3b80fe', '#a2d337'],
            xTextColor: '#aaddff',
            yTextColor: '#aaddff',
            bgColor: '#122B5B'
        });

        var module7 = PortalEntry.init({
            vue: app,
            id: "module-7",
            title: '',
            titleType: 'scifi',
            type: 'scifi',
            borderColor: '#1e6faa'
        });

        var module8 = MainIndex.init({
            vue: app,
            id: "module-8",
            title: '重点指标情况',
            titleType: 'scifi',
            indexColor: '#ecc95f',
            desColor: '#aaddff'
        });

        var module9 = StudAvgOnlineHour.init({
            vue: app,
            id: "module-9",
            title: '干部人均网络学时',
            titleType: 'scifi',
            type: 'scifi'
        });

        var module10 = InternetEduResource.init({
            vue: app,
            id: "module-10",
            title: '网络培训资源数量',
            titleType: 'scifi',
            barColor: '#00fefb',
            contrastColor: '#fae61b'
        })

        var module11 = OnlineTrainACH.init({
            vue: app,
            id: "module-11",
            title: '网络培训考核达标率',
            titleType: 'scifi',
            contentTitleColor: '#aaddff',
            barColor: '#00fefb',
            backgroundColor: '#122b5b',
            numberColor: '#000000'
        })

        var module12 = PopularClassRank.init({
            vue: app,
            id: "module-12",
            title: '最受欢迎的课件榜',
            titleType: 'scifi',
            headColor: '#3e5e7b',	// 表头字体颜色
            headBgColor: '#none', // 
            bodyColor: '#aaddff', // 表体字体颜色
            headFontSize: '16px'
        })

        var module13 = OrgAvgClassHourRank.init({
            vue: app,
            id: "module-13",
            title: '各单位平均学时榜',
            titleType: 'scifi',
            headColor: '#3e5e7b',	// 表头字体颜色
            headBgColor: '#none', // 
            bodyColor: '#aaddff', // 表体字体颜色
            headFontSize: '16px'
        })

        DrillDown.init();
    };

    return function () {
        init();
    }
});
