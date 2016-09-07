Mock.mock('/homepage/init', {
    'name'	   : '[@name](/user/name)()',
    'age|1-100': 100,
    'color'	   : '[@color](/user/color)',
	  "prizes|1-100": [// 获奖信息
                {
                    "name": "@ctitle", // 获奖名称
                    "prizeDate": "@date", // 获奖时间
                    "prizeLevel": "一等奖" // 获奖等级
                }
            ]
});
