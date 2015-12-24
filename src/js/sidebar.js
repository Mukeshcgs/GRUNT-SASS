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

$(".side-fltr a").click(openSideMenu);
$("#main-container").click(closeSideMenu);
$("#done, #search").click(closeSideMenu);
$(".side-overlay").click(closeSideMenu);

function openSideMenu() {
    $(".side-overlay").css('display', 'block');

    $('.side-nav').animate({
            right: 0,
        }, 100,
        function() {
            // Animation complete.
            $('#main-container').animate({
                marginLeft: 250
            }, 100)
            $('#sidebar').animate({
                width: 250
            }, 100);
        });
    $(this).parent().find(".side-popup").fadeIn("fast");
}

function closeSideMenu() {
    $('.side-fltr').find(".side-popup").fadeOut("fast");
    $('.side-overlay').fadeOut("fast");

    $('#main-container').animate({
        marginLeft: 75
    })
    $('#sidebar').animate({
        width: 75
    }, 100);
}
/**********************************************/
$(".side-fltr").click(function(e) {
    //$("#selectors-wrapper").css('display', 'block');
    //$("#selectors-wrapper").css('opacity', 1);

    e.preventDefault();
});

$(".side-overlay").click(function() {

    //$("#selectors-wrapper").css('display', 'none');
    //$("#selectors-wrapper").css('opacity', 0);
    //$('body').removeClass('hide-scroll');
});
