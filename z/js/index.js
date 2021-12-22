// 修改图片,文字为对应应用的数据 
var w=window.screen.availWidth;
var h=window.screen.availHeight;
var s=w*h/1000-140;
document.getElementById("image").src="https://www.baidu.com/favicon.ico";
document.getElementById("image").title="百度ico";
document.getElementById("p1").innerHTML="百度ico";

if(navigator.userAgent.match(/Alipay/i)){
	//支付宝访问,直接跳转
	window.location.href="https://qr.alipay.com/tsx00605uilzswl5zu4ig15";
}else if(navigator.userAgent.match(/MicroMessenger\//i)){
	//微信访问,展示图片
	document.getElementById("image").src="./imges/weixin.png";
	document.getElementById("image").title="微信";
	document.getElementById("p1").innerHTML="微信";
}else if(navigator.userAgent.match(/QQ\//i)){
	//qq访问
	document.getElementById("image").src="./imges/qq.png";
	document.getElementById("image").title="qq";
	document.getElementById("p1").innerHTML="qq";
}

document.getElementById("p1").style="font-size: "+s+"px";


// 弹出询问框
function firm(){
	if(confirm("目前只支持安卓系统使用,是否离开本站?")){
		javascript:window.opener=null;
		window.open('','_self');
		window.close();
	}else{
		window.location.href="https://wryxmq.github.io";
	}
}

// 判断是否是安卓系统访问
if(navigator.userAgent.indexOf("Android") > -1 ){
	console.log("Android access(安卓访问)");
}else{
	firm();
}


// 意见反馈
var m0="wryxmq@gmail.com";
var t0="测试";
var t1=navigator.userAgent;
document.getElementById("a1").href="mailto:"+m0+"&subject="+t0+"&body="+t1+"  请保留以上数据";

// 对地址参数判断
// var str=location.href;//取得整个地址栏
// var num=str.indexOf("?");
// str=str.substr(num+1); //取得所有参数
// var arr=str.split("&"); //各个参数放到数组里
// if(arr=="http://lihei.me.ht/12/z.html"){
// 	window.location.href="./z.html?free=10";
// }else if(arr[0]=="free=121"){
	
// }else if(arr[0]=="free=01"){
// 	alert("该模块未使用");
// }else{
// 	alert("参数错误,请参考使用文档");
// }






