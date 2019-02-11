$(document).ready(function(){
    $(window).on("load", function(){
        imgLocation();
        var dataImg = {"data":[{"src":"alt1.jpg"},{"src":"alt2.jpg"}]};                                            
        $(window).scroll(function() {                      
            if(getSideHeight()){
                $.each(dataImg.data, function(index, value){
                    var pin = $("<div>").addClass('pin').appendTo('#main');
                    var box = $("<div>").addClass('box').appendTo(pin);
                    var img = $("<img>").attr('src', 'images/' + $(value).attr("src")).appendTo(box);
                });
                imgLocation();
            }
        });
 
    });
});

function getSideHeight(){
    var box = $("pin");
    var lastImgHeight = (box.last().get(0)).offsetTop - Math.floor(box.last().height()/2);
    var documentHeight = $(document).height();
    var scrollHeight = $(window).scrollTop();
    return (lastImgHeight < documentHeight + scrollHeight) ? true:false;
}
 
//图片位置摆放
function imgLocation(){
    var box = $(".pin");
    var boxWidth  = box.eq(0).width();
    var num = Math.floor($(window).width()/boxWidth);
    var numArr = [];
    box.each(function(index, value){
        var boxHeight = box.eq(index).height();
        if(index < num){
            numArr[index] = boxHeight;
        }
        else{
            var minboxHeight = Math.min.apply(numArr,numArr);
            var minIndex = $.inArray(minboxHeight, numArr);
            $(value).css({
                position: "absolute",
                top: minboxHeight,
                left: box.eq(minIndex).position().left
            });
            numArr[minIndex] += box.eq(index).height();
        }
    });
}