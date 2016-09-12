Mock.mock('/homepage/init', {
    'name'	   : '@name',
    'age|1-100': 100,
    'color'	   : '[@color]',
	  "prizes|5": [
                {
                    "id | 1-100":100,
                    "type":"论文",
                    "title": "@ctitle",
                    "prizeDate": "@date",
                    "graph": "@cparagraph",
                    "img":Mock.Random.dataImage('60x60', '论文')
                }
            ]
});
