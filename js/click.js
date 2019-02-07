var hide1 = 0;

var hide2 = 0;

$(document).ready(function() {
    $("#btn1").click(function() {
        $("#AlgalBloom").slideToggle("slow");
        if (hide1 == 0) {
            $("#btn1").text("<<");
            hide1 = 1;
        } 
        else {
            $("#btn1").text(">>");
            hide1 = 0;
        }
    });
});

$(document).ready(function() {
    $("#btn2").click(function() {
        $("#AMR").slideToggle("slow");
        if (hide2 == 0) {
            $("#btn2").text("<<");
            hide2 = 1;
        } 
        else {
            $("#btn2").text(">>");
            hide2 = 0;
        }
    });
});