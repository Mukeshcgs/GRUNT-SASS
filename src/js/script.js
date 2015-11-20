//THis is script.js file
$(document).ready(function() {
    //alert("script is working");
    $('#budget').click(function() {
        $(function() {
            $("#budget").slider({
                orientation: "vertical",
                range: "min",
                min: 0,
                max: 90,
                value: 60,
                slide: function(event, ui) {
                    $("#amount").val(ui.value);
                }
            });
            $("#amount").val($("#budget").slider("value"));
        } 
        );
        alert("BUDGET");
    }
    );
    //
    $('#region').click(function() {
        alert("REGION");
    }
    );
    //
    $('#theme').click(function() {
        alert("THEME");
    }
    );
    //
    $('#date').click(function() {
        //alert("date");
        $(this).datepicker();
    }
    );
    
    //
    $('#people').click(function() {
        alert("PEOPLE");
    }
    );
    
    //
    $('#search').click(function() {
        alert("SEARCH");
    }
    );
}
);
