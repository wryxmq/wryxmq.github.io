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
    swal("公告(20220504-1)", "网站已进行更新,希望你能喜欢.目前网站还在测试阶段,如有不足还望理解.\n反馈/意见QQ群: 正在部署之中,尽请期待");
}

if(Ifvip1!=-1){
    var Ifvip=getCookie("vip");
}
