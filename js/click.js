var hide1 = 0;
var hide2 = 0;
var hide3 = 0;
var hide4 = 0;
var hide5 = 0;
var hide6 = 0;
var hide7 = 0;

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

$(document).ready(function() {
    $("#btn3").click(function() {
        $("#Foodwaste").slideToggle("slow");
        if (hide3 == 0) {
            $("#btn3").text("<<");
            hide3 = 1;
        } 
        else {
            $("#btn3").text(">>");
            hide3 = 0;
        }
    });
});

$(document).ready(function() {
    $("#btn4").click(function() {
        $("#Gasification").slideToggle("slow");
        if (hide4 == 0) {
            $("#btn4").text("<<");
            hide4 = 1;
        } 
        else {
            $("#btn4").text(">>");
            hide4 = 0;
        }
    });
});

$(document).ready(function() {
    $("#btn5").click(function() {
        $("#DSS").slideToggle("slow");
        if (hide5 == 0) {
            $("#btn5").text("<<");
            hide5 = 1;
        } 
        else {
            $("#btn5").text(">>");
            hide5 = 0;
        }
    });
});

$(document).ready(function() {
    $("#btn6").click(function() {
        $("#LCA").slideToggle("slow");
        if (hide6 == 0) {
            $("#btn6").text("<<");
            hide6 = 1;
        } 
        else {
            $("#btn6").text(">>");
            hide6 = 0;
        }
    });
});

$(document).ready(function() {
    $("#btn7").click(function() {
        $("#UMM").slideToggle("slow");
        if (hide7 == 0) {
            $("#btn7").text("<<");
            hide7 = 1;
        } 
        else {
            $("#btn7").text(">>");
            hide7 = 0;
        }
    });
});
