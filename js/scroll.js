var naviga_offsetTop = 0;

function naviga_stay_top(){ 
    var scrollTop = $(document).scrollTop(); 
    if(scrollTop > naviga_offsetTop){ 
        $("#nav").css({"top": "20px"}); 
    } 
    else { 
        $("#nav").css({"top": naviga_offsetTop - scrollTop + "px"}); 
    } 
} 

function onload_function(){ 

    naviga_offsetTop = $("#nav").attr("offsetTop"); 

    $(window).bind("scroll", naviga_stay_top); 
    $(window).bind("mousewheel",naviga_stay_top); 
    $(document).bind("scroll", naviga_stay_top); 
    $(document).bind("mousewheel",naviga_stay_top); 
} 

$(document).ready(onload_function); 