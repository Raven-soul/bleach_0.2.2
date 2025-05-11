function loadIndex(order_num) {    
    getIndexPageData(order_num);
}

function getIndexPageData(order_num) {
    var path_prefix = nestingOrder(order_num)

    var class_load_area_block = $(".info-block");
    var index_summ = "";

    let index_temp = index_template.main_template;

    index_temp = index_temp.replace("@@CLASSTITLENAME@@", index_template.title_name);

    index_template.group_list.forEach((group) => {
        let group_temp = index_template.group_template;
        let group_summ = "";

        group_temp = group_temp.replace("@@CLASSGROUPNAME@@", group.group_name);

        group.list.forEach((element) => {
            let element_temp = index_template.group_element_template;

            element_temp = element_temp.replace("@@CLASSHREF@@", element.class_href);
            element_temp = element_temp.replace("@@CLASSNAME@@", element.class_name);
            element_temp = element_temp.replace(/@@CLASSNAMEENG@@/g, element.class_name_eng);
            element_temp = element_temp.replace("@@CLASSLOGO@@", path_prefix + element.class_logo);

            group_summ += element_temp;
        });

        group_temp = group_temp.replace("@@RACEGROUPCONTENT@@", group_summ);                
        index_summ += group_temp;
    });

    index_temp = index_temp.replace("@@RACECONTENTDATA@@", index_summ);
    class_load_area_block.html(index_temp);

    // Название элемента в заголовке
    var chapter_title = $(".chapter-title-label");
    chapter_title.html(index_template.title_name);

    // Отрисока меню и других основных элементов, будет происходить здесь, уже после отрисовки страницы
    awake(order_num);
}