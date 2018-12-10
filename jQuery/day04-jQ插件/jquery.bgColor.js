$.fn.bgColor=function (color) {
    this.css("backgroundColor",color); //this指当前要修改背景色的jq对象
    return this;                        //返回当前jq对象---jq中设置性操作可以链式下去的原因
};