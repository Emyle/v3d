/**
 * API接口
 * @param config
 Demo:
 */
 define([], function () {
  var basePath = 'ebz/academy/statistics/mgrPlatform/'
  var staticPath =  getStaticPath();
  return {
    theoryTrainAFD:basePath + 'listTheoryTrainAFD',        // 党政班子理论党性教育调训率
    specialTrainAFD:basePath + 'listSpecialTrainAFD',                 // 党政班子专业培训调训率
    avgOfflineHour: basePath + 'listAvgOfflineHour',           // 党政班子人均脱产学时
    classACH:basePath + 'getClassACH',                         // 当年班次达标率
    studAFD: basePath + 'getStudAFD',                            // 领导干部调训率
    classCount: basePath + 'listClassCount',                   // 当年培训开班次数
    groupWarningData:basePath + 'getGroupWarningData',                   // 党政班子预警
    divisionWarningData:basePath + 'getDivisionWarningData',         // 处级干部预警
    onlineCourseWareCount:basePath + 'listOnlineCourseWareCount',          // 网络培训课件数
    onlineTopicCount:basePath + 'listOnlineTopicCount',         // 网络培训专题数
    divisionStudAFD:basePath + 'listDivisionStudAFD',                  // 县处级干部脱产培训调训率
    divisionStudAvgOfflineHour:basePath + 'listDivisionStudAvgOfflineHour',      // 县处级干部人均脱产学时
    youngStudOfflineSummary:basePath + 'getYoungTrainingSummary',        // 当年年轻干部脱产培训概况
    superiorClassSummary:basePath + 'getSuperiorClassSummary',             // 当年上级调训班培训情况
    netAcademy: getStaticPath() + '/applications/academy/visual/asset/data/netAcademy.json',	// 网院
    avgOnlineHour:staticPath + '/applications/academy/visual/asset/data/avgOnlineHour.json', //各级干部人均网络学时
    topicClassesSummary:basePath + 'getTopicClassesSummary', //当年网上专题研讨班概况  getStaticPath() + '/applications/academy/visual/asset/data/topicClassesSummary.json'
    onlineACH: basePath + 'getOnlineACH', //当年干部网络培训考核各级干部达标率 basePath + 'getOnlineACH'
    onlineHourRank: basePath + 'getOnlineHourRank', //当年网络培训学时排行榜  staticPath + '/applications/academy/visual/asset/data/studOnlineHourRank.json',
    offlineTrainSummary: basePath + 'listOfflineTrainSummary', //脱产培训概况 staticPath + '/applications/academy/visual/asset/data/offlineTrainSummary.json'
    mainClass: basePath + 'listMainClass', //市委主体班次
    keyTrainStudClass: basePath + 'pageKeyTrainStudClass', //重点调训干部
    //
    offlineTrainStudCount: basePath + 'listOfflineTrainStudCount', //脱产培训情况-培训总人次 staticPath + '/applications/academy/visual/asset/data/offlineTrainStudCount.json'
    offlineTrainMainClassCount: basePath + 'listOfflineTrainMainClassCount', //脱产培训情况-主体班次数 staticPath + '/applications/academy/visual/asset/data/offlineTrainMainClassCount.json'
    offlineTrainClassCount: basePath + 'listOfflineTrainClassCount', //脱产培训情况-开设班级数 staticPath + '/applications/academy/visual/asset/data/offlineTrainClassCount.json'
    offlineDivisionStudAFD: basePath + 'listOfflineDivisionStudAFD', //脱产培训情况-干部调训率 staticPath + '/applications/academy/visual/asset/data/offlineDivisionStudAFD.json'
    theoryTrainDis: basePath + 'listTheoryTrainDis', //理论党性教育分布
    specialTrainDis: basePath + 'listSpecialTrainDis', //专业能力与知识培训分布
    thoryTrainProcess: basePath + 'listThoryTrainProcess', //重点指标完成情况-理论和党性教育进度
    specialTrainProcess: basePath + 'listSpecialTrainProcess', //重点指标完成情况-专业能力培训进度
    trainCompletion: basePath + 'listTrainCompletion', //重点指标完成情况-调训任务完成率
    divisionWarning: basePath + 'listDivisionWarning', //重点指标完成情况-县处级干部培训预警
    orgTrainProcess: basePath + 'listOrgTrainProcess', //重点指标完成情况-各单位调训进度
    studAvgOnlineHour: basePath + 'listStudAvgOnlineHour',//干部人均网络学时
    topicSourceCount: basePath + 'listTopicSourceCount', //网络培训资源数量-专题
    courseWareSourceCount: basePath + 'listCourseWareSourceCount', //网络培训资源数量-课件
    onlineClassSourceCount: basePath + 'listOnlineClassSourceCount', //网络培训资源数量-班级
    onlineTrainACH: basePath + 'listOnlineTrainACH',//网络培训考核达标率 staticPath + '/applications/academy/visual/asset/data/onlineTrainACH.json',
    popularClassRank: basePath + 'listPopularClassRank', //最受欢迎的课件榜
    orgAvgClassHourRank: basePath + 'listOrgAvgClassHourRank', //各单位平均学时榜
  };
});

