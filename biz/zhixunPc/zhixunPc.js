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
    "css!VisualDir/css/index-rem.css",
    "css!VisualDir/css/zhixunPc/zhixunPc-rem.css"
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
    DrillDown
){
    var init = function () {

        document.title='绍兴干部教育智训平台';

        const app = new Vue({
            el: "#visual-page1"
        });

        rem.init();

        var module1 = new OfflineTrainSummary({
            vue: app,
            id: "module-1",
            title: '脱产培训情况',
            titleType: 'flat',
            contentTitleColor: '#42526e',
            progressBarBgColor: '#f4f7fd',
            provinceColor: '#0164b8',
            cityColor: '#0c88f6',
            sectionColor: '#1acdff'
        });

        var module2 = CitySubjectClass.init({
            vue: app,
            id: "module-2",
            title: '市委主体班次',
            titleType: 'flat',
            headColor: '#232c3b',	// 表头字体颜色
            headBgColor: '#f4f7fd', // 
            bodyColor: '#42526e', // 表体字体颜色
            bodyRowHeight: '40px',
            headFontSize: '14px'
        });

        var module3 = KeyTrainStudClass.init({
            vue: app,
            id: "module-3",
            title: '重点调训干部',
            titleType: 'flat',
            headColor: '#232c3b',	// 表头字体颜色
            headBgColor: '#f4f7fd', // 
            bodyColor: '#42526e', // 表体字体颜色
            bodyRowHeight: '40px',
            headFontSize: '14px'
        });

        var module4 = OfflineTrainSituation.init({
            vue: app,
            id: "module-4",
            title: '2018至今脱产培训情况',
            titleType: 'flat',
            type: 'flat',
            cicleBgColor: '#f4f7fd' ,
            cicleBgpadding: '10px', 
            cicleBgmargin: '10px', 
            cicleBgborderRadius: '10px',
            circleBgWidth: '20%',
            circleBgHeight: '80%'
        });

        var module5 = TheoryTrainDis.init({
            vue: app,
            id: "module-5",
            title: '2018年至今理论党性教育分布',
            titleType: 'flat',
            colors: ['#0463a6', '#389cf8', '#20c7fc', '#43e9c6'],
            xTextColor: '#7a869a',
            yTextColor: '#7a869a',
            bgColor: '#f4f7fd'
        });

        var module6 = SpecialTrainDis.init({
            vue: app,
            id: "module-6",
            title: '2018年至今专业能力与知识培训分布',
            titleType: 'flat',
            colors: ['#0463a6', '#389cf8', '#20c7fc', '#43e9c6'],
            xTextColor: '#7a869a',
            yTextColor: '#7a869a',
            bgColor: '#f4f7fd'
        });

        var module7 = PortalEntry.init({
            vue: app,
            id: "module-7",
            title: '',
            type: 'default',
            borderColor: 'none'
        });

        var module8 = MainIndex.init({
            vue: app,
            id: "module-8",
            title: '重点指标情况',
            titleType: 'flatClean',
            indexColor: '#3753d2',
            desColor: '#7a869a',
            bgColor: '#dadfe8',
            color: '#3753d2'
        });

        var module9 = StudAvgOnlineHour.init({
            vue: app,
            id: "module-9",
            title: '干部人均网络学时',
            titleType: 'flat',
            type: 'flat'
        });

        var module10 = InternetEduResource.init({
            vue: app,
            id: "module-10",
            title: '网络培训资源数量',
            titleType: 'flat',
            barColor: '#0164b8',
            contrastColor: '#1acdff'
        })

        var module11 = OnlineTrainACH.init({
            vue: app,
            id: "module-11",
            title: '网络培训考核达标率',
            titleType: 'flat',
            contentTitleColor: '#42526e',
            barColor: '#0162af',
            backgroundColor: '#f4f7fd',
            numberColor: '#ffffff'
        })

        var module12 = PopularClassRank.init({
            vue: app,
            id: "module-12",
            title: '最受欢迎的课件榜',
            titleType: 'flat',
            headColor: '#232c3b',	// 表头字体颜色
            headBgColor: '#f4f7fd', // 
            bodyColor: '#42526e', // 表体字体颜色
            bodyRowHeight: '40px',
            headFontSize: '14px'
        })

        var module13 = OrgAvgClassHourRank.init({
            vue: app,
            id: "module-13",
            title: '各单位平均学时榜',
            titleType: 'flat',
            headColor: '#232c3b',	// 表头字体颜色
            headBgColor: '#f4f7fd', // 
            bodyColor: '#42526e', // 表体字体颜色
            bodyRowHeight: '40px',
            headFontSize: '14px'
        })
        
        DrillDown.init();
    };

    return function () {
        init();
    }
});
