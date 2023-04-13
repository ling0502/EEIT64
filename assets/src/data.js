

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
    "store_branch": [
        {
          "ID": "01",
          "city": "Taoyuan",
          "name": "桃園分店",
          "address": "桃園市中壢區新生路二段421號",
          "longitude": "121.2221964",
          "latitude": "24.9854105461956"
        },
        {
          "ID": "02",
          "city": "Taichung",
          "name": "台中旗艦店",
          "address": "台中市南屯區公益路二段51號18樓",
          "longitude": "120.650933198145",
          "latitude": "24.1507317852343"
        },
        {
          "ID": "03",
          "city": "Tainan",
          "name": "台南分店",
          "address": "台南市東區大學路1號",
          "longitude": "120.215944571163",
          "latitude": "22.9994738198239"
        },
        {
          "ID": "04",
          "city": "Kaohsiung",
          "name": "高雄分店",
          "address": "高雄市中正四路211號8樓之1",
          "longitude": "120.293019542327",
          "latitude": "22.628504484935"
        }
    ],
    "records": [
        {
            "ID": "001",
            "category": "純茶",
            "name": "阿薩姆紅茶",
            "p_img": "./assets/img/products/p01.jpg",
            "beHot": "Y",
            "beCold": "Y",
            "price": 30,
            "qty": 0
        },
        {
            "ID": "002",
            "category": "純茶",
            "name": "茉莉綠茶",
            "p_img": "./assets/img/products/p02.jpg",
            "beHot": "Y",
            "beCold": "Y",
            "price": 30,
            "qty": 0
        },
        {
            "ID": "003",
            "category": "純茶",
            "name": "凍頂烏龍",
            "p_img": "./assets/img/products/p03.jpg",
            "beHot": "Y",
            "beCold": "Y",
            "price": 30,
            "qty": 0
        },
        {
            "ID": "004",
            "category": "純茶",
            "name": "黃金大麥",
            "p_img": "./assets/img/products/p04.jpg",
            "beHot": "Y",
            "beCold": "Y",
            "price": 30,
            "qty": 0
        },
        {
            "ID": "005",
            "category": "奶茶",
            "name": "熟成奶茶",
            "p_img": "./assets/img/products/p05.jpg",
            "beHot": "Y",
            "beCold": "Y",
            "price": 40,
            "qty": 0
        },
        {
            "ID": "006",
            "category": "奶茶",
            "name": "烏龍奶茶",
            "p_img": "./assets/img/products/p06.jpg",
            "beHot": "Y",
            "beCold": "Y",
            "price": 40,
            "qty": 0
        },
        {
            "ID": "007",
            "category": "奶茶",
            "name": "珍珠奶茶",
            "p_img": "./assets/img/products/p07.jpg",
            "beHot": "Y",
            "beCold": "Y",
            "price": 45,
            "qty": 0
        },
        {
            "ID": "008",
            "category": "奶茶",
            "name": "黑糖奶茶",
            "p_img": "./assets/img/products/p08.jpg",
            "beHot": "Y",
            "beCold": "Y",
            "price": 40,
            "qty": 0
        },
        {
            "ID": "009",
            "category": "奶茶",
            "name": "布丁奶茶",
            "p_img": "./assets/img/products/p09.jpg",
            "beHot": "Y",
            "beCold": "Y",
            "price": 50,
            "qty": 0
        },
        {
            "ID": "010",
            "category": "奶茶",
            "name": "阿華田",
            "p_img": "./assets/img/products/p10.jpg",
            "beHot": "Y",
            "beCold": "Y",
            "price": 45,
            "qty": 0
        },
        {
            "ID": "011",
            "category": "奶茶",
            "name": "冰淇淋紅茶",
            "p_img": "./assets/img/products/p11.jpg",
            "beHot": "N",
            "beCold": "Y",
            "price": 50,
            "qty": 0
        },
        {
            "ID": "012",
            "category": "鮮奶茶",
            "name": "紅茶鮮奶茶",
            "p_img": "./assets/img/products/p12.jpg",
            "beHot": "Y",
            "beCold": "Y",
            "price": 55,
            "qty": 0
        },
        {
            "ID": "013",
            "category": "鮮奶茶",
            "name": "蕎麥鮮奶茶",
            "p_img": "./assets/img/products/p13.jpg",
            "beHot": "Y",
            "beCold": "Y",
            "price": 55,
            "qty": 0
        },
        {
            "ID": "014",
            "category": "鮮奶茶",
            "name": "仙草凍鮮奶茶",
            "p_img": "./assets/img/products/p14.jpg",
            "beHot": "Y",
            "beCold": "Y",
            "price": 60,
            "qty": 0
        },
        {
            "ID": "015",
            "category": "鮮奶茶",
            "name": "小芋圓鮮奶茶",
            "p_img": "./assets/img/products/p15.jpg",
            "beHot": "Y",
            "beCold": "Y",
            "price": 60,
            "qty": 0
        },
        {
            "ID": "016",
            "category": "鮮奶茶",
            "name": "冬瓜鮮奶",
            "p_img": "./assets/img/products/p16.jpg",
            "beHot": "Y",
            "beCold": "Y",
            "price": 55,
            "qty": 0
        },
        {
            "ID": "017",
            "category": "鮮奶茶",
            "name": "黑糖波霸鮮奶",
            "p_img": "./assets/img/products/p17.jpg",
            "beHot": "Y",
            "beCold": "Y",
            "price": 65,
            "qty": 0
        },
        {
            "ID": "018",
            "category": "鮮奶茶",
            "name": "可可鮮奶",
            "p_img": "./assets/img/products/p18.jpg",
            "beHot": "Y",
            "beCold": "Y",
            "price": 65,
            "qty": 0
        },
        {
            "ID": "019",
            "category": "鮮奶茶",
            "name": "抹茶鮮奶",
            "p_img": "./assets/img/products/p19.jpg",
            "beHot": "Y",
            "beCold": "Y",
            "price": 65,
            "qty": 0
        },
        {
            "ID": "020",
            "category": "果茶",
            "name": "冬瓜檸檬",
            "p_img": "./assets/img/products/p20.jpg",
            "beHot": "N",
            "beCold": "Y",
            "price": 40,
            "qty": 0
        },
        {
            "ID": "021",
            "category": "果茶",
            "name": "翡翠檸檬",
            "p_img": "./assets/img/products/p21.jpg",
            "beHot": "N",
            "beCold": "Y",
            "price": 40,
            "qty": 0
        },
        {
            "ID": "022",
            "category": "果茶",
            "name": "百香果綠茶",
            "p_img": "./assets/img/products/p22.jpg",
            "beHot": "N",
            "beCold": "Y",
            "price": 40,
            "qty": 0
        },
        {
            "ID": "023",
            "category": "果茶",
            "name": "柳橙綠茶",
            "p_img": "./assets/img/products/p23.jpg",
            "beHot": "N",
            "beCold": "Y",
            "price": 55,
            "qty": 0
        },
        {
            "ID": "024",
            "category": "果茶",
            "name": "葡萄柚蜜茶",
            "p_img": "./assets/img/products/p24.jpg",
            "beHot": "N",
            "beCold": "Y",
            "price": 55,
            "qty": 0
        },
        {
            "ID": "025",
            "category": "果茶",
            "name": "甘蔗青茶",
            "p_img": "./assets/img/products/p25.jpg",
            "beHot": "N",
            "beCold": "Y",
            "price": 45,
            "qty": 0
        },
        {
            "ID": "026",
            "category": "點點心",
            "name": "奶油紅豆餅",
            "p_img": "./assets/img/products/p26.jpg",
            "beHot": "N",
            "beCold": "N",
            "price": 25,
            "qty": 0
        },
        {
            "ID": "027",
            "category": "點點心",
            "name": "豆沙紅豆餅",
            "p_img": "./assets/img/products/p27.jpg",
            "beHot": "N",
            "beCold": "N",
            "price": 25,
            "qty": 0
        },
        {
            "ID": "028",
            "category": "點點心",
            "name": "芋頭紅豆餅",
            "p_img": "./assets/img/products/p28.jpg",
            "beHot": "N",
            "beCold": "N",
            "price": 25,
            "qty": 0
        },
        {
            "ID": "029",
            "category": "點點心",
            "name": "玉米起司紅豆餅",
            "p_img": "./assets/img/products/p29.jpg",
            "beHot": "N",
            "beCold": "N",
            "price": 25,
            "qty": 0
        },
        {
            "ID": "030",
            "category": "點點心",
            "name": "OREO紅豆餅",
            "p_img": "./assets/img/products/p30.jpg",
            "beHot": "N",
            "beCold": "N",
            "price": 25,
            "qty": 0
        }
    ]
}
`
