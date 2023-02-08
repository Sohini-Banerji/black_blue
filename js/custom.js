// Preloader -section
    //-------------------------------------------------------
  // Preloader 
  jQuery(window).on('load', function() {
    jQuery("#status").fadeOut();
    jQuery("#preloader").delay(350).fadeOut("slow");
});


    /*----------------------------
        isotope active
        ------------------------------ */  
        $(window).load(function () {			
            var $grid = $('.grid').isotope({
            itemSelector: '.grid-item',
            stagger: 30
          });

          $('.filter-demo').on( 'click', '.button', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
          });

          // change is-checked class on buttons

          $('.filter').each( function( i, buttonGroup ) {
            var $buttonGroup = $( buttonGroup );
            $buttonGroup.on( 'click', '.button', function() {
              $buttonGroup.find('.is-checked').removeClass('is-checked');
              $( this ).addClass('is-checked');
            });
          });
          
           });

//--------------------up scroll js-----------------------------
                        // ===== Scroll to Top ==== 
                    $(window).scroll(function() {
                        if ($(this).scrollTop() >= 100) {       
                            $('#return-to-top').fadeIn(200);   
                        } else {
                            $('#return-to-top').fadeOut(200);  
                        }
                    });
                    $('#return-to-top').click(function() {     
                        $('body,html').animate({
                            scrollTop : 0                
                        }, 500);
                    });
        // ===== Scroll to Top end ==== 
            
                /*section-1 slider js */
            $(document).ready(function() {
          $('.header_slider_wrapper .owl-carousel').owlCarousel({
            loop: true,
            margin: 10,
            autoplay:true,
            smartSpeed: 1200,
            responsiveClass: true,
            navText : ['<i class="fa fa-arrow-circle-left"></i>','<i class="fa fa-arrow-circle-right"></i>'],
            responsive: {
              0: {
                items: 1,
                nav: true
              },
              600: {
                items: 1,
                nav: true
              },
              1000: {
                items: 1,
                nav: true,
                loop: true,
                margin: 0
              }
            }
          })
})

            // placeholder remove
        function removePlaceholder () {
          if ($("input,textarea").length) {
            $("input,textarea").each(
                    function(){
                        $(this).data('holder',$(this).attr('placeholder'));
                        $(this).on('focusin', function() {
                            $(this).attr('placeholder','');
                        });
                        $(this).on('focusout', function() {
                            $(this).attr('placeholder',$(this).data('holder'));
                        });
                        
                });
          }
        }

    

    var tpj=jQuery;
                
                var revapi1050;
                tpj(document).ready(function() {
                    if(tpj("#rev_slider_1050_1").revolution == undefined){
                        revslider_showDoubleJqueryError("#rev_slider_1050_1");
                    }else{
                revapi1050 = tpj("#rev_slider_1050_1").show().revolution({
                    sliderType:"standard",
                    jsFileLocation:"revolution/js/",
                    sliderLayout:"fullscreen",
                    dottedOverlay:"none",
                    delay:9000,
                    navigation: {
                        keyboardNavigation:"on",
                        keyboard_direction: "horizontal",
                        mouseScrollNavigation:"off",
                         mouseScrollReverse:"default",
                        onHoverStop:"off",
                        touch:{
                            touchenabled:"on",
                            swipe_threshold: 75,
                            swipe_min_touches: 50,
                            swipe_direction: "horizontal",
                            drag_block_vertical: false
                        },
                        arrows: {
                style:"uranus",
                enable:true,
                hide_onmobile:true,
                hide_onleave:true,
                tmp:'',
                left: {
                    h_align:"left",
                    v_align:"center",
                    h_offset:0,
                    v_offset:10
                },
                right: {
                    h_align:"right",
                    v_align:"center",
                    h_offset:0,
                    v_offset:10
                }
            }
                        ,
                        bullets: {
                            enable:true,
                            hide_onmobile:false,
                            hide_under:1024,
                            style:"hephaistos",
                            hide_onleave:false,
                            direction:"horizontal",
                            h_align:"center",
                            v_align:"bottom",
                            h_offset:0,
                            v_offset:40,
                            space:10,
                            tmp:''
                        }
                    },
                    responsiveLevels:[1240,1024,778,480],
                    visibilityLevels:[1240,1024,778,480],
                    gridwidth:[1400,1240,778,480],
                    gridheight:[868,768,960,720],
                    lazyType:"none",
                    shadow:0,
                    spinner:"spinner2",
                    stopLoop:"on",
                    stopAfterLoops:0,
                    stopAtSlide:1,
                    shuffle:"off",
                    autoHeight:"off",
                    fullScreenAutoWidth:"off",
                    fullScreenAlignForce:"off",
                    fullScreenOffsetContainer: "",
                    fullScreenOffset: "",
                    disableProgressBar:"on",
                    hideThumbsOnMobile:"off",
                    hideSliderAtLimit:0,
                    hideCaptionAtLimit:0,
                    hideAllCaptionAtLilmit:0,
                    debugMode:false,
                    fallbacks: {
                        simplifyAll:"off",
                        nextSlideOnWindowFocus:"off",
                        disableFocusListener:false,
                    }
                });
            }
        });	/*ready*/
        

    /*----------------------------
    wow js active
    ------------------------------ */
        new WOW().init();

// -------------------------------------------------------------
// Progress Bar
// -------------------------------------------------------------

$('.progressFive').on('inview', function(event, visible, visiblePartX, visiblePartY) {
    if (visible) {
        $.each($('div.progress-bar'),function(){
            $(this).css('width', $(this).attr('aria-valuenow')+'%');
        });
        $(this).off('inview');
    }
});			
          
  //-------------------------------------------------------
// counter Four
//-------------------------------------------------------
(function () {
        $('.counterFour').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
            if (visible) {
                $(this).find('.timer').each(function () {
                    var $this = $(this);
                    $({ Counter: 0 }).animate({ Counter: $this.text() }, {
                        duration: 2000,
                        easing: 'swing',
                        step: function () {
                            $this.text(Math.ceil(this.Counter));
                        }
                    });
                });
                $(this).unbind('inview');
            }
        });

}());


                        // Tweeter Slider	
$('.btn-vertical-slider').on('click', function () {
    
    if ($(this).attr('data-slide') == 'next') {
        $('#myCarousel').carousel('next');
    }
    if ($(this).attr('data-slide') == 'prev') {
        $('#myCarousel').carousel('prev')
    }

});
    
     /* 09. VENOBOX JS */
        $('.venobox').venobox({
            numeratio: true,
            titleattr: 'data-title',
            titlePosition: 'top',
            spinner: 'wandering-cubes',
            spinColor: '#007bff'
        });
        

    $(document).ready(function() {
        $('.cc_ps_top_slider_section .owl-carousel').owlCarousel({
            loop: true,
            margin: 10,
            autoplay: false,
            responsiveClass: true,
            smartSpeed: 1200,
            navText: ['<i class="fa fa-angle-double-left" aria-hidden="true"></i>', '<i class="fa fa-angle-double-right" aria-hidden="true"></i>'],
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                600: {
                    items: 1,
                    nav: true
                },
                1000: {
                    items: 1,
                    nav: true,
                    loop: true,
                    margin: 20
                }
            }
        })
    })


              
    /*section-2 slider js */	
    $(document).ready(function() {
    $('.section2_slider_wrapper .owl-carousel').owlCarousel({
            loop: true,
            margin: 10,
            autoplay:false,
            smartSpeed: 1200,
            responsiveClass: true,
            navText : ['<i class="fa fa-long-arrow-left" aria-hidden="true"></i>','<i class="fa fa-long-arrow-right" aria-hidden="true"></i>'],
            responsive: {
              0: {
                items: 1,
                nav: true
              },
              600: {
                items: 1,
                nav: true
              },
              1000: {
                items: 1,
                nav: true,
                loop: true,
                margin: 20
              }
            }
    })
})

    //*-----------------------owl caouresel Team---------------------------*//	
    $(document).ready(function() {
          $('.team_slider_wrapper .owl-carousel').owlCarousel({
            loop: true,
            smartSpeed: 1200,
            margin: 10,
            variableWidth:true,
                            autoplay:false,
            responsiveClass: true,
                            navText : ['<i class="fa fa-long-arrow-left" aria-hidden="true"></i>','<i class="fa fa-long-arrow-right" aria-hidden="true"></i>'],
            responsive: {
              0: {
                items: 1,
                nav: true
              },
              600: {
                items: 2,
                nav: true
              },
              1000: {
                items: 4,
                nav: true,
                loop: true,
                margin: 30
              }
            }
          })
        });		
        // $('.boxes').owlCarousel({

        //   loop:true,
        //   margin:10,
        //   nav:true,
        //   smartSpeed: 1200,
        //   responsive:{
        //       0:{
        //           items:1,
        //           nav: true,
        //       },
        //       600:{
        //           items:2,
        //           nav: true,
        //       },
        //       1000:{
        //           items:3,
        //           nav: true,
               
        
                  
        //       }
        //   }
        // })
        
        //*-----------------------owl caouresel Team---------------------------*//	
    $(document).ready(function() {
          $('.product_slider_wrapper .owl-carousel').owlCarousel({
            loop: true,
            smartSpeed: 1200,
            margin: 10,
                            autoplay:false,
            responsiveClass: true,
                            navText : ['<i class="fa fa-long-arrow-left" aria-hidden="true"></i>','<i class="fa fa-long-arrow-right" aria-hidden="true"></i>'],
            responsive: {
              0: {
                items: 1,
                nav: true
              },
              600: {
                items: 2,
                nav: true
              },
              1000: {
                items: 3,
                nav: true,
                loop: true,
                margin: 30
              }
            }
          })
        });
        
    $(document).ready(function() {
        $('.hs_blog_box1_img_wrapper .owl-carousel').owlCarousel({
            loop: true,
            margin: 10,
            autoplay: true,
            responsiveClass: true,
            smartSpeed: 1200,
            navText : ['<i class="fa fa-long-arrow-left" aria-hidden="true"></i>','<i class="fa fa-long-arrow-right" aria-hidden="true"></i>'],
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                600: {
                    items: 1,
                    nav: true
                },
                1000: {
                    items: 1,
                    nav: true,
                    loop: true,
                    margin: 20
                }
            }
        })
    })
        
    /*******----------about us slider-----***********/
        $(document).ready(function() {
          $('.aboutus_slider_wrapper .owl-carousel').owlCarousel({
            loop: true,
            smartSpeed: 1200,
            margin: 10,
                            autoplay:false,
            responsiveClass: true,
                            navText : ['<i class="fa fa-long-arrow-left" aria-hidden="true"></i>','<i class="fa fa-long-arrow-right" aria-hidden="true"></i>'],
            responsive: {
              0: {
                items: 1,
                nav: true
              },
              600: {
                items: 1,
                nav: true
              },
              1000: {
                items: 1,
                nav: true,
                loop: true,
                margin: 30
              }
            }
          })
        });
    
    $(document).ready(function() {
        $('.pn_slider_wraper .owl-carousel').owlCarousel({
            loop: true,
            margin: 10,
            autoplay: true,
            responsiveClass: true,
            smartSpeed: 1200,
            navText : ['<i class="fa fa-long-arrow-left" aria-hidden="true"></i>','<i class="fa fa-long-arrow-right" aria-hidden="true"></i>'],
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                500: {
                    items: 2,
                    nav: true
                },
                700: {
                    items: 3,
                    nav: true
                },
                1000: {
                    items: 5,
                    nav: true,
                    loop: true,
                    margin: 20
                }
            }
        })
    })
    
    

  /********************************************
04. jQuery SlickNav / Onepage Mobile menu
********************************************/
$('.mainmenu').slicknav({
    label: '',
    duration: 700,
    easingOpen: "easeOutBounce",
    prependTo: '#mobileMenu',
    closeOnClick: true
});

/********************************************
05. jQuery MeanMenu / Multipage Mobile menu
********************************************/
$('.mobile-menu nav').meanmenu({
    meanScreenWidth: "999",
    meanMenuContainer: ".mobile-menu"
});


// Menu js for Position fixed
            $(window).scroll(function(){
                var window_top = $(window).scrollTop() + 1; 
                if (window_top > 30) {
                    $('.transparent-menu').addClass('menu_fixed animated fadeIn');
                } else {
                    $('.transparent-menu').removeClass('menu_fixed animated fadeIn');
                }
            });
            
    
/*----------------------------
9. list grid view active
------------------------------ */ 
$('#listview').on('click',function(event){
    event.preventDefault();
    $('.products').addClass('list-item');
});
$('#gridview').on('click',function(event){
    event.preventDefault();
    $('.products').removeClass('list-item');
    $('.products').addClass('grid-item'); 
});		


// let loadMoreBtn = document.querySelector('#load-more');
// let currentItem = 10;

// loadMoreBtn.onclick = () =>{
//   let images = [...document.querySelectorAll('.gallery-area .container-fluid .row #gal .grid-item')];
//   for(var i = currentItem; i < currentItem + 5; i++){
//     images[i].style.display = 'block';
//   }
//   currentItem += 5;
// }
    