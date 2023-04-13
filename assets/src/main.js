
$(window).resize(function () {
    checkVersion()
})

// ------- div > mainMenu 區塊排版 ------------start---------------- //

// 依當前畫面大小，判斷是否調整CSS
function checkVersion() {
    // 搭配html col-lg-4 一起用
    let lgMedia = window.matchMedia('(min-width: 992px)');
    if (lgMedia.matches) {
        setMenuBlocks()
        $('.menublock').last().css('margin-bottom', '');
    } else {
        restoreMenuBlocks()
        $('.menublock').last().css('margin-bottom', '5rem');
    }
}

// 設定菜單區塊
function setMenuBlocks() {
    $('.menublock').each(function (i, element) {
        $(element).css('position', 'absolute');
        $(element).css('width', 'calc(33.33% - 10px)');

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
        $(element).css('top', `calc(${preBlockHeight}px + 30px)`);
    }

    $('.mainMenu').css('height', $('.mainMenu').height());

    setTimeout(function () {
        $('.loading').hide();
    }, 500)

}
// 復原設定菜單區塊style.top
function restoreBlockTopStyle(element) {
    $(element).css('top', '');

    setTimeout(function () {
        $('.loading').hide();
    }, 500)
}


// ------- div > mainMenu 區塊排版 --------------end---------------- //


// ------- div > mainMenu 裡面的資料從JSON取得 -------start--------- //
$(function () {
    let url = "https://raw.githubusercontent.com/ling0502/EEIT64/main/assets/src/data.js";

    $.ajax({
        url: url,
        success: function (result) {

            // JSON資料解析
            let jsonObj = JSON.parse(json);

            // 建立各類別物件
            let catGroup = {};
            jsonObj['records'].forEach(function (product, i) {
                let catID = product.category;
                if (!(catID in catGroup)) {
                    catGroup[catID] = [];
                }
                catGroup[catID].push(product);
            })

            // 每個類別建立DIV區塊
            let $categoryDiv
            let $productListItem
            $.each(catGroup, function (category, products) {
                $categoryDiv = $(`
    <div class="col-12 col-lg-4">
        <div class="menublock shadow">
            <div class="menuTitle">${category}</div>
            <div class="products">
                <ul style="list-style-type:none;">

                </ul>
            </div>
        </div>
    </div>
    `);

                // 在類別DIV區塊裡找到ul標籤插入品項內容
                let $productList = $categoryDiv.find('.products ul');
                $.each(products, function (index, product) {
                    $productListItem = `
        <li class="product">
            <div>
                <img src=${product.p_img} width="40px">
                <b id="product-name">${product.name}</b>
            </div>
            <div class="d-flex">
                <div class="cold mx-1" style="visibility: ${product.beCold === 'N' ? 'hidden' : 'visible'};">
                </div>
                <div class="hot mx-1" style="visibility: ${product.beHot === 'N' ? 'hidden' : 'visible'};">
                </div>
                <div class="price mx-2"><b>${product.price}</b></div>
            </div>
        </li>`;

                    $productList.append($productListItem);
                });

                // 全部內容串接好之後更新到菜單區塊
                $('.mainMenu').append($categoryDiv);
            });
        },
        error: function () {
            $('.loading').html('Error loading data'); // 顯示錯誤訊息
        }
    }).done(function () {

        setTimeout(function () {
            // console.log('done')
            // console.log($('.menublock').eq(0).prop('offsetHeight'))
            checkVersion()
        }, 500);
    })
})

// ------- div > mainMenu 裡面的資料從JSON取得 -------end--------- //


// ---------------- 更多資訊 點擊控制 -----------start------------ //

$('.moreInfo').on('click', function () {
    let msgBox = $(this).find('.msgBox');
    if (!msgBox.is(":visible")) {
        msgBox.fadeIn(300);
    }
});
$('.closeBtn').on('click', function () {
    if ($('.msgBox').is(":visible")) {
        $('.msgBox').fadeOut(300);
    }
});

$(document).on('mousedown', function (event) {
    // 檢查點擊的元素是否為 .msgBox 元素或其子元素
    if (!$(event.target).closest('.msgBox').length) {
        // 隱藏 .msgBox 元素
        let msgBox = $(this).find('.msgBox');
        if (msgBox.is(":visible")) {
            msgBox.fadeOut(300);
        }
    }
});

// ---------------- 更多資訊 點擊控制 -------------end------------ //


// -------------- 菜單點擊後出現訂餐資訊框 ---------start--------- //
$('.product').on('click', function (event) {
    let title = $(this).find('#product-name').text();
    let imgUrl = $(this).find('img').attr('src');
    let price = $(this).find('.price').text()

    // 選取 product_dialog 元素，並進行內容文字和圖片路徑的取代
    $('.product_dialog .title-block').text(title);
    $('.product_dialog .img-block').attr('src', imgUrl);
    $('.cust-price').text(price);

    // 顯示 product_dialog 元素
    $('.product_dialog').show();

    // 判斷按鈕相對應屬性如果不符合，則按鈕不可點選
    let coldVisibility = $(this).find('.cold').css('visibility');
    let hotVisibility = $(this).find('.hot').css('visibility');

    if (coldVisibility === 'hidden') {
        $('.ice').attr('disabled', true);
    }
    if (hotVisibility === 'hidden') {
        $('.temperature').attr('disabled', true);
    }
    if (coldVisibility === 'hidden' && hotVisibility === 'hidden') {
        $('.cup').attr('disabled', true);
    }
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
    let selectedCup = $('.cup-block button.block-selected').length;
    let selectedTemp = $('.temp-block button.block-selected').length;
    let allCupDisabled = $('.cup[disabled]').length === $('.cup-block button').length;
    let allTempDisabled = $('.temperature[disabled]').length + $('.ice[disabled]').length === $('.temp-block button').length;

    // 判斷 cup-block 及 temp-block 各有一個按鈕的背景顏色是否有樣式 / 或全部都不可選
    if ((selectedCup === 1 && selectedTemp === 1) ||
        (allCupDisabled && allTempDisabled)) {
        closeProductDialog();
        saveToLocalStorage();
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
            $('.unselect')
                .removeClass('shake')
                .removeClass('border border-danger')

            $('.cup-block').removeClass('unselect');
            $('.temp-block').removeClass('unselect');
        }, 600);
    }
});

$(document).on('mousedown', function (event) {
    // 檢查點擊的元素是否為 .product 或 .product_dialog 元素或其子元素
    if (!$(event.target).closest('.detail-block').length) {
        let product_dialog = $(this).find('.product_dialog');
        if (product_dialog.is(":visible")) {
            closeProductDialog();
        }
    }
});

let minNum = 1;
let maxNum = 50;
let custNum = $('.cust-num');
let custPrice = $('.cust-price');

$('#minus').on('click', function () {
    let num = parseInt(custNum.text());
    let total = parseInt(custPrice.text());
    if (num <= minNum) {
        return;
    }

    total /= num
    num--;
    total *= num

    custNum.text(num);
    custPrice.text(total);
});

$('#plus').on('click', function () {
    let num = parseInt(custNum.text());
    let total = parseInt(custPrice.text());
    if (num >= maxNum) {
        return;
    }
    total /= num
    num++;
    total *= num

    custNum.text(num);
    custPrice.text(total);
});

function closeProductDialog() {
    setTimeout(function () {
        $('.cup').attr('disabled', false);
        $('.ice').attr('disabled', false);
        $('.temperature').attr('disabled', false);
        $('.cup-block button').removeClass('block-selected');
        $('.temp-block button').removeClass('block-selected');
        $('.cust-num').text(1);
    }, 300)

    $('.product_dialog').fadeOut(300);
}

// -------------- 菜單點擊後出現訂餐資訊框 ---------end----------- //



// ----- 選好商品規格後，按下訂購，在本地端儲存資料 -----start----- //
function saveToLocalStorage() {
    let name = $('.title-block').text();
    let imgSrc = $('.img-block').attr('src');
    let price = $('.cust-price').text();
    let quantity = parseInt($('.cust-num').text());

    let productInfo = {
        name: name,
        imgSrc: imgSrc,
        price: price,
        quantity: quantity
    };

    // 從 localStorage 中取得目前的資料，為 null 時，則傳回一個空陣列
    let productInfos = JSON.parse(localStorage.getItem('productInfos')) || [];

    // 尋找相同的商品
    let existingProduct = productInfos.find(function (item) {
        return item.imgSrc === productInfo.imgSrc;
    });

    if (existingProduct) {
        existingProduct.quantity += quantity;
    } else {
        productInfos.push(productInfo);
    }

    // 將整個陣列存回 localStorage
    localStorage.setItem('productInfos', JSON.stringify(productInfos));

    // console.log(productInfo)
    // console.log(localStorage)
}

function getFromLocalStorage() {

    return JSON.parse(localStorage.getItem('productInfos')) || [];
}

function updateItemAtIndex(index, price, num) {
    // console.log('updateItemAtIndex');

    let storageIndex = index - 1;
    let productInfos = JSON.parse(localStorage.getItem('productInfos')) || [];

    if (productInfos[storageIndex]) {
        productInfos[storageIndex].quantity = num;
        productInfos[storageIndex].price = price;
        localStorage.setItem('productInfos', JSON.stringify(productInfos));
    }
}

function removeItemAtIndex(index) {
    // console.log('removeItemAtIndex');

    let items = JSON.parse(localStorage.getItem('productInfos'));
    if (index > -1 && index < items.length) {
        items.splice(index, 1);
        localStorage.setItem('productInfos', JSON.stringify(items));
    }
}

function removeFromLocalStorage() {
    // console.log('removeItem');
    localStorage.clear();
}

// window.addEventListener('unload', removeFromLocalStorage);

// ----- 選好商品規格後，按下訂購，在本地端儲存資料 -------end----- //