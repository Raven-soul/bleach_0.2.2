function loadClass() {
    getClassPageData(getSearchParam('name'));
}

function getSearchParam(param) {
    const params = new URLSearchParams(window.location.search);
    return params.get(param);
}

function getClassPageData(race_name) {
    let page_content;

    switch(race_name) {
        case 'arrankar':
            page_content = arrankar_content_data;
            break;
        default: alert('error');
    }

    var class_load_area_block = $(".info-block");
    //var index_summ = "";

    let page_temp = page_template.page_template;

    // Заголовок страницы
    page_temp = page_temp.replace("@@CLASSTITLENAME@@", page_content.title_name);
    page_temp = page_temp.replace("@@CLASSNAME@@", page_content.class_name);
    page_temp = page_temp.replace("@@CLASSSORCENAME@@", page_content.sorce_name);

    // Комментарий / цитата страницы
    page_temp = page_temp.replace("@@CLASSCOMMENTDATA@@", page_content.comment.class_comment);
    page_temp = page_temp.replace("@@CLASSCOMMENTAUTOR@@", page_content.comment.comment_autor);
    
    // Основной контент
    // Таблица
    page_temp = page_temp.replace("@@CLASSPRETABLECONTENT@@", page_content.pretable_content);
    page_temp = page_temp.replace("@@CLASSTABLECONTENT@@", page_content.table);
    
    // Основные данные
    var data_content_summ = "";
    page_content.data_content.forEach((data_content) => {
        var dc_temp = page_template.data_content;

        dc_temp = dc_temp.replace("@@CLASSDATACONTENTELEMENT@@", data_content.data);

        data_content_summ += dc_temp;
    });

    page_temp = page_temp.replace("@@CLASSCONTENTDATA@@", data_content_summ);

    // Блок спецификаций
    data_content_summ = page_template.specialisation_main;
    data_content_summ = data_content_summ.replace("@@CLASSSPECIALISATIONNAME@@", page_content.specialisation.specialisation_name);
    data_content_summ = data_content_summ.replace("@@CLASSSPECIALISATIONDESCRIPTION@@", page_content.specialisation.specialisation_description);
    
    var specialisation_content_block_summ = "";
    page_content.specialisation.specialisation_list.forEach((element) => {
        var specialisation_block = page_template.specialisation_block;

        specialisation_block = specialisation_block.replace(/@@CLASSSPECIALISATIONID@@/g, element.block_id);
        specialisation_block = specialisation_block.replace("@@CLASSSPECIALISATIONBLOCKNAME@@", element.block_name);
        specialisation_block = specialisation_block.replace("@@CLASSSPECIALISATIONPREVIEW@@", element.block_preview);

        data_content_summ = "";
        element.data_content.forEach((data_content) => {
            var dc_temp = page_template.data_content;

            dc_temp = dc_temp.replace("@@CLASSDATACONTENTELEMENT@@", data_content.data);

            data_content_summ += dc_temp;
        });

        specialisation_block = specialisation_block.replace("@@CLASSSPECIALISATIONDATACONTENT@@", data_content_summ);

        specialisation_content_block_summ += specialisation_block;
    });

    page_temp = page_temp.replace("@@CLASSSPECIALISATION@@", specialisation_content_block_summ);

    // Блок картинок
    var image_block_summ = "";

    page_content.images.forEach((img) => {
        var img_temp = page_template.image_block;

        img_temp = img_temp.replace("@@CLASSIMAGESRC@@", img.image_src);
        img_temp = img_temp.replace("@@CLASSIMAGEALT@@", img.image_alt);

        image_block_summ += img_temp;
    });

    debugger;
    page_temp = page_temp.replace("@@CLASSIMAGEBLOCK@@", image_block_summ);

    class_load_area_block.html(page_temp);

    awake(2);
}