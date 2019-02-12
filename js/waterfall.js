$(document).ready(function(){
    $(window).on("load", function(){
        imgLocation();
        var dataImg = {"data":[{"src":"alt1.jpg"},{"src":"alt2.jpg"}]};                                            
        // 获取最后一张图片距离顶端的高度 + 它本身高度的一半
        $(window).scroll(function() {                      
            if(getSideHeight()){
                $.each(dataImg.data, function(index, value){
                    var pin = $("<div>").addClass('pin').appendTo(b);
                    var box = $("<div>").addClass('box').appendTo(pin);
                    var img = $("<img>").attr('src', 'images/' + $(value).attr("src")).appendTo(box);
                });
                imgLocation();
            }
        });
 
    });
});
 
//获取最后一张图片的高度
function getSideHeight(){
    var box = $("pin");
    var lastImgHeight = (box.last().get(0)).offsetTop - Math.floor(box.last().height()/2);
    var documentHeight = $(document).height();          //获取当前窗口的高度
    var scrollHeight = $(window).scrollTop();           //获取滚动的距离
    return (lastImgHeight < documentHeight + scrollHeight) ? true:false;
}
 
//图片位置摆放
function imgLocation(){
    var box = $(".pin");                                //返回一个数值
    var boxWidth  = box.eq(0).width();                  //每张图片的宽度
    var num = Math.floor($(window).width()/boxWidth);   //一行能放的图片的个数
    var numArr = [];
    box.each(function(index, value){
        var boxHeight = box.eq(index).height();         //获取每张图片的高度
        if(index < num){                                 //第一排
            numArr[index] = boxHeight;
        }
        else{                                           //第二排
            var minboxHeight = Math.min.apply(numArr,numArr);
            var minIndex = $.inArray(minboxHeight, numArr);
            $(value).css({
                position: "absolute",
                top: minboxHeight,
                left: box.eq(minIndex).position().left
            });
            numArr[minIndex] += box.eq(index).height(); //新高度
        }
    });
}