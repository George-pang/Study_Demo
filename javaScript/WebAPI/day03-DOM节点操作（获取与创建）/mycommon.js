// 一些通用的兼容性代码

//设置任意标签的任意文本内容
function setInnerText(element, txt) {
    if (typeof element.textContent == "undefined") {  //如果浏览器不支持textContext属性
        element.innerText = txt;
    } else {
        element.textContent = txt;
    }


}

//获取任意标签的内容
function getInnerText(element) {
    if (typeof element.textContent == "undefined") {
        return element.innerText;
    } else {
        return element.textContent;
    }
}

//获取第一个子元素兼容代码
function getFirstElementChild(element) {
    //如果支持firstElementChild属性
    if (typeof element.firstElementChild !== "undefined") {
        return element.firstElementChild;
    } else {
        var node = element.firstChild();
        while (node && node.nodeType != 1) {  //如果节点有意义，且非标签节点
            node = node.nextSibling;   //取其下一个兄弟节点
        }
        return node;
    }
}


//获取最后一个子元素兼容代码
function getLastElementChild(element)  {
    //如果支持lastElementChild属性
    if (typeof element.lastElementChild !== "undefined") {
        return element.lastElementChild;
    } else {
        // return element.lastChild;   ---为了确保某些浏览器最后一个字节点不是其最后一个子元素（不具备IE8的这个特性）
        var node = element.lastChild();
        while (node && node.nodeType != 1) {  //如果节点有意义，且非标签节点
            node = node.previousSibling;   //取其下一个兄弟节点
        }
        return node;
    }
}

//为任意元素注册任意事件及其事件处理函数
function addEventListener(element,type,fn){
    if (element.addEventListener){
        element.addEventListener(type,fn,false);
    }else if (element.attachEvent) {
        element.attachEvent("on"+type,fn);
    }else{
        element["on"+type]=fn;
    }
}