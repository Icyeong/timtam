jQuery(document).ready(function ($) {



    //GALLERY OPEN EVENT
    var open = 0;

    $('.bar').click(function () {
        if (open == 0) {
            $('.gallery_section').transition({
                left: 0
            }, 1000, 'easeOutCubic');
            $('.logo').fadeOut(500);
            open++;
        } else if (open == 1) {
            $('.gallery_section').transition({
                left: -1135
            }, 1000, 'easeInOutCubic');
            $('.logo').fadeIn(1000);
            open = 0;
        }
    });


    // CLASSIC SECTION - TIMTAM SLIDE EVENT
    $('.timtam_classic').each(function (index) {
        $(this).attr('data-index', index);
    });

    $('.name').each(function(index){
        $(this).attr('data-index',index);
    });

    $('.nav').each(function (index) {
        $(this).attr('data-index', index);
    }).click(function () {
        var nav = $(this).attr('data-index');

        $('.timtam_classic').eq(nav).css({
            top: -230,
            zIndex: 10
        }).transition({
            top: 0
        }, 800, 'easeInOutCubic');

        $('.timtam_classic[data-index!=' + nav + ']').css({
            zIndex: 1
        }).transition({
            top: 230
        }, 900,'easeInOutCubic');

        $('.name').fadeOut(600);
        $('.name').eq(nav).fadeIn(900);

        $('.nav').removeClass('selected_nav');
        $('.nav').eq(nav).addClass('selected_nav');


    });


    var slide = 1;
    var auto = setInterval(function(){
        $('.nav').eq(slide).trigger('click');
        slide++;

        if(slide>5){
            slide = 0;
        }
    },1800);

    $('.timtam_classic').mouseenter(function(){
        clearInterval(auto);
    }).mouseleave(function(){
        auto = setInterval(function(){
            $('.nav').eq(slide).trigger('click');
            slide++;
    
            if(slide>5){
                slide = 0;
            }
        },1800);
    });
    

    // CRAFTED COLLECTION -> DETAIL SECTION EVENT
    $('.crafted_timtam').each(function(index){
        $(this).attr('data-index',index);
    }).click(function(){

        var selected = $(this).attr('data-index');

        $('.collection_detail_section').transition({
            width: 100 + 'vw'
        }, 1000, 'easeOutCubic');

        // $('.mo_collection_detail_section').fadeIn(800);

        $('.detail_imgBox').eq(selected).css({
            top:0
        });
        $('.detail_imgBox[data-index!='+selected+']').css({
            top:500
        });
        
        $('.crafted_txt').fadeOut(500);

        $('.crafted_txt').eq(selected).fadeIn(500);

        $('.crafted_menu').eq(selected).transition({
            color:'#858585',
            transform:'scale(0.9)'
        });
    });



    $('.close_collection').click(function () {
        $('.collection_detail_section').transition({
            width: 0
        }, 1000, 'easeInOutCubic');

        // $('.mo_collection_detail_section').fadeOut(800);

        $('.crafted_menu').transition({
            color:'black',
            transform:'scale(1)'
        });
    });

    

    // CRAFTED DETAIL SECTION EVENT
    $('.detail_imgBox').each(function(index){
        $(this).attr('data-index',index);
    });

    $('.crafted_txt').each(function(index){
        $(this).attr('data-index',index);
    });

    $('.crafted_menu').each(function(index){
        $(this).attr('data-index',index);
    }).click(function(){
        var crafted_menu = $(this).attr('data-index');

        $('.crafted_txt').fadeOut(500);
        $('.crafted_txt').eq(crafted_menu).fadeIn(500);


        $('.detail_imgBox[data-index!='+crafted_menu+']').transition({
            top:500
        },800);
        $('.detail_imgBox').eq(crafted_menu).css({
            top:-500
        }).transition({
            top:0
        },1000);

        $('.crafted_menu[data-index!='+crafted_menu+']').transition({
            color:'black',
            transform:'scale(1)'
        });
        $('.crafted_menu').eq(crafted_menu).transition({
            color:'#858585',
            transform:'scale(0.9)'
        });
        
    });

    // MOBILE CRAFTED DETAIL SLIDE EVENT
    $('.mo_imgBox').last().prependTo('.img_slide_container');

    var mo_slide = 0;
    $('.mo_timtam_name').each(function(index){
        $(this).attr('data-index',index);
    });
    $('.mo_crafted_txt').each(function(index){
        $(this).attr('data-index',index);
    });

    $('#right').click(function(){
        mo_slide++;
        if(mo_slide>4){
            mo_slide = 0;
        }
        $('.img_slide_container').animate({
            left:-200+'%'
        },function(){

            $('.mo_imgBox').first().appendTo('.img_slide_container');
            $('.img_slide_container').css({
                left:-100+'%'
            });
        });

        $('.mo_timtam_name[data-index!='+mo_slide+']').fadeOut(800);
        $('.mo_crafted_txt[data-index!='+mo_slide+']').fadeOut(800);
        $('.mo_timtam_name').eq(mo_slide).fadeIn(800);
        $('.mo_crafted_txt').eq(mo_slide).fadeIn(800);
        
    });

    $('#left').click(function(){
        mo_slide--;
        if(mo_slide<0){
            mo_slide = 4;
        }

        $('.img_slide_container').animate({
            left:0
        },function(){

            $('.mo_imgBox').last().prependTo('.img_slide_container');
            $('.img_slide_container').css({
                left:-100+'%'
            });

            $('.mo_timtam_name[data-index!='+mo_slide+']').fadeOut(800);
            $('.mo_crafted_txt[data-index!='+mo_slide+']').fadeOut(800);
            $('.mo_timtam_name').eq(mo_slide).fadeIn(800);
            $('.mo_crafted_txt').eq(mo_slide).fadeIn(800);
        });

        
    });


    // RECIPES_SECTION -> RECIPES_DETAIL_SECTION EVENT
    $('.detail_recipe_imgBox').each(function(index){
        $(this).attr('data-index',index);
    });

    $('.recipe_txt').each(function(index){
        $(this).attr('data-index',index);
    });

    $('.preparation_txt').each(function(index){
        $(this).attr('data-index',index);
    });

    $('.go_to_recipe').each(function(index){
        $(this).attr('data-index',index);

    }).click(function () {

        var recipe = $(this).attr('data-index');

        $('.recipes_detail').transition({
            transform: 'translate(0vw)'
        }, 1000, 'easeOutCubic');
    
        $('.detail_recipe_imgBox').css({
            zIndex:1
        });
        $('.detail_recipe_imgBox').eq(recipe).css({
            zIndex:10
        });
        $('.recipe_txt').eq(recipe).css({
            display:'block'
        });
        $('.preparation_txt').eq(recipe).css({
            display:'block'
        });
        $('.preparation').css({
            display:'none'
        });
        $('.ingredients').css({
            display:'block'
        });

    });

    $('.close_recipes').click(function () {
        $('.recipes_detail').transition({
            transform: 'translate(-100vw)',
            backgroundColor:'#DAF3F9'
        }, 1000, 'easeInOutCubic');

        $('.recipe_txt').fadeOut(1000);
        $('.preparation_txt').fadeOut(1000);
    });


    $('.tab:nth-child(1)').click(function(){
        $('.recipes_detail').transition({
            backgroundColor:'#DAF3F9'
        });

        $('.preparation').transition({
            display:'none'
        });
        $('.ingredients').transition({
            display:'block'
        });
    });


    $('.tab:nth-child(2)').click(function(){
        $('.recipes_detail').transition({
            backgroundColor:'#FFF4DD'
        });

        $('.ingredients').transition({
            display:'none'
        });

        $('.preparation').transition({
            display:'block'
        });
    });



    // TOP_BTN

    $('#top_btn').click(function(){
        $('body, html').animate({
            scrollTop:0
        },800);
    });




    //MOBILE RECIPES SECTION
    var ww = $(window).width();

    

    if(ww<800){

        $('.recipe_imgBox').each(function(index){
            $(this).attr('data-index',index);
        }).click(function(){

            var recipe = $(this).attr('data-index');

            $('.mo_txt').fadeOut(300);

            $('.recipes_detail').transition({
                backgroundColor:'#DAF3F9'
            });

            $('.recipe_imgBox[data-index!='+recipe+']').transition({
                transform:'scale(1)',
                filter: 'none'
            });

            $('.recipe_imgBox').eq(recipe).transition({
                transform:'scale(1.05)',
                filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))'
            });

            $('.recipe_txt, .preparation_txt').css({
                display:'none'
            });

            $('.recipe_txt').eq(recipe).css({
                display:'block'
            });
            $('.preparation_txt').eq(recipe).css({
                display:'block'
            });
            $('.preparation').css({
                display:'none'
            });
            $('.ingredients').css({
                display:'block'
            });

            $('.recipes_detail').css({
                transform: 'translate(0vw)'
            });


        });

    }



}); //end