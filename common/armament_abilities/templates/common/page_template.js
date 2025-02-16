const page_template = {
    main_template : `
        <div class="row-2">
            <div class="col chapter-title-mobile">Классы Bleach D&D 5e</div>
            <div class="col">
                <div class="row-2">
                    <div class="col armament-abilities-content">
                        @@ARMAMENTITEMDATACONTENT@@
                        <!-- armament-param -->
                    </div>
                    <div class="col stub-header">
                        data
                    </div>
                </div>
            </div>
        </div>
    `,    
//armament item 
    armament_item_template : `
        <div class="row-2 px-2">
            <div class="col armament-data">
                <p  class="name">
                    <span>@@ARMAMENTNAME@@</span>
                </p>
                <p class="cost-type half-gray">
                    <span>стоимость @@ARMAMENTCOST@@,</span>
                    <span>тип @@ARMAMENTTYPE@@</span>
                </p>
                <p>
                    <span class="param">Время накладывания:</span>
                    <span> </span>
                    <span class="half-gray">@@ARMAMENTCASTINGTIME@@</span>
                </p>
                <p>
                    <span class="param">Дистанция:</span>
                    <span> </span>
                    <span class="half-gray">@@ARMAMENTRANGE@@</span>
                </p>
                <p>
                    <span class="param">Компоненты:</span>
                    <span> </span>
                    <span class="half-gray">@@ARMAMENTCOMPONENTS@@</span>
                </p>
                <p>
                    <span class="param">Длительность:</span>
                    <span> </span>
                    <span class="half-gray">@@ARMAMENTDURATION@@</span>
                </p>
                <p>
                    <span class="param">Перезарядка:</span>
                    <span> </span>
                    <span class="half-gray">@@ARMAMENTRECHARGE@@</span>
                </p>
            </div>
            <div class="col">
                Описание
            </div>
        </div>
    `,
    title_name : "Способности вооружения Bleach D&D 5e"
}