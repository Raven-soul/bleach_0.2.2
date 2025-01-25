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
        case 'fullbringer':
            page_content = fullbringer_content_data;
            break;
        case 'shinigami':
                page_content = shinigami_content_data;
                break;
        default: alert('error');
    }

    var class_load_area_block = $(".info-block");
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


    // Блок спойлеров
    // Сюда входят специализации и дополнительная информация
    var spoiler_summ = "";
    page_content.spoiler_block.forEach((data) => {
        var spoiler_temp = page_template.spoiler_main; 
        
        spoiler_temp = spoiler_temp.replace("@@CLASSSPOILERNAME@@", data.spoiler.spoiler_name);
        spoiler_temp = spoiler_temp.replace("@@CLASSSPOILERDESCRIPTION@@", data.spoiler.spoiler_description);

        var spoiler_content_block_summ = "";
        data.spoiler.spoiler_list.forEach((spoiler) => {
            var spoiler_block = page_template.spoiler_block;

            spoiler_block = spoiler_block.replace(/@@CLASSSPOILERID@@/g, spoiler.block_id);
            spoiler_block = spoiler_block.replace("@@CLASSSPOILERBLOCKNAME@@", spoiler.block_name);
            spoiler_block = spoiler_block.replace("@@CLASSSPOILERPREVIEW@@", spoiler.block_preview);

            data_content_summ = "";
            spoiler.data_content.forEach((data_content) => {
                var dc_temp = page_template.data_content;
                
                dc_temp = dc_temp.replace("@@CLASSDATACONTENTELEMENT@@", data_content.data);

                data_content_summ += dc_temp;
            });

            spoiler_block = spoiler_block.replace("@@CLASSSPOILERDATACONTENT@@", data_content_summ);

            spoiler_content_block_summ += spoiler_block;
        });

        spoiler_temp = spoiler_temp.replace("@@CLASSSPOILERCONTENT@@", spoiler_content_block_summ);

        spoiler_summ += spoiler_temp;
    });

    page_temp = page_temp.replace("@@CLASSSPOILERBLOCK@@", spoiler_summ);


    // Блок картинок
    var image_block_summ = "";

    page_content.images.forEach((img) => {
        var img_temp = page_template.image_block;

        img_temp = img_temp.replace("@@CLASSIMAGESRC@@", img.image_src);
        img_temp = img_temp.replace("@@CLASSIMAGEALT@@", img.image_alt);

        image_block_summ += img_temp;
    });

    page_temp = page_temp.replace("@@CLASSIMAGEBLOCK@@", image_block_summ);

    class_load_area_block.html(page_temp);

    awake(2);
}