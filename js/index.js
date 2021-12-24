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
var newD=new Date(date+24*60*60*1000);

var Ifvip1 = document.cookie.indexOf("vip=");
if(Ifvip1==-1){
	document.cookie="vip=1; expires="+newD.toUTCString();
	alert("网站内容即将升级,尽请期待\n如有错误欢迎反馈: wryxmq@gmali.com");
}

if(Ifvip1!=-1){
	var Ifvip=getCookie("vip");
}
