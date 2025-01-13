function loadClass() {
    var name = getSearchParam('name');
    getClassPageData(name);
}

function getClassPageData(param) {
    const params = new URLSearchParams(window.location.search);
    return params.get(param);
}

function getRacePageData(race_name) {
    $.ajax({
        dataType: "json",
        url: '../../common/race/templates/common/page_template.json',
        success: function (data){
            getRaceData(data.page_template, race_name);
        },
        error: function (response) {
            // Отрисока меню и других основных элементов, вызвана для отрисовки в случае ошибки
            awake(2);
        }
    });
}