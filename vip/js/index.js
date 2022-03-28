// 每十二小时进行一次弹窗弹出
// 获取指定名称的cookie
function getCookie(name){
    var strcookie = document.cookie;//获取cookie字符串
    var arrcookie = strcookie.split("; ");//分割
    //遍历匹配
    for ( var i = 0; i < arrcookie.length; i++) {
        var arr = arrcookie[i].split("=");
        if (arr[0] == name){
            return arr[1];
        }
    }
    return "";
}

var date=new Date().getTime();
var newD=new Date(date+12*60*60*1000);

var Ifvip1 = document.cookie.indexOf("vip=");
if(Ifvip1==-1){
    document.cookie="vip=1; expires="+newD.toUTCString();
    swal("公告(20220328-1)", "对站内失效解析或无法使用地址进行删除并加入新链接\n反馈/意见QQ群: 正在部署之中,尽请期待");
}

if(Ifvip1!=-1){
    var Ifvip=getCookie("vip");
}
