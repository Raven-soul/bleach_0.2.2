function loadArmament(order_num) {    
    getArmamentPageData(order_num);
}

function getSearchParam(param) {
    const params = new URLSearchParams(window.location.search);
    return params.get(param);
}

function getArmamentPageData(order_num){
    let armament_id = getSearchParam('id');
    let data = page_template;

    var class_load_area_block = $(".info-block");
    let index_temp = data.main_template;

    let armament = armamentAbilitiesContent[armament_id];

    let armament_temp = data.armament_item_template;
    armament_temp = armament_temp.replace("@@ARMAMENTNAME@@", armament.name);
    armament_temp = armament_temp.replace("@@ARMAMENTCOST@@", armament.cost);
    armament_temp = armament_temp.replace("@@ARMAMENTTYPE@@", armament.type.name);
    armament_temp = armament_temp.replace("@@ARMAMENTCASTINGTIME@@", armament.castingTime);
    armament_temp = armament_temp.replace("@@ARMAMENTRANGE@@", armament.range);

    var componentsSum = '';

    if(armament.components.verbal)   {componentsSum = "В";}
        else {componentsSum = ".";} 
    if(armament.components.somatic)  {componentsSum += "С";}
        else {componentsSum += ".";} 
    if(armament.components.material) {componentsSum += "М";}
        else {componentsSum += ".";} 
    if(armament.components.released) {componentsSum += "Р";}
        else {componentsSum += ".";} 

    if(componentsSum == "....") { componentsSum = "Нет"; }

    armament_temp = armament_temp.replace("@@ARMAMENTCOMPONENTS@@", componentsSum);
    
    var durationSum = '';

    if(armament.duration.until_sealed)   { durationSum = durationCol.until_sealed; }
    if(armament.duration.concentration)  { if(durationSum != "") {durationSum += ", "} durationSum += durationCol.concentration; }
    if(armament.duration.minute1)        { if(durationSum != "") {durationSum += ", "} durationSum += durationCol.minute1; }
    if(armament.duration.round1)         { if(durationSum != "") {durationSum += ", "} durationSum += durationCol.round1; }
    if(armament.duration.instantaneous)  { if(durationSum != "") {durationSum += ", "} durationSum += durationCol.instantaneous; }
    if(armament.duration.hour1)          { if(durationSum != "") {durationSum += ", "} durationSum += durationCol.hour1; }
    if(armament.duration.minute5)        { if(durationSum != "") {durationSum += ", "} durationSum += durationCol.minute5; }
    if(armament.duration.round2)         { if(durationSum != "") {durationSum += ", "} durationSum += durationCol.round2; }
    if(armament.duration.special)        { if(durationSum != "") {durationSum += ", "} durationSum += durationCol.special; }
    if(durationSum == "") { durationSum = "Нет"; }

    armament_temp = armament_temp.replace("@@ARMAMENTDURATION@@", durationSum);    
    armament_temp = armament_temp.replace("@@ARMAMENTRECHARGE@@", armament.recharge);

    index_temp = index_temp.replace("@@ARMAMENTITEMDATACONTENT@@", armament_temp);

    class_load_area_block.html(index_temp);

    //Название расы в заголовке
    let name_block = $(".chapter-title-label");
    name_block.html( armament.name + " - Способности вооружения" );

    // Отрисока меню и других основных элементов, будет происходить здесь, уже после отрисовки страницы
    awake(order_num);
}