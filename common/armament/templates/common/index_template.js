const index_template = {
    main_template : `
    <div class="row-2">
        <div class="col chapter-title-mobile">
            @@CLASSTITLENAME@@
        </div>
        <div class="col">
            <div class="row-2">
                @@RACECONTENTDATA@@
            </div>
        </div>
    </div>
    `,
    group_template : `
    <div class="grid-group">
        <div class="grid-group-name">
            @@CLASSGROUPNAME@@
        </div>
        <div class="grid-group-data">
            @@RACEGROUPCONTENT@@
        </div>
    </div>
    `,
    group_element_template : `
    <div class="grid-group-data-item">
        <a href="@@CLASSHREF@@">
            <div class="button-view">
                <div class="row-2 ps-2 cr-name">
                    <div class="col cr-name-head">
                        @@CLASSNAME@@
                    </div>
                    <div class="col cr-name-append">
                        @@CLASSNAMEENG@@
                    </div>
                </div>
                <img src="@@CLASSLOGO@@" alt="@@CLASSNAMEENG@@">
            </div>
        </a>
    </div>
    `,
    title_name : "Вооружение Bleach D&D 5e",
    group_list : [
        {
            "group_name" : "Вооружение",
            "list" : [
                {
                    "class_href" : "#",
                    "class_name" : "Занпакто", 
                    "class_name_eng" : "Zanpakutō",
                    "class_logo" : "#"
                },
                {
                    "class_href" : "#",
                    "class_name" : "Святой лук", 
                    "class_name_eng" : "Heilig Bogen",
                    "class_logo" : "#"
                },
                {
                    "class_href" : "#",
                    "class_name" : "Подчинение", 
                    "class_name_eng" : "Fullbring",
                    "class_logo" : "#"
                },
                {
                    "class_href" : "#",
                    "class_name" : "Кукла", 
                    "class_name_eng" : "Doll",
                    "class_logo" : "#"
                }
            ]
        }
    ]
}