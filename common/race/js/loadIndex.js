function loadIndex(order_num) {    
    getIndexPageData(order_num);
}

function getIndexPageData(order_num) {
    var path_prefix = nestingOrder(order_num)

    $.ajax({
        dataType: "json",
        url: '../../common/race/templates/common/index_template.json',
        success: function (data){
            var race_load_area_block = $(".info-block");
            var index_summ = "";

            let index_temp = data.page_template;

            index_temp = index_temp.replace("@@RACETITLENAME@@", data.title_name);

            data.group_list.forEach((group) => {
                let group_temp = data.group_template;
                let group_summ = "";

                group_temp = group_temp.replace("@@RACEGROUPNAME@@", group.group_name);

                group.list.forEach((element) => {
                    let element_temp = data.group_element_template;

                    element_temp = element_temp.replace("@@RACEHREF@@", element.race_href);
                    element_temp = element_temp.replace("@@RACENAME@@", element.race_name);
                    element_temp = element_temp.replace(/@@RACENAEMEENG@@/g, element.race_name_eng);
                    element_temp = element_temp.replace("@@RACELOGO@@", path_prefix + element.race_logo);

                    group_summ += element_temp;
                });

                group_temp = group_temp.replace("@@RACEGROUPCONTENT@@", group_summ);                
                index_summ += group_temp;
            });

            index_temp = index_temp.replace("@@RACECONTENTDATA@@", index_summ);
            race_load_area_block.html(index_temp);

            // Название расы в заголовке
            var chapter_title = $(".chapter-title-label");
            chapter_title.html(data.title_name);

            // Отрисока меню и других основных элементов, будет происходить здесь, уже после отрисовки страницы
            awake(order_num);
        },
        error: function (response) {
            // Отрисока меню и других основных элементов, вызвана для отрисовки в случае ошибки
            awake(order_num);
        }
    });
}