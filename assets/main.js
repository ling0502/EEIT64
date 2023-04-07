

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
    $('.block').each(function (i, element) {
        $(element).css('position', 'absolute');
        $(element).css('width', 'calc(33.33% - 30px)');

        setBlockLeftStyle(element, i);
        setBlockTopStyle(element, i);
    })
}
// 復原設定菜單區塊
function restoreMenuBlocks() {
    $('.block').each(function (i, element) {
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
        let preBlockHeight = $('.block').eq(preBlockIndex).height();
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
        <div class="block">
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
        <li class="d-flex justify-content-between pe-2">
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