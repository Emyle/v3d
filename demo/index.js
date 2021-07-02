define([
	'VisualAxios',
	'VisualDir/component/ratioRingEchart/ratioRingEchart',
	'VisualDir/component/barPolar/barPolar',
	'VisualDir/component/proportion/proportion',
	'VisualDir/component/warning/warning',
	'VisualDir/component/roundRectBar/roundRectBar',
	'VisualDir/component/ringProcess/ringProcess',
	'VisualDir/component/progressBar/progressBar',
	'VisualDir/component/table/table',
	'css!VisualDir/css/index.css'
], function (Axios,RatioRingEchart, BarPolar, Proportion, Warning, RoundRectBar, RingProcess, ProgressBar, Table) {
    var init = function () {
    	RatioRingEchart({
    		id: 'test1',
    		value: 35
    	});
    	BarPolar({
    		id: 'test2',
    		text: 3568,
    		data: [
    			{name:'2018', value: 789, color: '#66B5C9'},
    			{name:'2019', value: 789, color: '#066E89'},
    			{name:'2020', value: 569, color: '#F3FD1C'},
    			{name:'2021', value: 189, color: '#F7C779'},
    		]
    	});
    	Proportion({
    		id: 'test3',
    		total: 100,
    		value: 30,
    		text: '30%'
    	});
    	Warning({
    		id: 'test4',
    		value: 300,
    		color: 'green'
    	});
    	RoundRectBar({
    		id: 'test5',
    		data: [
    	        {"name": "上级选调", "code": "1","value": 30},
    	        {"name": "选修班", "code": "2","value": 70},
    	        {"name": "中青班", "code": "3","value": 90},
    	        {"name": "轮训班", "code": "4","value": 10}
    	    ]
    	})
    	RingProcess({
    		id: 'test6',
    		value: 76
    	});
			ProgressBar({
				id: 'test7',
				value: 200,
				titleName: '理论党性班（5）'
			});
			ProgressBar({
				id: 'test8',
				titleName: '县处级干部',
				backgroundColor: '#122b5b',
				value: [{ 
					value : 280, 
					color : '#00ff00'
				}, 
				{ 
					value : 500,
					color : '#ff0000'
				}, 
				{ 
					value : 100,
					color : '#00ffff'
				}]
			});
			ProgressBar({
				id: 'test9',
				titleName: '专题',
				backgroundColor: '#122b5b',
				value: 700,
				contrast: 'off'
			});
			
			Axios.post( getStaticPath() + '/applications/academy/visual/asset/data/citySubjectClass.json' ,  {
	            academy: 'ZJCE_SX',
	        })
	        .then(function (response) {
	            Table({
	            	id: 'test10',
	            	layout: [
	            		{
	            			name:'班次', 
	            			field: 'name', 
	            			width: '30%', 
	            			bodyTextAlign: 'center', 
	            			click: function(item, index){
	            				console.log(item);
	            			}
	            		},
	            		{
	            			name:'时间', 
	            			width: '15%', 
	            			bodyTextAlign: 'center', 
	            			format: function(item, index){
	            				return '0411-0430'
	            			}, 
	            		},
	            		{
	            			name:'人数', 
	            			field: 'studCount', 
	            			width: '10%', 
	            			bodyTextAlign: 'center'
	            		},
	            		{
	            			name:'考核', 
	            			field: 'examine', 
	            			width: '10%', 
	            			bodyTextAlign: 'center'
	            		},
	            		{
	            			name:'评估', 
	            			field: 'assess', 
	            			width: '10%', 
	            			bodyTextAlign: 'center'
	            		},
	            		{
	            			name:'指示', 
	            			field: 'instruct', 
	            			width: '10%', 
	            			bodyTextAlign: 'center'
	            		},
	            		{
	            			name:'状态', 
	            			field: 'state', 
	            			width: '15%', 
	            			bodyTextAlign: 'center'
	            		},
	            	],
	            	data: response.data.model.curPageData,
	            	marquee: false,
								headColor: '#3e5e7b',	// 表头字体颜色
								bodyColor: '#aaddff' // 表体字体颜色
	            });
	        })
	        .catch(function (error) {
	        	console.log(error);
	        });
			
    };

    return function() {
        init();
    }
});
