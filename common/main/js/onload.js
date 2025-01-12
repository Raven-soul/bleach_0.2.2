function awake(nestOrder){
    windowHeightCheckForFooter();
    menuGeneration(nestOrder);

    //linkLauncher();
}

function windowHeightCheckForFooter() {
    // прикрепление футера к окончанию страницы
    if( $(document).height() <= $(window).height() ){		
        $(".footer-area").addClass("fixed-bottom");
    } else {
        $(".footer-area").attr('class','footer-area');
    }
}

function menuGeneration(nestOrder){
  
    $.ajax({
        dataType: "json",
        url: nestingOrder(nestOrder) + 'common/main/templates/menu/menu.json',
        success: function (data){
            var menu_load_area_block = $(".menu-block-load-area");
            var summ_html_block = "";

            data.menu_list.forEach((menu_array_element) => {
                let menu_temp = data.menu_template;
                var menu_list = "";

                menu_temp = menu_temp.replace("@@MENUSECTIONNAME@@", menu_array_element.SectionName);
                menu_temp = menu_temp.replace(/@@MENUSECTIONID@@/g, menu_array_element.id);

                menu_array_element.SectionMenuItems.forEach((element) => {
                    let menu_stroke_temp = data.menu_item_template;

                    menu_stroke_temp = menu_stroke_temp.replace("@@MENUITEMNAME@@", element.ItemName);
                    menu_stroke_temp = menu_stroke_temp.replace("@@MENUITEMLINK@@", nestingOrder(nestOrder) + element.ItemLink);
                    menu_stroke_temp = menu_stroke_temp.replace("@@MENUITEMLOGO@@", element.ItemLogo);

                    menu_list = menu_list + menu_stroke_temp;
                });
                
                menu_temp = menu_temp.replace("@@MENUSECTIONITEMLIST@@", menu_list);
                          
                summ_html_block = summ_html_block + menu_temp;
            });

            menu_load_area_block.html( summ_html_block );
        }
    });
}




// function linkLauncher(){  
//     // заполняет веб-страницу ссылками из репозитория
//     for (let key in window.LinkDataRepository) {
//         let searchStroke = 'a[href="' + key + '"]';
//         $(searchStroke).attr('href',window.LinkDataRepository[key]);
//     }
// }