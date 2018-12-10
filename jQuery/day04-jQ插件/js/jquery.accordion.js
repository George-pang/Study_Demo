//jQuery原型新建方法
$.fn.accordion=function (colors,width) {
    //设置调用时没传实参的默认值
    colors = colors || [];
    width = width || 0;

    var $lis=this.find("li");   //当前调用.accordion方法的jq对象
    var maxLength=this.width()-width*($lis.length-1);  //注意，这里是$lis.length,而不是this.length
    // var avgLength=this.width()/this.length;---this.length是dom对象(div)的集合，只有1
    var avgLength=this.width()/$lis.length;

    $lis.each(function (i,e) {
        $(e).css("backgroundColor",colors[i]);
    });

    $lis.on("mouseenter",function () {
        $(this).stop().animate({width:maxLength}).siblings().stop().animate({width:width});
    });

    $lis.on("mouseleave", function () {
        // $(this).stop().animate({width:240}).siblings().stop().animate({width:240});
        $lis.stop().animate({width:avgLength});
    });
};
