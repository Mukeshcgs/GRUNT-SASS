/*$(function() {
    var curPos = 0;
    var slideHeight = $('.fl-slide').height();
    var slides = $('.fl-slide');
    var numOfSlides = slides.length;
    slides.wrapAll('<div id="slidesHolder"></div>')
    slides.css({
        //        'float': 'left'
    });
    //$('#slidesHolder').prepend('<span class="nav" id="leftNav">Move Left</span>')
    // .append('<span class="nav" id="rightNav">Move Right</span>');
    $('.nav').bind('click', function() {
        if (($(this).attr('id') == 'rightNav')) {

            if (curPos == curPos) {
                curPos = curPos + 1
                if (curPos > numOfSlides - 1) {
                    //alert("slide finish");
                    curPos = numOfSlides - 1
                }
            }
        }
        if (($(this).attr('id') == 'leftNav')) {
            if (curPos == curPos) {
                curPos = curPos - 1
                if (curPos < 0) {
                    //alert("slide finish");
                    curPos = 0
                }
            }
        }
        moveSlide();
    });

    function moveSlide() {
        $('#slideshow ').animate({
            'marginTop': slideHeight * (-curPos)
        });
    };
});
*/
