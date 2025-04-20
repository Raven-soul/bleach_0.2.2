function loadIndex(order_num) {    
    getIndexPageData(order_num);
}

function getIndexPageData(order_num) {
    var data = index_template;
    var load_area_block = $(".info-block");
    let index_temp = data.main_template;

    index_temp = index_temp.replace("@@FEATPROMPTDATACONTENT@@", promptTypeLoader());
    index_temp = index_temp.replace("@@ARMAMENTFILTERDATACONTENT@@", filtersGeneration(data));    

    load_area_block.html( index_temp );

    showFeats(data);
    
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

function filtersGeneration(data){
    var summHtmlBlock = "";

    for(const [columnKey, columnValue] of Object.entries(FilterColumns)){
        let select_Temp = data.selector_template;
        let default_item_temp = data.selector_default_item_template;
        var select_list = "";

        select_Temp = select_Temp.replace("@@SELECTORNAME@@", columnKey);
        select_Temp = select_Temp.replace("@@SELECTORID@@", columnKey + "_selector_id");
        select_Temp = select_Temp.replace("@@SELECTORFUNCTION@@", "changeFilter(this)");

        default_item_temp = default_item_temp.replace("@@DEFITEMNAME@@", columnValue.translate);

        select_list = default_item_temp;

        for(const [key, value] of Object.entries(columnValue.value)){
            let selector_item_template = data.selector_item_template;

            if(key == "discard"){
                selector_item_template = selector_item_template.replace("@@ITEMVALUE@@", key);
            } 
            else {
                // только для columnValue.translate == "Тип"
                selector_item_template = selector_item_template.replace("@@ITEMVALUE@@", value.name);                
            }

            // только для columnValue.translate == "Тип"
            selector_item_template = selector_item_template.replace("@@ITEMNAME@@", value.name);
                        
            selector_item_template = selector_item_template.replace("@@ITEMTYPE@@", columnValue.itemType);

            select_list = select_list + selector_item_template;
        }

        select_Temp = select_Temp.replace("@@SELECTORBODY@@", select_list);
        
        summHtmlBlock = summHtmlBlock + select_Temp;
    }

    return summHtmlBlock;
}

function showFeats(data) {
    var summHtmlBlock = "";   
    let filter = getFilter(); 
    var ka_item_grid_block = $(".grid-abilities-data");

    for(const [featId, featValue] of Object.entries(feats_content_data)){
        if(checkFilter(filter, featValue)){
            let item_temp = data.bgr_grid_item_template;

            item_temp = item_temp.replace("@@ITEMLINK@@", "feat.html?id=" + featId);
            item_temp = item_temp.replace("@@ITEMNAME@@", featValue.name);
            item_temp = item_temp.replace("@@ITEMSCHOOLLOGO@@ ", featValue.type.ico);

            summHtmlBlock = summHtmlBlock + item_temp;
        }        
    }

    ka_item_grid_block.html( summHtmlBlock );
}