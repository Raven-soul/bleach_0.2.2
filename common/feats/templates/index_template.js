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
                    <div class="col" style="visibility:hidden;">
                        <p>data</p>
                    </div>
                    <div class="col abilities-grid">
                        <div class="armament-abilities-content">
                            <div class="row-2">
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
//kido-armament grid item
    bgr_grid_item_template : `
        <div class="grid-abilities-item px-1">
            <a href="@@ITEMLINK@@" class="abilities-info-block">                                                                                
                <div class="row abilities-info-block-data">
                    <div class="col left-align-data"> 
                        <span class="name">@@ITEMNAME@@</span>
                    </div>
                </div>  
                <hr class="abilities-hr-gradient">                                                                                
            </a>
        </div>
    `,
    title_name : "Черты Bleach D&D 5e"
}