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
	alert("网站数据还在测试阶段,如有错误欢迎反馈: wryxmq@gmali.com");
}

if(Ifvip1!=-1){
	var Ifvip=getCookie("vip");
}


// 定时判断是否是安卓系统访问
var id_a1=document.querySelectorAll("#a1");
var ua1=navigator.userAgent;
var timer = window.setInterval(function(){
　　　　if(ua1.indexOf("Android") > -1 ){
		// document.getElementById("a1").style="display: none";
		for(i=0;i<id_a1.length;i++){
			id_a1[i].style="display: none";
		}
		console.log("安卓用户正在访问……");
	}else if(ua1.indexOf("iPhone") > -1){
		for(i=0;i<id_a1.length;i++){
			id_a1[i].style="display: none";
		}
		console.log("iPhone用户正在访问……");
	}else{
		// document.getElementById("a1").style="display: inline";
		for(i=0;i<id_a1.length;i++){
			id_a1[i].style="display: inline";
		}
		console.log("其他用户正在访问");
	}
},500);

