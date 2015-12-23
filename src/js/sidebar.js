/*$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("active");
});
*/
/*$(".side-fltr").click(function(e) {
    $("#selectors-wrapper").css('display', 'block');
    $("#selectors-wrapper").css('opacity', 1);
    $(this).find(".popup").fadeIn("slow");

    //$('body').addClass('hide-scroll'); 
    //$('.popup').width($(this).width() + 30);
    //alert("sdsds");
    e.preventDefault();
    //$(this).find(".bx-controls-direction a.bx-next").trigger("click");
});
$(".selectors-close").click(function() {
    $('.side-fltr').find(".popup").fadeOut("fast");
    $("#selectors-wrapper").css('display', 'none');
    $("#selectors-wrapper").css('opacity', 0);
    //$('body').removeClass('hide-scroll');
});
*/
$(".side-fltr").click(function(e) {
    //$("#selectors-wrapper").css('display', 'block');
    //$("#selectors-wrapper").css('opacity', 1);
    $(".side-overlay").css('display', 'block');

    $('.side-nav').animate({
            right: 0,
        }, 500,
        function() {
            // Animation complete.
            $('#main-container').animate({
                marginLeft: 250
            })
            $('#sidebar').animate({
                width: 250
            }, 500);
        });
    $(this).find(".side-popup").fadeIn("slow");
    e.preventDefault();
});

$(".side-overlay").click(function() {
    $('.side-fltr').find(".side-popup").fadeOut("slow");
    $('.side-overlay').fadeOut("slow");

    $('#main-container').animate({
        marginLeft: 75
    })
    $('#sidebar').animate({
        width: 75
    }, 500);
    //$("#selectors-wrapper").css('display', 'none');
    //$("#selectors-wrapper").css('opacity', 0);
    //$('body').removeClass('hide-scroll');
});
