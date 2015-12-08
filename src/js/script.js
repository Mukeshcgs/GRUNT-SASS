//THis is script.js file
$(document).ready(function() {
    $('div.dropdown').each(function() {
        var $dropdown = $(this);

        $("a.dropdown-link", $dropdown).click(function(e) {
            e.preventDefault();
            $div = $("div.dropdown-container", $dropdown);
            $div.toggle();
            $("div.dropdown-container").not($div).hide();
            return false;
        });

    });

    $('html').click(function() {
        $("div.dropdown-container").hide();
    });
    //alert("script is working");
    $('.filter').each(function() {
        var $filter = $(this);
        $($filter).click(function(e) {
            e.preventDefault();
            $popup = $(".popup", $filter);
            $popup.toggle();
        });
        $('.popup').not($popup).hide();
        return false;
    });
    $('#budget').click(function() {
        $('.popup').css('display', 'block');
        $(function() {
            $("#slider-vertical").slider({
                range: true,
                orientation: "vertical",
                min: 0,
                max: 500,
                values: [75, 300],
                slide: function(event, ui) {
                    $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
                }
            });
            $("#amount").val("$" + $("#slider-range").slider("values", 0) +
                " - $" + $("#slider-range").slider("values", 1));
        });

        //alert("BUDGETTTTTTTTTTTTTTTTTTTTt");
    });
    //
    $('#region').click(function() {
        alert("REGION");
    });
    //
    $('#theme').click(function() {
        alert("THEME");
    });
    //
    $('#date').click(function() {
        //alert("date");
        $(this).datepicker();
    });

    //
    $('#people').click(function() {
        alert("PEOPLE");
    });

    //
    $('#search').click(function() {
        alert("SEARCH");
    });
});
