const index_template = {
    main_template : `
        <div class="row-2">
            <div class="col chapter-title-mobile">Классы Bleach D&D 5e</div>
            <div class="col">
                <div class="row-2">
                    <div class="col">
                        <div class="filter-above-grig-oficial">
                            <p>Homebrew</p>
                        </div>
                    </div>
                    <div class="col">
                        <div class="filter-grid-group">
                            <div class="grid-group-data"> 
                                <!-- selector group -->
                                @@ARMAMENTFILTERDATACONTENT@@
                            </div>
                        </div>
                    </div>
                    <div class="col abilities-grid">
                        <div class="armament-abilities-content">
                            <div class="row-2">
                                <div class="col" style="margin-bottom: 15px;">
                                    <div class="prompt-area">
                                        <div class="prompt">
                                            <div class="prompt-data prompt-type">
                                                <!-- prompt-type --> 
                                                @@FEATPROMPTDATACONTENT@@
                                            </div>
                                            <hr> 
                                        </div>                                      
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="armament-abilities-content-data">                                                            
                                        <div class="row armament-filtered-area">
                                            <div class="col-auto" hidden>
                                                <p class="vertical-group-name">data</p>
                                            </div>
                                            <div class="col">
                                                <div class="grid-abilities-data">
                                                    @@FEATELEMENT@@
                                                </div>                                                                    
                                            </div>
                                        </div>                                                      
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col stub-header">
                        data
                    </div>
                </div>
            </div>
        </div>
    `,
// filter - selector
    selector_template :`
        <div class="filter-grid-group-data-item">
            <div class="col">
                <select name="@@SELECTORNAME@@" id="@@SELECTORID@@" onchange="@@SELECTORFUNCTION@@">
                    @@SELECTORBODY@@                            
                </select>
            </div>                                                        
        </div>
    `, 
    selector_default_item_template : `
        <option value="all" disabled selected>@@DEFITEMNAME@@</option>
    `,
    selector_item_template : `
        <option value="@@ITEMVALUE@@" armtype="@@ITEMTYPE@@">@@ITEMNAME@@</option>
    `,
//kido-armament grid item
    bgr_grid_item_template : `
        <div class="grid-abilities-item px-1">
            <a href="@@ITEMLINK@@" class="abilities-info-block">                                                                                
                <div class="row abilities-info-block-data">
                    <div class="col left-align-data"> 
                        <span class="school-logo">
                            @@ITEMSCHOOLLOGO@@                                                                                   
                        </span>
                        <span class="name">@@ITEMNAME@@</span>
                    </div>
                </div>  
                <hr class="abilities-hr-gradient">                                                                                
            </a>
        </div>
    `,
    title_name : "Черты Bleach D&D 5e"

}