function awake(nestOrder){
    windowHeightCheckForFooter();
    menuGeneration(nestOrder);
    footerGeneration();
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

function footerGeneration(){
    var data = common_page_template;
    var load_footer_block = $(".footer-area");
    let footer_temp = data.footer_template;

    footer_temp = footer_temp.replace("@@AUTHORSIGN@@", data.author_sign);
    footer_temp = footer_temp.replace("@@AUTHORCOMMENTWIDE@@", data.author_comment_wide);
    footer_temp = footer_temp.replace("@@AUTHORCOMMENT@@", data.author_comment);

    load_footer_block.html(footer_temp);
}