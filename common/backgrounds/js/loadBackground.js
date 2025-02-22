function loadBackground(order_num) {    
    getBackgroundPageData(order_num);
}

function getSearchParam(param) {
    const params = new URLSearchParams(window.location.search);
    return params.get(param);
}

function getBackgroundPageData(order_num) {
    let background_id = getSearchParam('id');
    let data = page_template;

    var class_load_area_block = $(".info-block");
    let page_temp = data.main_template;

    let background = backgrounds_content_data[background_id];

    let background_temp = data.background_item_template;
    background_temp = background_temp.replace("@@BACKGROUNDNAME@@", background.name);

    var background_summ = "";

    background.content.forEach((data_content) => {
        var dc_temp = data.data_content;

        dc_temp = dc_temp.replace("@@BACKGROUNDDATACONTENTELEMENT@@", data_content.data);

        background_summ += dc_temp;
    });

    background_temp = background_temp.replace("@@BACKGROUNDDESCRIPTIONDATA@@", background_summ);
    page_temp = page_temp.replace("@@BACKGROUNDITEMDATACONTENT@@", background_temp);

    class_load_area_block.html(page_temp);

    //Название расы в заголовке
    let name_block = $(".chapter-title-label");
    name_block.html( background.name + " - Предыстория" );

    // Отрисока меню и других основных элементов, будет происходить здесь, уже после отрисовки страницы
    awake(order_num);
}