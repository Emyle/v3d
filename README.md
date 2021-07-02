# 一。工程结构

### 核心目录

biz：大屏核心业务

module：大屏业务模块

component：组件库目录

### 主要目录

asset：资源目录，包括但不限于data、fonts、images等；

scss：sass代码存放目录

css：编译后css存放目录，供开发时，编译后调试查看。

demo：demo目录

*dist：生产发布代码，预留

lib: 共用的第三方库目录

入口文件

package.json：安装配置文件，主要用于sass编译及未来打包，服务等业务



# 二。命名规范

require规范

module依赖的组件，define后的对象统一大写， module依赖的html模板，统一为html



component规范

component.html 最外层统一加class ( visual + '-' + 组件名 )

component.scss 最外层统一加class ( visual +  '-' + 组件名 )  内层常见词语加前缀（visual)



module规范

module.html 最外层统一加class ( visual + '-' + 组件名 )

module.scss 最外层统一加class ( visual +  '-' + 组件名 )  内层常见词语加前缀（visual)

弹框统一为modulePop.html 



module名称

| 模块名称                   | 模块名称                           | 备注 |
| -------------------------- | ---------------------------------- | ---- |
| theoryTrainAFD             | 党政班子理论党性教育调训率         |      |
| specialTrainAFD            | 党政班子专业培训调训率             |      |
| avgOfflineHour             | 党政班子人均脱产学时               |      |
| classACH                   | 当年班次达标率                     |      |
| studAFD                    | 领导干部调训率                     |      |
| classCount                 | 当年培训开班次数                   |      |
| groupWarningData           | 党政班子预警                       |      |
| divisionWarningData        | 处级干部预警                       |      |
| onlineCourseWareCount      | 网络培训课件数                     |      |
| onlineTopicCount           | 网络培训专题数                     |      |
| divisionStudAFD            | 县处级干部脱产培训调训率           |      |
| divisionStudAvgOfflineHour | 县处级干部人均脱产学时             |      |
| youngStudOfflineSummary    | 当年年轻干部脱产培训概况           |      |
| superiorClassSummary       | 当年上级调训班培训情况             |      |
| netAcademy                 | 分院数据                           |      |
| avgOnlineHour              | 各级干部人均网络学时               |      |
| topicClassesSummary        | 当年网上专题研讨班概况             |      |
| onlineACH                  | 当年干部网络培训考核各级干部达标率 |      |
| onlineHourRank             | 当年网络培训学时排行榜             |      |
| offlineTrainSummary             | 脱产培训概况             |      |
| citySubjectClass             | 市委主体班次             |      |
| keyTrainStud             | 重点调训干部             |      |
| offlineTrainSituation             | 脱产培训情况             |      |
| theoryTrainDis             | 理论党性教育分布             |      |
| specialTrainDis             | 专业能力与知识培训分布             |      |
| keyIndexSituation             | 重点指标完成情况             |      |
| studAvgOnlineHour             | 干部人均网络学时            |      |
| onlineTrainSource             | 网络培训资源数量             |      |
| onlineTrainACH.json             | 网络培训考核达标率             |      |
| popularClassRank             | 最受欢迎的课件榜             |      |
| orgAvgClassHourRank             | 各单位平均学时榜             |      |

service规范 

服务名 = 返回类型 + 模块名

# edited by renkaiguang@2021/4/21

