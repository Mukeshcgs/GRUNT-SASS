/* SITE CODE -------------------------------------------------------------------------------------- */
$(document).ready(function() {
    $(document).scroll(function() {
        window_scroll();
    });
    window_scroll();
    $(window).resize(function() {
        window_resize();
    });
    window_resize();

    var screen_width = $(window).width() + scrollBarWidth();

    $('.menu_button').click(openSideMenu);
    $('.content').click(closeSideMenu);
    launchWebsite(200);
    if (pgkind == 1 || pgkind == 2) {} else {
        $('#logo_wrapper').css({
            "-webkit-transform": "translate(0px,0px)",
            "-ms-transform": "translate(0px,0px)",
            "transform": "translate(0px,0px)"
        });
    }

    launchFullContent();

    if (Modernizr.touch) {
        $('.selectric_holder').addClass('hideRollDown');
        $('#product_detail_filter, #mobile_filter, #favourite_item_filter, #favourite_item_filter_left, #favourite_item_filter_right').change(function() {
            var select_val = $(this).val();
            $(this).val(select_val).selectric('refresh');
        });

        $('.foto_contain_wrapper, .full_width_image').css('transform', '');
    }

    if (pgkind == 3) {
        // page: producten
        doGridFiltering();

        if (pgkind_detailid > 0) {
            doStickySidebar();
        }

        $('#mobile_filter').selectric({
            disableOnMobile: false,
            expandToItemText: true,
            maxHeight: 600
        });

        $('#mobile_filter').change(function() {
            var filter_id = $(this).val();
            var link = $('#catlink_' + filter_id).attr('href');
            window.location.href = link;
        });

        $('#mobile_filter').change(function() {
            $('.selectricItems ul li').first().text('Alles');
        });

        $('#product_detail_filter').selectric({
            maxHeight: 600,
            disableOnMobile: false,
            expandToItemText: true,
        });

        //do order form
        var formOpen = false;
        $('a.add_btn').one("click", addItemsToFavourites);

        if (!$('#product_detail_filter').length > 0) {
            $('.product_number_right').addClass('expand');
            $('.product_number_left').css('display', 'none');
        }

        //
        doProductDetailSizeChange();
    }

    if (pgkind == 6) {
        // page: contact
        launchContact();

        if (screen_width > 768) {
            var mapcanvas = document.getElementById('map_canvas');
            doContactMap(mapcanvas);
        } else {
            var mapcanvas2 = document.getElementById('mobile_map_canvas');
            doContactMap(mapcanvas2);
        }
    }

    if (pgkind == 7) {
        // page: disclaimer
        TweenLite.to($('.disclaimer_wrapper'), 0.4, {
            css: {
                opacity: 1
            },
            ease: Cubic.easeInOut,
            delay: 0.8
        });
    }

    if (pgkind == 5) {
        // page: favorieten
        $('.favourite_item_filter').selectric({
            maxHeight: 600,
            disableOnMobile: false,
            expandToItemText: true
        });

        $('.product_detail_filter_left').selectric({
            maxHeight: 600,
            disableOnMobile: false,
            expandToItemText: true
        });

        $('.product_detail_filter_right').selectric({
            maxHeight: 600,
            disableOnMobile: false,
            expandToItemText: true
        });

        $('#favourites_wrapper').css('background-color', '#f4f1f1');

        doFavouriteItems();
        removeItemsFromFavourites();
    }

    launchGridAnimation(1);
    doTextBlockHovers();
    doGridHovers();
    doFavouriteBaskerHover();

    $('.full_grid').imagesLoaded(function() {
        $('.full_grid').masonry({
            itemSelector: '.grid_block',
            transitionDuration: 0
        });
    });

    $('.selectric .button').text('');

    //$('.grid_block').css('opacity', '0');

    $('#menu_list li a').mouseenter(function() {
        TweenLite.to($(this).find('.arrow'), 0.4, {
            css: {
                opacity: 1,
                right: -33
            },
            ease: Cubic.easeInOut
        });
    }).mouseleave(function() {
        TweenLite.to($(this).find('.arrow'), 0.4, {
            css: {
                opacity: 0,
                right: -15
            },
            ease: Cubic.easeInOut
        });
    })

    $('a.filter.active').removeClass('hvr-underline-from-center');


    $('#menu_side').mousemove(function() {
        if (!Modernizr.touch) {
            $('.grid_caption').each(function() {
                $(this).css('opacity', 0);
            });
        }
    });
});


function doProductDetailSizeChange() {
    $('#product_detail_filter').change(function() {
        var val = parseInt($(this).val());
        $('.product_price, .product_size').removeClass('show');
        $('#size_price_' + val + ", #size_" + val).addClass('show');
    });
}

function openSideMenu() {
    var menu = $('#menu');
    var screen_width = $(window).width() + scrollBarWidth();
    if (!menuOpen) {
        if (screen_width < 500) {
            TweenLite.to(menu, 0.02, {
                width: percentToPixel(menu, 100) + "px",
                ease: Quint.easeOut
            });
        } else if (screen_width > 500 && screen_width < 700) {
            TweenLite.to(menu, 0.02, {
                width: percentToPixel(menu, 54.5) + "px",
                ease: Quint.easeOut
            });
        } else {
            TweenLite.to(menu, 0.6, {
                width: percentToPixel(menu, 54.5) + "px",
                ease: Quint.easeOut
            });
        }

        doInnerMenuAnimations(0.1);
        $('#logo_wrapper').addClass('open');
        menuOpen = true;
        $('.text_block_special').css('z-index', '1000');

    } else {
        if (screen_width > 1000) {
            setTimeout(function() {
                TweenLite.to(menu, 0.6, {
                    width: 0,
                    ease: Quint.easeOut,
                    onComplete: function() {
                        $('.text_block_special').css('z-index', '9001');
                    }
                });

            }, 250);
        } else if (screen_width > 500 && screen_width < 1000) {
            setTimeout(function() {
                TweenLite.to(menu, 0.4, {
                    width: 0,
                    ease: Quint.easeOut,
                    onComplete: function() {
                        $('.text_block_special').css('z-index', '9001');
                    }
                });

            }, 390);
        } else {
            setTimeout(function() {
                TweenLite.to(menu, 0.2, {
                    width: 0,
                    ease: Quint.easeOut,
                    onComplete: function() {
                        $('.text_block_special').css('z-index', '9001');
                    }
                });

            }, 390);
        }
        $('#logo_wrapper').removeClass('open');
        var wrapper_a = $('a.link_wrapper');
        removeInnerMenuAnimations(0.1);
        menuOpen = false;
    }
}

function closeSideMenu() {
    var screen_width = $(window).width() + scrollBarWidth();

    if (screen_width > 1000) {
        setTimeout(function() {
            TweenLite.to(menu, 0.6, {
                width: 0,
                ease: Quint.easeOut,
                onComplete: function() {
                    $('.text_block_special').css('z-index', '9001');
                }
            });
        }, 250);
    } else {
        setTimeout(function() {
            TweenLite.to(menu, 0.2, {
                width: 0,
                ease: Quint.easeOut,
                onComplete: function() {
                    $('.text_block_special').css('z-index', '9001');
                }
            });
        }, 390);
    }
    removeInnerMenuAnimations(0.1)
    $('#logo_wrapper').removeClass('open');
    menuOpen = false;
}

var menuOpen = false;

function doInnerMenuAnimations(delay) {
    //1. OPEN MENU LOGO
    var screen_width = $(window).width() + scrollBarWidth();
    var logo = $('.logo');
    var mobileLogo = $('.mobile_logo');

    enableLogoClick();

    if (screen_width > 1000) {
        $(logo).removeClass('open');
        TweenLite.to(logo, 1, {
            delay: delay + 0.25,
            ease: Quint.easeOut,
            css: {
                left: 165,
                width: 294
            }
        });
    } else if (screen_width < 1000 && screen_width > 720) {
        TweenLite.to(logo, 1, {
            delay: delay + 0.25,
            ease: Quint.easeOut,
            css: {
                left: 0,
                width: 294
            }
        });
        $(logo).addClass('open');
    } else if (screen_width < 720 && screen_width > 500) {
        TweenLite.to(logo, 1, {
            delay: delay + 0.25,
            ease: Quint.easeOut,
            css: {
                left: 0,
                width: 195
            }
        });
        $(logo).addClass('open');
    } else {
        TweenLite.to(mobileLogo, 1, {
            delay: delay + 0.1,
            ease: Quint.easeOut,
            css: {
                left: 45,
                opacity: 1,
                width: 195
            }
        });
    }

    //2. LINK LIST
    var timeOut = 0;

    if (screen_width > 500) {
        timeOut = 500;
    } else {
        timeOut = 100;
    }

    setTimeout(function() {
        var secondDelay = 0;
        $('#menu_list li').each(function() {
            secondDelay = secondDelay + 0.1;
            var linkItem = $(this).find('a');
            TweenLite.to(linkItem, 0.02, {
                css: {
                    left: -50,
                    opacity: 0
                },
                ease: Quint.easeOut
            });
            TweenLite.to(linkItem, 0.7, {
                css: {
                    left: 0,
                    opacity: 1
                },
                delay: delay + secondDelay,
                ease: Quint.easeOut
            });
        });
    }, timeOut);

    var langMenu = $('#lang_menu');
    TweenLite.to(langMenu, 1, {
        css: {
            opacity: 1
        },
        delay: 0.5,
        ease: Quint.easeOut
    });

    //3. BOTTOM ADRESS INFO
    var adressInfo = $('.menu_contact_info_contain_adress');
    var contactInfo = $('.menu_contact_info_contain_info');

    adressInfo.stop(true, true);
    contactInfo.stop(true, true);
    TweenLite.to(adressInfo, 0.02, {
        css: {
            opacity: 0,
            left: -50
        },
        ease: Quint.easeOut
    });
    TweenLite.to(contactInfo, 0.02, {
        css: {
            opacity: 0,
            left: -50
        },
        ease: Quint.easeOut
    });
    TweenLite.to(adressInfo, 0.8, {
        css: {
            opacity: 1,
            left: 0
        },
        delay: delay + 1,
        ease: Quint.easeOut
    });
    TweenLite.to(contactInfo, 0.8, {
        css: {
            opacity: 1,
            left: 0
        },
        delay: delay + 1.2,
        ease: Quint.easeOut
    });
}

function removeInnerMenuAnimations(delay) {
    var logo = $('.logo');
    var mobileLogo = $('.mobile_logo');
    var screen_width = $(window).width() + scrollBarWidth();

    if (screen_width > 720) {
        TweenLite.to(logo, 0.8, {
            css: {
                left: 0,
                width: 28
            }
        });
    } else if (screen_width > 500 && screen_width < 720) {
        TweenLite.to(logo, 0.8, {
            css: {
                left: 0,
                width: 18
            }
        });
    } else if (screen_width < 500) {
        TweenLite.to(mobileLogo, 1, {
            ease: Quint.easeOut,
            css: {
                left: 0,
                opacity: 0,
                width: 5
            }
        });
    }

    var secondDelay = 0;
    $('#menu_list li').each(function() {
        secondDelay = secondDelay + 0.04;
        var linkItem = $(this).find('a');
        TweenLite.to(linkItem, 0.5, {
            css: {
                left: -50,
                opacity: 0
            },
            delay: delay + secondDelay,
            ease: Quint.easeOut
        });
    });

    var langMenu = $('#lang_menu');
    TweenLite.to(langMenu, 1, {
        css: {
            opacity: 0
        },
        ease: Quint.easeOut
    });

    var adressInfo = $('.menu_contact_info_contain_adress');
    var contactInfo = $('.menu_contact_info_contain_info');

    TweenLite.to(adressInfo, 0.5, {
        css: {
            opacity: 0,
            left: -50
        },
        delay: delay + 0.2,
        ease: Quint.easeOut
    });
    TweenLite.to(contactInfo, 0.5, {
        css: {
            opacity: 0,
            left: -50
        },
        delay: delay + 0.25,
        ease: Quint.easeOut
    });
}

function launchContact() {
    var contactBox = $('.contact_box');
    var delay = 0;

    $(contactBox).each(function() {
        delay = delay + 0.8;
        TweenLite.to($(this), 1.8, {
            delay: delay,
            ease: Quint.easeOut,
            css: {
                opacity: 1,
                y: 0
            }
        });
    });
}

function disableLogoClick() {
    if ($('.logo_link').length > 0) {
        $('.logo_contain').unwrap();
        $('.mobile_logo').unwrap();
    }
}

function enableLogoClick() {
    $('.logo_contain').wrap('<a href="' + homeUrl + '" class="logo_link"></a>');
    $('.mobile_logo').wrap('<a href="' + homeUrl + '" class="logo_link"></a>');
}

function launchWebsite(delay) {
    var logo = $('#logo_wrapper');
    TweenLite.to(logo, 0.8, {
        css: {
            x: 0
        },
        ease: Cubic.easeInOut
    });
    //$('#favourites_wrapper').css({opacity:1});
    if (pgkind == 1 || pgkind == 2) {
        var favourites_wrapper = $('#favourites_wrapper');
        TweenLite.to(favourites_wrapper, 1, {
            css: {
                opacity: 1
            },
            ease: Cubic.easeInOut
        });
    } else {
        $('#favourites_wrapper').css({
            opacity: 1
        });
    }
}

function doTextBlockHovers() {
    $('.text_block_special').mouseenter(function() {
        var overlay = $(this).find('.grid_block_overlay');
        TweenLite.to(overlay, 0.5, {
            scale: 1.05
        });

    }).mouseleave(function() {
        var overlay = $(this).find('.grid_block_overlay');
        TweenLite.to(overlay, 0.5, {
            scale: 1
        });
    })

    $('.overlap_box').mouseenter(function() {
        var overlay = $(this).find('.grid_block_overlay');
        var overlap = $(this).find('.grid_block_top');
        TweenLite.to(overlay, 0.5, {
            scale: 1.05
        });
        TweenLite.to(overlap, 0.5, {
            scale: 1.05
        });

    }).mouseleave(function() {
        var overlay = $(this).find('.grid_block_overlay');
        var overlap = $(this).find('.grid_block_top');
        TweenLite.to(overlay, 0.5, {
            scale: 1
        });
        TweenLite.to(overlap, 0.5, {
            scale: 1
        });
    })

    $('.overlap_link').mouseenter(function() {
        var overlap = $(this).find('.grid_block_overlay');
        TweenLite.to(overlap, 0.5, {
            scale: 1.15
        });
    }).mouseleave(function() {
        var overlap = $(this).find('.grid_block_overlay');
        TweenLite.to(overlap, 0.5, {
            scale: 1
        });
    })
}

function launchGridAnimation(delay) {
    var scrollpos = $(window).scrollTop();
    var screen_width = $(window).width() + scrollBarWidth();

    //1. full top image
    var mainBody = $('.main_body');
    var fullBlock = $('.full_width_block');
    var bigLogo = $('.big_logo_white');

    if (pgkind == 1) {
        setTimeout(function() {
            loadImagesOnScroll();
        }, 1200);
    } else {
        loadImagesOnScroll();
    }


    TweenLite.to(mainBody, 0.8, {
        opacity: 1,
        onComplete: function() {
            doScrollLoader();
        }
    });

    TweenLite.to(fullBlock, 1.5, {
        css: {
            opacity: 1,
            y: 0
        },
        ease: Quint.easeOut,
        delay: delay + 0.15
    });
    TweenLite.to(bigLogo, 1.5, {
        css: {
            opacity: 1,
            y: 0
        },
        ease: Quint.easeOut,
        delay: delay + 0.6
    });
}

function launchFullContent() {
    //1. full top image
    var content = $('.content');
    TweenLite.to(content, 0.8, {
        opacity: 1,
        onComplete: function() {
            doScrollLoader();
        }
    });

    doScrollLoader();
}

function doGridSorting(el) {
    $(el).mixItUp();
}

function doGridFiltering() {
    $(".filter").click(function(e) {
        /*
		console.log("CLICKED", $(e.currentTarget).attr('data-filter'));
		var gridBlock = $('.grid_block');
		var currentTarget = $(e.currentTarget).attr('data-filter');
		currentTarget = $('.grid_block'+currentTarget);
		
		if($(e.currentTarget).attr('data-filter') == 'all'){
			console.log("ALL");
			TweenLite.to(gridBlock, 2, {css: {autoAlpha: 1, display: 'block'}, ease: Quint.easeOut, delay: 0.1});
		}else{
			TweenLite.to(gridBlock, 2, {css: {autoAlpha: 0, display: 'none'}, ease: Quint.easeOut, delay: 0.1, onComplete:function(){}});
		
			var secondDelay = 0;
			$(currentTarget).each(function(){
			secondDelay = secondDelay + 0.04;
			TweenLite.to($(this), 2, {css:{autoAlpha: 1, display: 'block', autoAlpha: 1}, delay: 0.2+secondDelay, ease: Quint.easeOut});
		});	
		}
		return false;
	  	*/
    });
}

function checkPromotionLabels(elem) {
    var promotion = $(elem).find('.promotion');
    if ($(promotion).length) {
        $(promotion).addClass('promotion_visible');
        TweenLite.to(promotion, 1.5, {
            css: {
                opacity: 1,
                y: 0
            },
            ease: Quint.easeOut
        });
    }
}

function doGridHovers() {
    var z_index = 800;

    $('.grid_caption').each(function() {
        z_index = z_index - 5;
        $(this).parent().css('z-index', z_index);
    })

    if (!Modernizr.touch) {
        $('.caption_box').mouseenter(function() {
            $('.grid_caption').each(function() {
                $(this).css('opacity', 0);
            });
            $(this).find('.grid_block_img').css({
                scale: '1.07'
            });
            var screen_width = $(window).width() + scrollBarWidth();
            if ($(this).find('.grid_caption').length) {
                $('.grid_caption').css('opacity', 0);
                TweenLite.to($('.grid_caption'), 0.6, {
                    css: {
                        opacity: 0
                    },
                    ease: Quint.easeOut
                });

                var caption = $(this).find('.grid_caption');
                var captiontext = $(this).find('.grid_caption p');
                var captionPrice = $(this).find('.grid_caption .caption_price_label p');
                TweenLite.to(caption, 0.6, {
                    css: {
                        opacity: 1
                    },
                    ease: Quint.easeOut,
                    delay: 0.2
                });
                TweenLite.to(captiontext, 0.6, {
                    css: {
                        y: 0
                    },
                    ease: Quint.easeOut,
                    delay: 0.3
                });
                TweenLite.to(captionPrice, 0.6, {
                    css: {
                        y: 0
                    },
                    ease: Quint.easeOut,
                    delay: 0.5
                });
            }
        }).mouseleave(function() {
            $(this).find('.grid_block_img').css({
                scale: '1'
            });
            var screen_width = $(window).width() + scrollBarWidth();
            if ($(this).find('.grid_caption').length) {
                var caption = $(this).find('.grid_caption');
                var captiontext = $(this).find('.grid_caption p');
                var captionPrice = $(this).find('.grid_caption .caption_price_label p');
                TweenLite.to(caption, 0.6, {
                    css: {
                        opacity: 0
                    },
                    ease: Quint.easeOut,
                    delay: 0.1
                });
                TweenLite.to(captiontext, 0.6, {
                    css: {
                        y: -5
                    },
                    ease: Quint.easeOut,
                    delay: 0.2
                });
                TweenLite.to(captionPrice, 0.6, {
                    css: {
                        y: -5
                    },
                    ease: Quint.easeOut,
                    delay: 0.5
                });
            }
        });
    } else {
        $('.grid_caption').css('opacity', 1);
    }
}

function window_scroll() {
    var scrollpos = $(window).scrollTop();
    var screen_height = get_screen_height();
    var screen_width = $(window).width() + scrollBarWidth();

    if (scrollpos > 200) {
        doScrollLoader();
    }
}

function window_resize() {
    var screen_height = $('.page_height').height();
    if (screen_height < 100) {
        screen_height = $(window).height();
    }
    var screen_width = $(window).width() + scrollBarWidth();
    var wrapper_a = $('a.link_wrapper');

    closeSideMenu();

    if (pgkind == 6) {
        if (screen_width > 768) {
            var mapcanvas = document.getElementById('map_canvas');
            doContactMap(mapcanvas);
        } else {
            var mapcanvas2 = document.getElementById('mobile_map_canvas');
            doContactMap(mapcanvas2);
        }
    }

    if (screen_width < 700) {
        var selectricLabel = $('.selectric .label');

        $(selectricLabel).each(function() {
            if ($(this).length > 8) {

            }
        })
    }
}

function get_screen_height() {
    var screen_height = $('.page_height').height();
    if (screen_height < 100) {
        screen_height = $(window).height();
    }
    return screen_height;
}

function get_screen_width() {
    var screen_width = $(window).width() + scrollBarWidth();
    return screen_width;
}

function doScrollLoader() {
    var screen_width = $(window).width() + scrollBarWidth();
    if (screen_width > 768) {
        scroll_loader();
    }
}

function percentToPixel(_elem, _perc) {
    return (_elem.parent().outerWidth() / 100) * parseFloat(_perc);
}


function scroll_loader() {
    var screen_width = $(window).width() + scrollBarWidth();
    var docViewTop = $(window).scrollTop();
    var docHeight = $(window).height();
    var docViewBottom = docViewTop + (docHeight - (docHeight / 8));
    var delay = 0;

    if (pgkind == 3) {
        var zIndex = 100;
        $('.related_product_photo').each(function() {
            var position = $(this).offset();
            var pos_y = position.top;
            delay = delay + 0.1;
            zIndex = zIndex + 100;
            if (pos_y < (docViewBottom)) {
                TweenLite.to($(this), 1, {
                    delay: delay,
                    ease: Quint.easeOut,
                    css: {
                        opacity: 1,
                        x: 0
                    }
                });
                $(this).css('z-index', zIndex);
            }
        });
    }
}

function doFavouriteBaskerHover() {
    $('#favourites_wrapper').mouseenter(function() {
        $(this).css('background-color', '#f4f1f1');
    }).mouseleave(function() {
        $(this).css('background-color', '#fff');
    });
}

function addItemsToFavourites() {
    var el = $(this);
    var pid = parseInt($(this).attr('pid'));
    var sizeid = 0;
    if ($("#product_detail_filter")[0]) {
        sizeid = parseInt($("#product_detail_filter").val());
    }

    if (pid > 0) {
        $.ajax({
            url: pre + "ajax_action.php?action=4",
            type: "POST",
            data: "itemid=" + pid + "&sizeid=" + sizeid,
            success: function(data) {
                var res = parseInt(data);
                var basket_counter = parseInt($('#basket_counter').html());
                var basketWrapper = $('#favourites_wrapper');
                var basket = $('#favourites_basket');
                var btnBasketIcon = $('.basket_icon');
                var btnText = $('.link_text');
                var btnColor = el.css('backgroundColor');
                el.parent().removeClass('overlap_link');
                el.prev().remove();

                TweenLite.to($(btnText), 0.25, {
                    css: {
                        opacity: 0
                    },
                    ease: Cubic.easeInOut,
                    onComplete: function() {
                        $('.link_text').text('Offerte aanvragen');
                    }
                });

                TweenLite.to($(btnBasketIcon), 0.25, {
                    css: {
                        left: -15,
                        opacity: 0
                    },
                    ease: Cubic.easeInOut,
                    onComplete: function() {
                        $(btnBasketIcon).css('left', '15px');
                        $('.basket').css('opacity', 0);
                        $('.basket_hover').css('opacity', 1);
                        $(el).attr('href', favorietenUrl);
                        TweenLite.to($(btnBasketIcon), 0.25, {
                            css: {
                                left: 0,
                                opacity: 1
                            },
                            ease: Cubic.easeInOut
                        });
                        TweenLite.to($(btnText), 0.25, {
                            css: {
                                opacity: 1
                            },
                            ease: Cubic.easeInOut,
                            delay: 0.3
                        });
                        TweenLite.to($(basket), 0.25, {
                            css: {
                                left: -15,
                                opacity: 0
                            },
                            ease: Cubic.easeInOut,
                            delay: 0.3,
                            onComplete: function() {
                                $(basket).css('left', '15px');

                                if (res != 0) {
                                    $('#favourites_basket span').text(res);
                                }

                                TweenLite.to($(basket), 0.25, {
                                    css: {
                                        left: 0,
                                        opacity: 1
                                    },
                                    ease: Cubic.easeInOut
                                });
                            }
                        });

                        TweenLite.to($(basketWrapper), 0.35, {
                            css: {
                                backgroundColor: btnColor
                            },
                            ease: Cubic.easeInOut,
                            onComplete: function() {
                                TweenLite.to($(basketWrapper), 0.35, {
                                    css: {
                                        backgroundColor: "#fff"
                                    },
                                    delay: 1.5,
                                    ease: Cubic.easeInOut,
                                    onComplete: function() {
                                        doFavouriteBaskerHover();
                                    }
                                });
                            }
                        });
                    }
                });
            }
        });
    }
}

function removeItemsFromFavourites() {
    $('.remove_product_fav').click(function() {
        var pid = $(this).attr('pid');
        var sid = $(this).attr('sid');
        var el = $(this);
        removeFarourite(pid, sid, el);

        /*
        var popup = $(this).parent().find('.delete_popup');
        $(popup).fadeIn();
        $(popup).find('.annuleren').click(function(){
        	$(popup).fadeOut();
        })
        return false;*/
    });

    $('.content').click(function() {
        /*
        var popup = $('.delete_popup');
        $(popup).fadeOut();*/
    });
}

function removeFarourite(pid, sid, el) {
    $(el).hide();
    $.ajax({
        url: pre + "ajax_action.php?action=5",
        type: "POST",
        data: "itemid=" + pid + "&sizeid=" + sid,
        success: function(data) {
            var res = parseInt(data);
            $('#favourites_basket span').text(res);
        }
    });

    $(el).parents('.favourite_item_container').slideUp();
}

function doFavouriteItems() {
    var amountUp = $('.item_amount_plus');
    var amountDown = $('.item_amount_minus');

    $(amountUp).click(function() {
        var startAmount = $(this).prev().find(".item_amount_input").val();

        startAmount++;
        $(this).prev().find(".item_amount_input").val(startAmount);

        checkZero(startAmount, $(this));
    })

    $(amountDown).click(function() {
        var startAmount = $(this).next().find(".item_amount_input").val();

        startAmount--;
        $(this).next().find(".item_amount_input").val(startAmount);

        checkZero(startAmount, $(this));
    })

    $('#favourite_items_list').each(function() {
        var currentPrice = $(this).find('.item_price').text();
        currentPrice = currentPrice.substring(0, currentPrice.length - 1);
    });
}

function checkZero(startAmount, el) {
    if (startAmount <= 1) {
        $(el).next().find(".item_amount_input").val(1);
    }
}

function loadImagesOnScroll() {
    var $container = $('.full_grid');
    var gridBlock = $('.grid_block');
    var delay = 0;

    $container.imagesLoaded(function() {
        $(gridBlock).each(function() {
            var elem = $(this);
            if (!Modernizr.touch) {
                delay = delay + 150;
            }

            if (elem.find('.grid_block_contain').length > 0) {
                $(elem).css({
                    opacity: 1
                });
                elem.find('.grid_block_contain').delay(delay).transition({
                    y: 40,
                    opacity: 0
                }, 20, "linear", function() {
                    elem.find('.grid_block_contain').transition({
                        y: 0,
                        opacity: 1
                    }, 1200, "easeOutQuint", function() {
                        checkPromotionLabels(elem);
                    });
                });
            } else {
                elem.delay(delay).transition({
                    y: 40,
                    opacity: 0
                }, 0, "linear", function() {
                    elem.delay(0.3).transition({
                        y: 0,
                        opacity: 1
                    }, 1200, "easeOutQuint", function() {
                        checkPromotionLabels(elem);
                    });
                });
            }
        });
    });

    if (pgkind == 3) {
        $container.infinitescroll({
                navSelector: "#page_nav",
                nextSelector: "#page_nav a",
                itemSelector: ".grid_block",
                debug: true,
                loading: {
                    img: pre + "assets/img/loading.gif",
                    msgText: ""
                },
            },
            // Trigger Masonry as a callback
            function(newElements) {
                // hide new items while they are loading
                var $newElems = $(newElements).css({
                    "opacity": "1"
                });
                var delay = 0;
                // ensure that images load before adding to masonry layout
                $newElems.imagesLoaded(function() {
                    // show elems now they're ready
                    $newElems.each(function() {
                        if (!Modernizr.touch) {
                            delay = delay + 150;
                        }

                        $(this).css({
                            opacity: 1
                        });

                        var elem = $(this);
                        if (elem.find('.grid_block_contain').length > 0) {
                            elem.find('.grid_block_contain').delay(delay).transition({
                                y: 40,
                                opacity: 0
                            }, 20, "linear", function() {
                                elem.find('.grid_block_contain').delay(150).transition({
                                    y: 0,
                                    opacity: 1
                                }, 1200, "easeOutQuint", function() {
                                    checkPromotionLabels(elem);
                                });
                            });
                        } else {
                            elem.delay(delay).transition({
                                y: 40,
                                opacity: 0
                            }, 20, "linear", function() {
                                elem.delay(300).transition({
                                    y: 0,
                                    opacity: 1
                                }, 1200, "easeOutQuint", function() {
                                    checkPromotionLabels(elem);
                                });
                            });
                        }
                    })
                    $container.masonry('appended', $newElems, true);
                    doGridHovers();
                });

            });
    }
}

var scrolldirection = "down";
var prev_scrollpos = 0;
var prev_toppos = 0;
var lock_scrollpos = 0;
var lock_newtoppos = 0;

function doStickySidebar(width) {
    /*var screen_width = $(window).width()+scrollBarWidth();
	$("#sidebar").stick_in_parent().on("sticky_kit:unstick", function(e) {
    	$("#sidebar").css('position', 'relative');
    	$("#sidebar").css('width', '50%');
  	});

	if(screen_width < width){
		$("#sidebar").trigger("sticky_kit:detach");
	}

	var FF = !(window.mozInnerScreenX == null);

	var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");

    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))     
    	$("#sidebar").trigger("sticky_kit:detach");            // If another browser, return 0

	if(FF) {
    	 $("#sidebar").trigger("sticky_kit:detach");
	}*/

    $(window).resize(function() {
        doStickySidebarScroll();
    });

    $(window).scroll(function() {
        doStickySidebarScroll();
    });

    doStickySidebarScroll();
}

function doStickySidebarScroll() {
    var scrollpos = $(window).scrollTop();
    var screen_height = get_screen_height();
    var screen_width = $(window).width() + scrollBarWidth();
    var stickywrapper_height = $('#product_detail_box').height();
    var sticky_height = $('#infowrapper').height();
    var sticky_overflow = sticky_height - screen_height;
    var screen_width = $(window).width() + scrollBarWidth();
    var sidebar_width = $('.product_detail_left').width();

    $('#infowrapper, .product_info_wrapper').width(sidebar_width);

    if (screen_width > 700) {
        $('#sidebar').css({
            'position': 'absolute'
        });

        $('.product_info_wrapper').css({
            'position': 'absolute',
            'top': '0'
        });

        if (sticky_overflow > 0) {
            // sticky is minder hoog dan schermhoogte
            var breakpoint = stickywrapper_height - screen_height + (sticky_overflow * -1);
            if ((scrollpos - sticky_overflow) > breakpoint) {
                // over de wrapper
                var stickytop = stickywrapper_height - sticky_height;
                $('.product_info_wrapper').css({
                    'position': 'absolute',
                    'bottom': '0',
                    'top': stickytop + 'px'
                });
            } else {
                // binnen de wrapper
                var newtop = scrollpos;
                if (newtop > sticky_overflow) {
                    newtop = sticky_overflow;
                }

                if (prev_scrollpos > scrollpos) {
                    if (scrolldirection != "up") {
                        lock_scrollpos = prev_scrollpos;
                        lock_newtoppos = newtop;
                    }
                    scrolldirection = "up";

                    newtop = lock_newtoppos - (lock_scrollpos - scrollpos);

                    if (newtop < 0) {
                        newtop = 0;
                    }
                } else {
                    if (scrolldirection != "down") {
                        lock_scrollpos = prev_scrollpos;
                        lock_newtoppos = prev_toppos;
                    }
                    scrolldirection = "down";

                    newtop = lock_newtoppos + (scrollpos - lock_scrollpos);

                    if (newtop > sticky_overflow) {
                        newtop = sticky_overflow;
                    }
                }

                $('.product_info_wrapper').css({
                    'position': 'fixed',
                    'top': -newtop
                });
                prev_toppos = newtop;
            }
        } else {
            // sticky is hoger dan schermhoogte

            var breakpoint = stickywrapper_height - screen_height + (sticky_overflow * -1);
            if (scrollpos > breakpoint) {
                var stickytop = stickywrapper_height - sticky_height;
                // over de wrapper
                $('.product_info_wrapper').css({
                    'position': 'absolute',
                    'bottom': '0',
                    'top': stickytop + 'px'
                });
            } else {
                // binnen de wrapper
                $('.product_info_wrapper').css({
                    'position': 'fixed',
                    'top': '0'
                });
            }
        }
        prev_scrollpos = scrollpos;
    } else {
        $('#sidebar').css({
            'position': 'relative'
        });

        $('.product_info_wrapper').css({
            'position': 'relative',
            'top': '0'
        });
    }
}

function doContactMap(mapcanvas) {
    /*var mapCanvas = document.getElementById('map_canvas');*/
    var mapCanvas = mapcanvas;
    var myLatlng = new google.maps.LatLng(51.217726, 3.234265);
    var mapOptions = {
        center: myLatlng,
        zoom: 14,
        scrollwheel: false,
        streetViewControl: false,
        panControl: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.SMALL
        },
        styles: [{
            "featureType": "all",
            "elementType": "all",
            "stylers": [{
                "color": "#8e00da"
            }, {
                "saturation": "21"
            }]
        }, {
            "featureType": "all",
            "elementType": "labels.text.fill",
            "stylers": [{
                "saturation": 36
            }, {
                "color": "#333333"
            }, {
                "lightness": 40
            }]
        }, {
            "featureType": "all",
            "elementType": "labels.text.stroke",
            "stylers": [{
                "visibility": "on"
            }, {
                "color": "#ffffff"
            }, {
                "lightness": 16
            }]
        }, {
            "featureType": "all",
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#fefefe"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#fefefe"
            }, {
                "lightness": 17
            }, {
                "weight": 1.2
            }]
        }, {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [{
                "color": "#f5f5f5"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{
                "color": "#f5f5f5"
            }, {
                "lightness": 21
            }]
        }, {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [{
                "color": "#dedede"
            }, {
                "lightness": 21
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#ffffff"
            }, {
                "lightness": 17
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#ffffff"
            }, {
                "lightness": 29
            }, {
                "weight": 0.2
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{
                "color": "#ffffff"
            }, {
                "lightness": 18
            }]
        }, {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [{
                "color": "#ffffff"
            }, {
                "lightness": 16
            }]
        }, {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [{
                "color": "#f2f2f2"
            }, {
                "lightness": 19
            }]
        }, {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
                "color": "#e9e9e9"
            }, {
                "lightness": 17
            }]
        }]
    }
    var map = new google.maps.Map(mapCanvas, mapOptions);

    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        icon: '../assets/img/sanskriet_marker.png'
    });

    map.setCenter(marker.getPosition());
}

/* FORM HANDLING --------------------------------------------------------------------------- */
$(document).ready(function() {
    $(".input_field").focus(function() {
        var lbl = $(this).attr('value');
        if ($(this).val() == lbl) {
            $(this).val("");
            $(this).addClass('active');
        }
    });
    $(".input_field").blur(function() {
        var lbl = $(this).prev().text();
        //if ($(this).val().length == 0){  $(this).val(lbl); $(this).removeClass('active');  }
    });
    $(".submit_btn").click(function() {
        check_frm_contact();
    });
    $('.input_field').keypress(function(e) {
        //if(e.which == 13) { check_frm_contact(); }
    });
});


function errorfield(field) {
    $('#' + field).stop(true, false).addClass('error').prev().addClass('errorp').animate({
        opacity: 1
    }, 200, function() {
        $('#' + field).removeClass('error').prev().removeClass('errorp').animate({
            opacity: 1
        }, 200, function() {
            $('#' + field).addClass('error').prev().addClass('errorp').animate({
                opacity: 1
            }, 200, function() {
                $('#' + field).removeClass('error').prev().removeClass('errorp').animate({
                    opacity: 1
                }, 200, function() {});
            });
        });
    });
}

function check_frm_contact() {
    if (pgkind == 6) {
        var go = 1;
        var result = "";
        var in_em = $('.input_email').val();
        var in_nm = $('.input_naam').val();
        var in_ph = $('.input_tel').val();
        var in_qs = $('.input_question').val();

        if (CheckEmail(in_em) != "") {
            go = 0;
            errorfield('input_email');
        }

        if (in_nm.length < 2) {
            go = 0;
            errorfield('input_naam');
        }

        if (in_ph.length < 8) {
            in_ph = "";
            go = 0;
            errorfield('input_tel');
        }

        if (go == 1) {
            in_nm = encodeURIComponent(in_nm);
            in_em = encodeURIComponent(in_em);
            in_ph = encodeURIComponent(in_ph);
            in_qs = encodeURIComponent(in_qs);

            $.ajax({
                url: pre + "ajax_action.php?action=2",
                type: "POST",
                data: "em=" + in_em + "&nm=" + in_nm + "&ph=" + in_ph + "&ln=nl" + "&qs=" + in_qs
            });
            $('.contact_result').delay(200).slideDown();
            $('.contact_form').delay(200).slideUp();
        }
    }

    if (pgkind == 5) {
        var go = 1;
        var result = "";
        var in_em = $('.input_email').val();
        var in_nm = $('.input_naam').val();
        var in_ph = $('.input_tel').val();
        var in_qs = $('.input_question').val();
        var in_ad = $('.input_ad').val();

        if (CheckEmail(in_em) != "") {
            go = 0;
            errorfield('input_email');
        }

        if (in_nm.length < 2) {
            go = 0;
            errorfield('input_naam');
        }

        if (in_ph.length < 8) {
            in_ph = "";
            go = 0;
            errorfield('input_tel');
        }

        if (go == 1) {
            in_nm = encodeURIComponent(in_nm);
            in_em = encodeURIComponent(in_em);
            in_ad = encodeURIComponent(in_ad);
            in_ph = encodeURIComponent(in_ph);
            in_qs = encodeURIComponent(in_qs);

            $.ajax({
                url: pre + "ajax_action.php?action=6",
                type: "POST",
                data: "em=" + in_em + "&nm=" + in_nm + "&ad=" + in_ad + "&ph=" + in_ph + "&ln=nl" + "&qs=" + in_qs
            });
            $('.contact_result').delay(200).slideDown();
            $('.contact_form').delay(200).slideUp();
        }
    }
}
