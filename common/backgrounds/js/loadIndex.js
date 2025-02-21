function loadIndex(order_num) {    
    getIndexPageData(order_num);
}

function getIndexPageData(order_num) {
    var data = index_template;
    var load_area_block = $(".info-block");
    let index_temp = data.main_template;

    var summHtmlBlock = "";
    debugger;

    for(const [backgroundId, backgroundValue] of Object.entries(backgrounds_content_data)){
        let item_temp = data.bgr_grid_item_template;

        item_temp = item_temp.replace("@@ITEMLINK@@", "background.html?id=" + backgroundId);
        item_temp = item_temp.replace("@@ITEMNAME@@", backgroundValue.name);

        summHtmlBlock = summHtmlBlock + item_temp;
    }

    index_temp = index_temp.replace("@@BACKGROUNDELEMENT@@", summHtmlBlock);
    
    load_area_block.html( index_temp );
    
    //Название предыстории в заголовке
    var chapter_title = $(".chapter-title-label");
    chapter_title.html(data.title_name);

    // Отрисока меню и других основных элементов, будет происходить здесь, уже после отрисовки страницы
    awake(order_num);
}