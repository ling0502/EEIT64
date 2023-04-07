

let json = `
{
    "fields": [
        {
            "id": "ID",
            "type": "text",
            "info": {
                "label": "產品編號"
            }
        },{
            "id": "category",
            "type": "text",
            "num": "5",
            "info": {
                "label": "產品類別"
            }
        },{
            "id": "name",
            "type": "text",
            "info": {
                "label": "產品名稱"
            }
        },{
            "id": "p_img",
            "type": "url",
            "info": {
                "label": "產品圖片"
            }
        },{
            "id": "beHot",
            "type": "boolean",
            "info": {
                "label": "可做熱飲"
            }
        },{
            "id": "beCold",
            "type": "boolean",
            "info": {
                "label": "可做冷飲"
            }
        },{
            "id": "price",
            "type": "number",
            "info": {
                "label": "價格"
            }
        },{
            "id": "qty",
            "type": "number",
            "info": {
                "label": "訂購數量"
            }
        }
    ],
    "records": [
        {
            "ID": "001",
            "category": "純茶類",
            "name": "阿薩姆紅茶",
            "p_img": "./assets/img/p01.png",
            "beHot": "Y",
            "beCold": "Y",
            "price": 30,
            "qty": 0
        },
        {
            "ID": "002",
            "category": "純茶類",
            "name": "茉莉綠茶",
            "p_img": "./assets/img/p01.png",
            "beHot": "Y",
            "beCold": "Y",
            "price": 30,
            "qty": 0
        },
        {
            "ID": "003",
            "category": "純茶類",
            "name": "凍頂烏龍",
            "p_img": "./assets/img/p01.png",
            "beHot": "Y",
            "beCold": "Y",
            "price": 30,
            "qty": 0
        },
        {
            "ID": "004",
            "category": "純茶類",
            "name": "黃金大麥",
            "p_img": "./assets/img/p01.png",
            "beHot": "Y",
            "beCold": "Y",
            "price": 30,
            "qty": 0
        },
        {
            "ID": "005",
            "category": "奶類",
            "name": "熟成奶茶",
            "p_img": "./assets/img/p02.png",
            "beHot": "Y",
            "beCold": "Y",
            "price": 40,
            "qty": 0
        },
        {
            "ID": "006",
            "category": "奶類",
            "name": "烏龍奶茶",
            "p_img": "./assets/img/p02.png",
            "beHot": "Y",
            "beCold": "Y",
            "price": 40,
            "qty": 0
        },
        {
            "ID": "007",
            "category": "奶類",
            "name": "珍珠奶茶",
            "p_img": "./assets/img/p02.png",
            "beHot": "Y",
            "beCold": "Y",
            "price": 45,
            "qty": 0
        },
        {
            "ID": "008",
            "category": "奶類",
            "name": "黑糖奶茶",
            "p_img": "./assets/img/p02.png",
            "beHot": "Y",
            "beCold": "Y",
            "price": 40,
            "qty": 0
        },
        {
            "ID": "009",
            "category": "奶類",
            "name": "布丁奶茶",
            "p_img": "./assets/img/p02.png",
            "beHot": "Y",
            "beCold": "Y",
            "price": 50,
            "qty": 0
        },
        {
            "ID": "010",
            "category": "奶類",
            "name": "阿華田",
            "p_img": "./assets/img/p02.png",
            "beHot": "Y",
            "beCold": "Y",
            "price": 45,
            "qty": 0
        },
        {
            "ID": "011",
            "category": "奶類",
            "name": "冰淇淋奶茶",
            "p_img": "./assets/img/p02.png",
            "beHot": "N",
            "beCold": "Y",
            "price": 50,
            "qty": 0
        },
        {
            "ID": "012",
            "category": "鮮奶類",
            "name": "紅茶鮮奶茶",
            "p_img": "./assets/img/p03.png",
            "beHot": "Y",
            "beCold": "Y",
            "price": 55,
            "qty": 0
        },
        {
            "ID": "013",
            "category": "鮮奶類",
            "name": "蕎麥鮮奶茶",
            "p_img": "./assets/img/p03.png",
            "beHot": "Y",
            "beCold": "Y",
            "price": 55,
            "qty": 0
        },
        {
            "ID": "014",
            "category": "鮮奶類",
            "name": "仙草凍鮮奶茶",
            "p_img": "./assets/img/p03.png",
            "beHot": "Y",
            "beCold": "Y",
            "price": 60,
            "qty": 0
        },
        {
            "ID": "015",
            "category": "鮮奶類",
            "name": "小芋圓鮮奶茶",
            "p_img": "./assets/img/p03.png",
            "beHot": "Y",
            "beCold": "Y",
            "price": 60,
            "qty": 0
        },
        {
            "ID": "016",
            "category": "鮮奶類",
            "name": "冬瓜鮮奶",
            "p_img": "./assets/img/p03.png",
            "beHot": "Y",
            "beCold": "Y",
            "price": 55,
            "qty": 0
        },
        {
            "ID": "017",
            "category": "鮮奶類",
            "name": "黑糖波霸鮮奶",
            "p_img": "./assets/img/p03.png",
            "beHot": "Y",
            "beCold": "Y",
            "price": 65,
            "qty": 0
        },
        {
            "ID": "018",
            "category": "鮮奶類",
            "name": "可可鮮奶",
            "p_img": "./assets/img/p03.png",
            "beHot": "Y",
            "beCold": "Y",
            "price": 65,
            "qty": 0
        },
        {
            "ID": "019",
            "category": "鮮奶類",
            "name": "抹茶鮮奶",
            "p_img": "./assets/img/p03.png",
            "beHot": "Y",
            "beCold": "Y",
            "price": 65,
            "qty": 0
        },
        {
            "ID": "020",
            "category": "果茶類",
            "name": "冬瓜檸檬",
            "p_img": "./assets/img/p04.png",
            "beHot": "N",
            "beCold": "Y",
            "price": 40,
            "qty": 0
        },
        {
            "ID": "021",
            "category": "果茶類",
            "name": "翡翠檸檬",
            "p_img": "./assets/img/p04.png",
            "beHot": "N",
            "beCold": "Y",
            "price": 40,
            "qty": 0
        },
        {
            "ID": "022",
            "category": "果茶類",
            "name": "百香果綠茶",
            "p_img": "./assets/img/p04.png",
            "beHot": "N",
            "beCold": "Y",
            "price": 40,
            "qty": 0
        },
        {
            "ID": "023",
            "category": "果茶類",
            "name": "柳橙綠茶",
            "p_img": "./assets/img/p04.png",
            "beHot": "N",
            "beCold": "Y",
            "price": 55,
            "qty": 0
        },
        {
            "ID": "024",
            "category": "果茶類",
            "name": "葡萄柚蜜茶",
            "p_img": "./assets/img/p04.png",
            "beHot": "N",
            "beCold": "Y",
            "price": 55,
            "qty": 0
        },
        {
            "ID": "025",
            "category": "果茶類",
            "name": "甘蔗青茶",
            "p_img": "./assets/img/p04.png",
            "beHot": "N",
            "beCold": "Y",
            "price": 45,
            "qty": 0
        },
        {
            "ID": "026",
            "category": "點心類",
            "name": "奶油紅豆餅",
            "p_img": "./assets/img/p05.png",
            "beHot": "N",
            "beCold": "N",
            "price": 25,
            "qty": 0
        },
        {
            "ID": "027",
            "category": "點心類",
            "name": "豆沙紅豆餅",
            "p_img": "./assets/img/p05.png",
            "beHot": "N",
            "beCold": "N",
            "price": 25,
            "qty": 0
        },
        {
            "ID": "028",
            "category": "點心類",
            "name": "芋頭紅豆餅",
            "p_img": "./assets/img/p05.png",
            "beHot": "N",
            "beCold": "N",
            "price": 25,
            "qty": 0
        },
        {
            "ID": "029",
            "category": "點心類",
            "name": "玉米紅豆餅",
            "p_img": "./assets/img/p05.png",
            "beHot": "N",
            "beCold": "N",
            "price": 25,
            "qty": 0
        },
        {
            "ID": "030",
            "category": "點心類",
            "name": "起司紅豆餅",
            "p_img": "./assets/img/p05.png",
            "beHot": "N",
            "beCold": "N",
            "price": 25,
            "qty": 0
        }
    ]
}
`
