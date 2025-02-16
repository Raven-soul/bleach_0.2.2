function loadIndex(order_num) {    
    getIndexPageData(order_num);
}

function getIndexPageData(order_num) {
        var data = page_template;
        var class_load_area_block = $(".info-block");

        let index_temp = data.main_template;

    debugger;

        index_temp = index_temp.replace("@@CLASSTITLENAME@@", data.title_name);
        index_temp = index_temp.replace("@@ARMAMENTFILTERDATACONTENT@@", filtersGeneration(data));
        index_temp = index_temp.replace("@@ARMAMENTPROMPTDATACONTENT@@", promptTypeLoader());

        class_load_area_block.html(index_temp);

        showArmamentAbilities(data);

        //Название расы в заголовке
        var chapter_title = $(".chapter-title-label");
        chapter_title.html(data.title_name);
        
        // Отрисока меню и других основных элементов, будет происходить здесь, уже после отрисовки страницы
        awake(order_num);
}

function promptTypeLoader() {
    var summHtmlBlock = "";

    for(const [typeKey, typeValue] of Object.entries(armamentAbilitiescolumns.tp.value)){
        if(typeKey != "discard"){
            summHtmlBlock += "<span>" + typeValue.ico + " - " + typeValue.name + "</span>";
        }        
    }
    return summHtmlBlock;
}

function filtersGeneration(data){
    debugger;

    var summHtmlBlock = "";

    for(const [columnKey, columnValue] of Object.entries(armamentAbilitiescolumns)){
        let select_Temp = data.selector_template;
        let default_item_temp = data.selector_default_item_template;
        var select_list = "";

        select_Temp = select_Temp.replace("@@SELECTORNAME@@", columnKey);
        select_Temp = select_Temp.replace("@@SELECTORID@@", columnKey + "_selector_id");
        select_Temp = select_Temp.replace("@@SELECTORFUNCTION@@", "changeFilter(this)"); //changeFilterArmament(this)");

        default_item_temp = default_item_temp.replace("@@DEFITEMNAME@@", columnValue.translate);

        select_list = default_item_temp;

        for(const [key, value] of Object.entries(columnValue.value)){
            let selector_item_template = data.selector_item_template;

            if(columnValue.itemType == "bool" || key == "discard"){
                selector_item_template = selector_item_template.replace("@@ITEMVALUE@@", key);
            } 
            else {
                if(columnValue.translate == "Тип"){
                    selector_item_template = selector_item_template.replace("@@ITEMVALUE@@", value.name);
                }
                else {
                    selector_item_template = selector_item_template.replace("@@ITEMVALUE@@", value);
                }                
            }
            
            if(columnValue.translate == "Тип"){
                selector_item_template = selector_item_template.replace("@@ITEMNAME@@", value.name);
            }
            else {
                selector_item_template = selector_item_template.replace("@@ITEMNAME@@", value);
            }  
            
            selector_item_template = selector_item_template.replace("@@ITEMTYPE@@", columnValue.itemType);

            select_list = select_list + selector_item_template;
        }

        select_Temp = select_Temp.replace("@@SELECTORBODY@@", select_list);
        
        summHtmlBlock = summHtmlBlock + select_Temp;
    }

    return summHtmlBlock;
}

function showArmamentAbilities(data) {
    var ka_item_grid_block = $(".grid-abilities-data");
    var summHtmlBlock = "";
    let filter = getFilter();

    for(const [abilitiesId, abilitiesValue] of Object.entries(armamentAbilitiesContent)){
        if(checkFilter(filter, abilitiesValue)){    

            let item_temp = data.ka_grid_item_template;
            
            item_temp = item_temp.replace("@@ITEMLINK@@", "armament.html?id=" + abilitiesId);
            item_temp = item_temp.replace("@@ITEMLEVEL@@", abilitiesValue.cost);
            item_temp = item_temp.replace("@@ITEMSCHOOLLOGO@@", abilitiesValue.type.ico);
            item_temp = item_temp.replace("@@ITEMNAME@@", abilitiesValue.name);

            var componentsSum = '';

            if(abilitiesValue.components.verbal)   {componentsSum = "В";}
                else {componentsSum = ".";} 
            if(abilitiesValue.components.somatic)  {componentsSum += "С";}
                else {componentsSum += ".";} 
            if(abilitiesValue.components.material) {componentsSum += "М";}
                else {componentsSum += ".";} 
            if(abilitiesValue.components.released) {componentsSum += "Р";}
                else {componentsSum += ".";} 

            item_temp = item_temp.replace("@@ITEMCOMPONENTS@@", componentsSum);
            
            summHtmlBlock = summHtmlBlock + item_temp;
        }
    }

    ka_item_grid_block.html( summHtmlBlock );
}

        // $.ajax({
        //     dataType: "json",
        //     url: '../../common/class/templates/common/index_template.json',
        //     success: function (data){
        //         var class_load_area_block = $(".info-block");
        //         var index_summ = "";
    
        //         let index_temp = data.page_template;
    
        //         index_temp = index_temp.replace("@@CLASSTITLENAME@@", data.title_name);
    
        //         data.group_list.forEach((group) => {
        //             let group_temp = data.group_template;
        //             let group_summ = "";
    
        //             group_temp = group_temp.replace("@@CLASSGROUPNAME@@", group.group_name);
    
        //             group.list.forEach((element) => {
        //                 let element_temp = data.group_element_template;
    
        //                 element_temp = element_temp.replace("@@CLASSHREF@@", element.class_href);
        //                 element_temp = element_temp.replace("@@CLASSNAME@@", element.class_name);
        //                 element_temp = element_temp.replace(/@@CLASSNAMEENG@@/g, element.class_name_eng);
        //                 element_temp = element_temp.replace("@@CLASSLOGO@@", path_prefix + element.class_logo);
    
        //                 group_summ += element_temp;
        //             });
    
        //             group_temp = group_temp.replace("@@RACEGROUPCONTENT@@", group_summ);                
        //             index_summ += group_temp;
        //         });
    
        //         index_temp = index_temp.replace("@@RACECONTENTDATA@@", index_summ);
        //         class_load_area_block.html(index_temp);
    
        //         // Название расы в заголовке
        //         var chapter_title = $(".chapter-title-label");
        //         chapter_title.html(data.title_name);
    
        //         // Отрисока меню и других основных элементов, будет происходить здесь, уже после отрисовки страницы
        //         awake(order_num);
        //     },
        //     error: function (response) {
        //         // Отрисока меню и других основных элементов, вызвана для отрисовки в случае ошибки
        //         awake(order_num);
        //     }
        // });
    //}

// function getIndexPageData(order_num) {
//     var path_prefix = nestingOrder(order_num)

//     $.ajax({
//         dataType: "json",
//         url: '../../common/class/templates/common/index_template.json',
//         success: function (data){
//             var class_load_area_block = $(".info-block");
//             var index_summ = "";

//             let index_temp = data.page_template;

//             index_temp = index_temp.replace("@@CLASSTITLENAME@@", data.title_name);

//             data.group_list.forEach((group) => {
//                 let group_temp = data.group_template;
//                 let group_summ = "";

//                 group_temp = group_temp.replace("@@CLASSGROUPNAME@@", group.group_name);

//                 group.list.forEach((element) => {
//                     let element_temp = data.group_element_template;

//                     element_temp = element_temp.replace("@@CLASSHREF@@", element.class_href);
//                     element_temp = element_temp.replace("@@CLASSNAME@@", element.class_name);
//                     element_temp = element_temp.replace(/@@CLASSNAMEENG@@/g, element.class_name_eng);
//                     element_temp = element_temp.replace("@@CLASSLOGO@@", path_prefix + element.class_logo);

//                     group_summ += element_temp;
//                 });

//                 group_temp = group_temp.replace("@@RACEGROUPCONTENT@@", group_summ);                
//                 index_summ += group_temp;
//             });

//             index_temp = index_temp.replace("@@RACECONTENTDATA@@", index_summ);
//             class_load_area_block.html(index_temp);

//             // Название расы в заголовке
//             var chapter_title = $(".chapter-title-label");
//             chapter_title.html(data.title_name);

//             // Отрисока меню и других основных элементов, будет происходить здесь, уже после отрисовки страницы
//             awake(order_num);
//         },
//         error: function (response) {
//             // Отрисока меню и других основных элементов, вызвана для отрисовки в случае ошибки
//             awake(order_num);
//         }
//     });
// }