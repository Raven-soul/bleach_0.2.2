const page_template = {
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
                                                    <!-- grid data -->
                                                </div>                                                                    
                                            </div>                                                                                                                              -->
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
    ka_grid_item_template : `
        <div class="grid-abilities-item px-1">
            <a href="@@ITEMLINK@@" class="abilities-info-block">                                                                                
                <div class="row abilities-info-block-data">
                    <div class="col left-align-data">                                                                                            
                        <span class="level">
                            <span class="gray-font">[</span>@@ITEMLEVEL@@<span class="gray-font">]</span>
                        </span>
                        <span class="school-logo">
                            @@ITEMSCHOOLLOGO@@                                                                                   
                        </span>
                        <span class="name">@@ITEMNAME@@</span>
                    </div>
                    <div class="col-auto components">@@ITEMCOMPONENTS@@</div>
                </div>  
                <hr class="abilities-hr-gradient">                                                                                
            </a>
        </div>
    `,
    title_name : "Способности вооружения Bleach D&D 5e"
}