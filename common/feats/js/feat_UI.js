function getFilter() {
    var filter = new Map();
    var filterTags = $(".filter-grid-group-data-item select");

    for (var i = 0; i < filterTags.length; i++) {
        filter.set(filterTags[i].getAttribute("id").split('_')[0], filterTags[i].options[filterTags[i].selectedIndex].value);
    }

    return filter;
}

function checkFilter(filter = new Map(), featValue) {
    var result = true;
    if (filter.get('tp') == 'all') { }
        else if (filter.get('tp') == featValue.type.name) { }
        else result = false;
    return result;
}

function changeFilter(element){
    var data = index_template;

    if(element.options[element.selectedIndex].value == "discard"){
        element.selectedIndex = 0;
    }

    showFeats(data);
    windowHeightCheckForFooter();
}