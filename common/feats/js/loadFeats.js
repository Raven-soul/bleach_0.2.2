function loadFeat(order_num) {    
    getFeatPageData(order_num);
}

function getSearchParam(param) {
    const params = new URLSearchParams(window.location.search);
    return params.get(param);
}

function getFeatPageData(order_num) {
    let feat_id = getSearchParam('id');
    let data = page_template;

    var class_load_area_block = $(".info-block");
    let page_temp = data.main_template;

    let feat = feats_content_data[feat_id];

    let feat_temp = data.feat_item_template;
    feat_temp = feat_temp.replace("@@FEATNAME@@", feat.name);
    feat_temp = feat_temp.replace("@@FEATREQUIREMENT@@", feat.requirement);

    var feat_summ = "";

    feat.content.forEach((data_content) => {
        var dc_temp = data.data_content;

        dc_temp = dc_temp.replace("@@FEATDATACONTENTELEMENT@@", data_content.data);

        feat_summ += dc_temp;
    });

    feat_temp = feat_temp.replace("@@FEATDESCRIPTIONDATA@@", feat_summ);
    page_temp = page_temp.replace("@@FEATITEMDATACONTENT@@", feat_temp);

    class_load_area_block.html(page_temp);

    //Название расы в заголовке
    let name_block = $(".chapter-title-label");
    name_block.html( feat.name + " - Черта" );

    // Отрисока меню и других основных элементов, будет происходить здесь, уже после отрисовки страницы
    awake(order_num);
}