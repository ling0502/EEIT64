

window.addEventListener('load', () => {
    checkVersion()
})
window.addEventListener('resize', () => {
    checkVersion()
})

// ------- div > mainMenu 區塊排版 ------------start---------------- //

// 依當前畫面大小，判斷是否調整CSS
function checkVersion() {
    // 搭配html col-lg-4 一起用
    const lgMedia = window.matchMedia('(min-width: 992px)');
    if (lgMedia.matches) {
        setMenuBlocks()
    } else {
        restoreMenuBlocks()
    }
}

// 設定菜單區塊
function setMenuBlocks() {
    $('.menublock').each(function (i, element) {
        $(element).css('position', 'absolute');
        $(element).css('width', 'calc(33.33% - 30px)');

        setBlockLeftStyle(element, i);
        setBlockTopStyle(element, i);
    })
}
// 復原設定菜單區塊
function restoreMenuBlocks() {
    $('.menublock').each(function (i, element) {
        $(element).css('position', '');
        $(element).css('width', '');
        restoreBlockLeftStyle(element);
        restoreBlockTopStyle(element);
    })
}

// 設定菜單區塊style.left
function setBlockLeftStyle(element, index) {
    let pos = index + 1;
    let colIndex = pos % 3;

    switch (colIndex) {
        case 1:
            $(element).css('left', '0');
            break;
        case 2:
            $(element).css('left', 'calc(33.33% + 10px)');
            break;
        case 0:
            $(element).css('left', 'calc(66.67% + 20px)');
            break;
        default:
            console.error('Invalid colIndex:', colIndex);
            break;
    }
}
// 復原設定菜單區塊style.left
function restoreBlockLeftStyle(element) {
    $(element).css('left', '');
}

// 設定菜單區塊style.top
function setBlockTopStyle(element, index) {
    let rowIndex = parseInt(index / 3);
    if (rowIndex == 0) {
        $(element).css('top', '0');
    } else {
        let preBlockIndex = index - 3;
        let preBlockHeight = $('.menublock').eq(preBlockIndex).height();
        $(element).css('top', `calc(${preBlockHeight}px + 20px)`);
    }
}
// 復原設定菜單區塊style.top
function restoreBlockTopStyle(element) {
    $(element).css('top', '');
}

$('.moreInfo').on('click', function (event) {
    var msgBox = $(this).find('.msgBox');
    if (msgBox.is(":visible")) {
        msgBox.fadeOut(300);
    } else {
        $('.msgBox').fadeOut(300);
        msgBox.fadeIn(300);
    }
});

// ------- div > mainMenu 區塊排版 --------------end---------------- //



// ------- div > mainMenu 裡面的資料從JSON取得 -------start--------- //

// JSON資料解析
/*let jsonObj = JSON.parse(json);

// 建立各類別物件
var catGroup = {};
jsonObj['records'].forEach(function (product, i) {
    var catID = product.category;
    if (!(catID in catGroup)) {
        catGroup[catID] = [];
    }
    catGroup[catID].push(product);
})

// 每個類別建立DIV區塊
var $categoryDiv
var $productListItem
$.each(catGroup, function (category, products) {
    $categoryDiv = $(`
    <div class="col-12 col-lg-4">
        <div class="block shadow">
            <div class="menuTitle">${category}</div>
            <div class="products">
                <ul style="list-style-type:none;">

                </ul>
            </div>
        </div>
    </div>
    `);

    // 在類別DIV區塊裡找到ul標籤插入品項內容
    var $productList = $categoryDiv.find('.products ul');
    $.each(products, function (index, product) {
        $productListItem = `
        <li class="product">
            <div>
                <img src=${product.p_img} width="40px">
                <b>${product.name}</b>
            </div>
            <div class="d-flex">
                <div class="cold mx-1">
                    <img src="./assets/img/cold.svg" width="15px" 
                        style="visibility: ${product.beCold === 'N' ? 'hidden' : 'visible'};">
                </div>
                <div class="hot mx-1">
                    <img src="./assets/img/hot.svg" width="15px"
                    style="visibility: ${product.beHot === 'N' ? 'hidden' : 'visible'};">
                </div>
                <div class="price mx-2"><b>${product.price}</b></div>
            </div>
        </li>`;

        $productList.append($productListItem);
    });

    // 全部內容串接好之後更新到菜單區塊
    $('.mainMenu').append($categoryDiv);
});

// ------- div > mainMenu 裡面的資料從JSON取得 -------end--------- //
*/


// -------------- 菜單點擊後出現訂餐資訊框 ---------start--------- //
$('.product').on('click', function (event) {
    // 取得商品名稱
    var title = $(this).find('#product-name').text();

    // 取得商品圖片路徑
    var imgUrl = $(this).find('img').attr('src');

    // 選取 product_dialog 元素，並進行內容文字和圖片路徑的取代
    $('.product_dialog .title-block').text(title);
    $('.product_dialog .img-block').attr('src', imgUrl);

    // 顯示 product_dialog 元素
    $('.product_dialog').show();
});

$('.cup-block button').click(function () {
    $('.cup-block button').removeClass('block-selected');
    $(this).addClass('block-selected');
});

$('.temp-block button').click(function () {
    $('.temp-block button').removeClass('block-selected');
    $(this).addClass('block-selected');
});

$('#confirm').on('click', function () {
    var selectedCup = $('.cup-block button.block-selected').length;
    var selectedTemp = $('.temp-block button.block-selected').length;

    // 判斷 cup-block 及 temp-block 各有一個按鈕的背景顏色是否有樣式
    if (selectedCup === 1 && selectedTemp === 1) {
        $('.cup-block button').removeClass('block-selected');
        $('.temp-block button').removeClass('block-selected');
        $('.product_dialog').fadeOut(300);
    } else {
        if (selectedCup === 0) {
            $('.cup-block').addClass('unselect');
        }
        if (selectedTemp === 0) {
            $('.temp-block').addClass('unselect');
        }
        $('.unselect')
            .addClass('border border-danger')
            .addClass('shake');

        setTimeout(function () {
            console.log($('.unselect'))
            $('.unselect').removeClass('shake');
            $('.unselect').removeClass('border border-danger')
            $('.cup-block').removeClass('unselect');
            $('.temp-block').removeClass('unselect');
        }, 600);
    }
});

$(document).on('mousedown', function (event) {
    // 檢查點擊的元素是否為 .product 或 .product_dialog 元素或其子元素
    if (!$(event.target).closest('.detail-block').length) {
        // 隱藏 .product 元素
        let product_dialog = $(this).find('.product_dialog');
        if (product_dialog.is(":visible")) {
            $('.cup-block button').removeClass('block-selected');
            $('.temp-block button').removeClass('block-selected');
            product_dialog.fadeOut(300);
        }
    }
});

var minNum = 1;
var maxNum = 50;
var numElem = $('.cust-num');

$('#minus').on('click', function () {
    var num = parseInt(numElem.text());
    if (num <= minNum) {
        return;
    }
    num--;
    numElem.text(num);
});

$('#plus').on('click', function () {
    var num = parseInt(numElem.text());
    if (num >= maxNum) {
        return;
    }
    num++;
    numElem.text(num);
});

// -------------- 菜單點擊後出現訂餐資訊框 ---------end----------- //