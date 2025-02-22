function loadIndex(order_num) {    
    getIndexPageData(order_num);
}

function getIndexPageData(order_num) {
    var data = index_template;
    var load_area_block = $(".info-block");
    let index_temp = data.main_template;

    var summHtmlBlock = "";

    for(const [featId, featValue] of Object.entries(feats_content_data)){
        let item_temp = data.bgr_grid_item_template;

        item_temp = item_temp.replace("@@ITEMLINK@@", "feat.html?id=" + featId);
        item_temp = item_temp.replace("@@ITEMNAME@@", featValue.name);
        item_temp = item_temp.replace("@@ITEMSCHOOLLOGO@@ ", featValue.type.ico);

        summHtmlBlock = summHtmlBlock + item_temp;
    }

    index_temp = index_temp.replace("@@FEATELEMENT@@", summHtmlBlock);
    index_temp = index_temp.replace("@@FEATPROMPTDATACONTENT@@", promptTypeLoader());
    
    load_area_block.html( index_temp );
    
    //Название предыстории в заголовке
    var chapter_title = $(".chapter-title-label");
    chapter_title.html(data.title_name);

    // Отрисока меню и других основных элементов, будет происходить здесь, уже после отрисовки страницы
    awake(order_num);
}

function promptTypeLoader() {
    var summHtmlBlock = "";

    for(const [typeKey, typeValue] of Object.entries(tp)){
        if(typeKey != "discard"){
            summHtmlBlock += "<span>" + typeValue.ico + " - " + typeValue.name + "</span>";
        }        
    }
    return summHtmlBlock;
}