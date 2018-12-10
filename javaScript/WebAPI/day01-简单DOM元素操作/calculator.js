//设置初始状态值
var resultIpt=$("#resultIpt");//不能这么写，这么写后面点击触发不写值不更新
var result="";
var num1="";
var num2="";
var operator_id=0;
var point_count=0;
//获取对象赋给变量
var num=$(".num");  //伪数组
var operator=$(".operator");
var equal=$(".btn-equal");
var btn_clear=$("#btn-clear");
var negate=$("#btn-negate"),negate_num=1;
var percent=$("#btn-percent");

//+/-键
negate.on("click",function () {
    result=resultIpt.val();
    if (result=="0"){
        result="-0";
    }else if(result=="-0"){
        result="0";
    }else{    //绝对值非0时
        result=-result;
    }
    resultIpt.val(result);
});

//数字键
num.on("click",function () {
    result = resultIpt.val();
    var num_val = $(this).val();
    if (result.length==1 ) {
        if (num_val!=="."){  //如果为小数点以外的数字
            if (result=="0") {   //当为0时，覆盖
                result = "";
                result = num_val;
                // console.log(result);
            }else {              //当不为0时，追加
                result+=num_val;
                // console.log(result);
            }
        }else if (num_val=="."&&point_count==0) {
            result += num_val;
            // console.log(result);
            point_count = 1;
        }
    }else if(result.length>1){
        if (num_val=="."){
            if (point_count==0){
                result += num_val;
                point_count=1;
            }else if(point_count>0){
                result=result;
            }
        } else{
            if (result=="-0"){
                result="-"+num_val;
            }else{
                result +=num_val;
            }
        }
    }
    resultIpt.val(result);
});

//运算符
operator.on("click",function () {
    var operator_val=$(this).val();
    // console.log(operator_val);
    if(operator_val=="+"){
        operator_id=1;
    }
    if(operator_val=="-"){
        operator_id=2;
    }
    if(operator_val=="×"){
        operator_id=3;
    }
    if(operator_val=="÷"){
        operator_id=4;
    }
    // console.log(operator_id);
    num1= eval(resultIpt.val());     //js eval()方法，计算字符串，并执行其中js代码
    resultIpt.val("0");
    point_count=0; //可以重新输入小数点
});

//等于
equal.on("click",function () {
    result=resultIpt.val();
    if (result=="0"){
        if (num1=="") {  //没有输入第一个数，直接点=
            result=0;
        }else{          //输入了第一个数,按了运算符后重设为0
            result=num1;
        }
    } else {   //当只输入了第一个数，没有按运算符或者输入了第2个数时
        num2=eval(result);
        // console.log(num1);       //""--输入了第一个数，但没点运算符，此时num1为空字符串
        console.log(num2);       //99
        switch (operator_id) {
            case 0:  //没有按+—*/时
                result=eval(result);
                console.log(result);
            case 1:
                result=num1+num2;
                break;
            case 2:
                result=num1-num2;
                break;
            case 3:
                result=num1*num2;
                break;
            case 4:
                result=num1/num2;
                break;
        }
    }
    console.log(result);
    resultIpt.val(result);
    operator_id=0; //可以重新输入小数点
});

//清0
btn_clear.on("click",function () {
    result="";
    num1="";
    num2="";
    operator_id=0;
    point_count=0;
    resultIpt.val("0");
});

//百分比
percent.on("click",function () {
    result=resultIpt.val();
    result=eval(result)/100;
    resultIpt.val(result);
})

//控制显示位数