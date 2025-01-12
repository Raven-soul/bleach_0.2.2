function loadRace() {
    debugger;
    var name = getSearchParam('name');
    getRacePageData(name);
}

function getSearchParam(param) {
    const params = new URLSearchParams(window.location.search);
    return params.get(param);
}

function getRacePageData(race_name) {
    $.ajax({
        dataType: "json",
        url: '../../common/race/templates/common/page_template.json',
        success: function (data){
            debugger;
            getRaceData(data.page_template, race_name);
        },
        error: function (response) {
            debugger;
            // Отрисока меню и других основных элементов, вызвана для отрисовки в случае ошибки
            awake(2);
        }
    });
}

function getRaceData (page_template, race_name) {
    $.ajax({
        dataType: "json",
        url: `../../common/race/templates/${race_name}/${race_name}.json`,
        success: function (data){
            var race_load_area_block = $(".info-block");
            var summ_html_block = "";

            let race_tepm = page_template;

            let comment = `<p>${data.comment.race_comment}</p><p>${data.comment.comment_autor}</p>`;
            let content = "";

            race_tepm = race_tepm.replace("@@RACETITLENAME@@", data.title_name);
            race_tepm = race_tepm.replace("@@RACESHORTNAME@@", data.race_name);
            race_tepm = race_tepm.replace("@@RACESORCEDATA@@", data.sorce_name);

            race_tepm = race_tepm.replace("@@RACECOMMENTAREA@@", comment);

            data.content.area.forEach((content_area) => {
                var part_content = "";
                
                if(content_area.name == ""){}
                else {part_content = `<h3>${content_area.name}</h3>`}

                content_area.content.forEach((element) => {
                    if(element.line == '' && element.div != '') {
                        part_content += element.div;
                    } 
                    else {
                        part_content += `<p>${element.line}</p>`;
                    }
                    
                });

                content += part_content;
            });

            race_tepm = race_tepm.replace("@@RACECONTENTAREA@@", content);

            summ_html_block += race_tepm;
            race_load_area_block.html( summ_html_block );

            // Название расы в заголовке
            var chapter_title = $(".chapter-title-label");
            chapter_title.html(data.title_name);

            // Отрисока меню и других основных элементов, будет происходить здесь, уже после отрисовки страницы
            awake(2);
        },
        error: function (response) {
            // Отрисока меню и других основных элементов, вызвана для отрисовки в случае ошибки
            awake(2);
        }
    });
}