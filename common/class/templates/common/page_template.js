
const page_template = {
    "page_template" : `
        <div class="row-2">
            <div class="col chapter-title-mobile">@@CLASSTITLENAME@@</div>
            <div class="col">
                <div class="race-class-data-area">
                    <div class="back-image">
                        <img src="@@CLASSBACKIMAGE@@"
                            alt="back">
                    </div>
                    <div class="main-content-block">
                        <div class="title-block">
                            <div class="row-3">
                                <div class="col race-class-name">
                                    <p>@@CLASSNAME@@</p>
                                </div>
                                <div class="col race-class-source">
                                    <p><strong>Источник:</strong> @@CLASSSORCENAME@@</p>
                                </div>
                                <div class="col race-class-citation">
                                    <p>@@CLASSCOMMENTDATA@@</p>
                                    <p>@@CLASSCOMMENTAUTOR@@</p>
                                </div>
                            </div>
                        </div>
                        <div class="content-block">
                            @@CLASSPRETABLECONTENT@@
                        </div>
                        <div class="content-block">
                            <div class="sub-menu" hidden>
                                <h5>Меню</h5>
                                <a href="#">data</a>
                                <a href="#">data</a>
                                <a href="#">data</a>
                                <a href="#">data</a>
                            </div>
                            <div class="table">
                                @@CLASSTABLECONTENT@@
                            </div>
                            <div class="content">
                                @@CLASSCONTENTDATA@@
                                @@CLASSSPOILERBLOCK@@                     
                            </div>
                        </div>
                    </div>
                </div>
                <div class="image-block" hidden>
                    <div class="row-2">
                        <div class="col">
                            <h6>Галерея</h6>
                        </div>
                        <div class="col">
                            <div class="image-gallery-data-set">
                                @@CLASSIMAGEBLOCK@@
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ` ,
    "data_content": `
        <div class="data-content">
            @@CLASSDATACONTENTELEMENT@@
        </div>
    `,
    "spoiler_main" : `
        <div class="spoiler">
            <h1>@@CLASSSPOILERNAME@@</h1>
            @@CLASSSPOILERDESCRIPTION@@
            @@CLASSSPOILERCONTENT@@
        </div>
    `,
    "spoiler_block" : `
        <div class="spec-info-block">
            <h1 class="hide-next" id="@@CLASSSPOILERID@@"
                onclick="specializationBlockHide('hb', this)">@@CLASSSPOILERBLOCKNAME@@
            </h1>
            <div class="hidden-data-item hb-@@CLASSSPOILERID@@">
                @@CLASSSPOILERPREVIEW@@
                @@CLASSSPOILERDATACONTENT@@
            </div>
        </div>
    `,
    "image_block" : `
        <div class="image-data">
            <img onclick="galleryShow(this)"
                src="@@CLASSIMAGESRC@@"
                alt="@@CLASSIMAGEALT@@">
        </div>
    `
}