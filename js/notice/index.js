// 每三小时进行一次弹窗弹出
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
//设置时间
var newD=new Date(date+3*60*60*1000);

var Ifvip1 = document.cookie.indexOf("vip=");
if(Ifvip1==-1){
    document.cookie="vip=1; expires="+newD.toUTCString();
    //swal("公告(20230407-1)", "删除失效链接,替换新链接.感谢你的支持.");
	swal({
	  title: "公告(20231011-1)",
	  text: "本网站解析链接由第三方提供,请勿相信视频在任何广告",
	  buttons: ["直接使用","联系站长"],
	  dangerMode: true,
	})
	.then((willDelete) => {
	  if (willDelete) {
		window.open("http://baidu.com");
	  }
	});
}

if(Ifvip1!=-1){
    var Ifvip=getCookie("vip");
}
