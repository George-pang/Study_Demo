
//设置任意标签的任意文本内容
function setInnerText(element, txt) {
    if (typeof element.textContent == "undefined") {
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
    if (typeof element.firstElementChild !== "undefined") {
        return element.firstElementChild;
    } else {
        var node = element.firstChild();
        while (node && node.nodeType != 1) {
            node = node.nextSibling;
        }
        return node;
    }
}


//获取最后一个子元素兼容代码
function getLastElementChild(element)  {
    if (typeof element.lastElementChild !== "undefined") {
        return element.lastElementChild;
    } else {
        var node = element.lastChild();
        while (node && node.nodeType != 1) {
            node = node.previousSibling;
        }
        return node;
    }
}