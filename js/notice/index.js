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
	  title: "公告(20231028-1)",
	  text: "1.本网站解析链接由第三方提供,请勿相信视频中任何广告.\n2.请尽量不要开广告屏蔽器,这些广告是本站维持的资金来源.\n3.目前网站还在发展中可能存在大改动,请不要惊慌(没有被第三放插件修改).\n4.由于个人原因,本网站停止更新,点击查看更多获取更详细资料\n",
	  buttons: ["直接使用","查看更新"],
	  dangerMode: true,
	})
	.then((willDelete) => {
	  if (willDelete) {
		window.open("./a1.html");
	  }
	});
}

if(Ifvip1!=-1){
    var Ifvip=getCookie("vip");
}
