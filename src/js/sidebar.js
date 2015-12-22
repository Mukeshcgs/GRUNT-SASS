/*$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("active");
});
*/
$(".side-fltr").click(function(e) {
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
