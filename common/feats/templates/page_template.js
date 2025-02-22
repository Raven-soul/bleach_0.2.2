const page_template = {
    main_template : `
        <div class="row-2">
            <div class="col chapter-title-mobile">Классы Bleach D&D 5e</div>
            <div class="col">
                <div class="row-2">
                    <div class="col armament-abilities-content">
                        @@FEATITEMDATACONTENT@@
                        <!-- armament-param -->
                    </div>
                    <div class="col stub-header">
                        data
                    </div>
                </div>
            </div>
        </div>
    `,    
//feat item 
    feat_item_template : `
        <div class="row-2 px-2">
            <div class="col armament-data">
                <p  class="name">
                    <span>@@FEATNAME@@</span>
                </p>
            </div>
            <div class="col race-class-data-area">
                @@FEATDESCRIPTIONDATA@@
            </div>
            <div class="col" style="visibility:hidden">
                <p>data</p>
            </div>
        </div>
    `,
    "data_content": `
        <div class="data-content content-block">
            @@FEATDATACONTENTELEMENT@@
        </div>
    `,
    title_name : "Черты Bleach D&D 5e"
}