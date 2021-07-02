/**
 * API接口
 * @param config
 Demo:
 */
define([], function () {
    var basePath = 'ebz/academy/statistics/mgrPlatform/';
    var staticPath = getStaticPath();
    var jsonPath = staticPath + "/applications/academy/visual/asset/data/";
    return {
        //下钻API
        class: basePath + 'pageClass', //下钻-市委主体班次、重点班次
        leaderOpinion: basePath + 'pageLeaderOpinion', //下钻-领导指示
        excellentStud: basePath + 'pageExcellentStud', //下钻-优秀学员
        pageOrgAvgClassHourRank: basePath + 'pageOrgAvgClassHourRank', //下钻-各单位平均学时榜
        offlineTrainSummary: basePath + 'listOfflineTrainSummary', //脱产培训概况 staticPath + '/applications/academy/visual/asset/data/offlineTrainSummary.json'
        keyTrainStudClass: basePath + 'pageKeyTrainStudClass', //重点调训干部
        offlineTrainStudCount: basePath + 'listOfflineTrainStudCount', //脱产培训情况-培训总人次 staticPath + '/applications/academy/visual/asset/data/offlineTrainStudCount.json'
        offlineTrainMainClassCount: basePath + 'listOfflineTrainMainClassCount', //脱产培训情况-主体班次数 staticPath + '/applications/academy/visual/asset/data/offlineTrainMainClassCount.json'
        offlineTrainClassCount: basePath + 'listOfflineTrainClassCount', //脱产培训情况-开设班级数 staticPath + '/applications/academy/visual/asset/data/offlineTrainClassCount.json'
        offlineDivisionStudAFD: basePath + 'listOfflineDivisionStudAFD', //脱产培训情况-干部调训率 staticPath + '/applications/academy/visual/asset/data/offlineDivisionStudAFD.json'
        theoryTrainDis: basePath + 'listTheoryTrainDis', //理论党性教育分布
        specialTrainDis: basePath + 'listSpecialTrainDis', //专业能力与知识培训分布
        thoryTrainProcess: basePath + 'listThoryTrainProcess',//重点指标完成情况-理论和党性教育进度
        specialTrainProcess: basePath + 'listSpecialTrainProcess',//重点指标完成情况-专业能力培训进度
        trainCompletion: basePath + 'listTrainCompletion',//重点指标完成情况-脱产培训学时进度
        divisionWarning: basePath + 'listDivisionWarning',//重点指标完成情况-县处级干部培训预警
        orgTrainProcess: basePath + 'listOrgTrainProcess',//重点指标完成情况-各单位调训进度
        studAvgOnlineHour: basePath + 'listStudAvgOnlineHour',//干部人均网络学时
        topicSourceCount: basePath + 'listTopicSourceCount',//网络培训资源数量-专题
        courseWareSourceCount: basePath + 'listCourseWareSourceCount',//网络培训资源数量-课件
        onlineClassSourceCount: basePath + 'listOnlineClassSourceCount',//网络培训资源数量-班级
        onlineTrainACH: basePath + 'listOnlineTrainACH',//网络培训考核达标率
        popularClassRank: basePath + 'listPopularClassRank',//最受欢迎的课件榜
        orgAvgClassHourRank: jsonPath + 'orgAvgClassHourRank.json.json',//各单位平均学时榜
    };
});

