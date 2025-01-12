function getTxt(){
  
      $.ajax({
        dataType: "json",
        url:'common/main/templates/menu/menu.json',
        success: function (data){
            // var a = JSON.parse(data);
            alert(data.menu_item_template);
        }
      });
}