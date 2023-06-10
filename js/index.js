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
    //swal("公告(20230407-1)", "删除失效链接,替换新链接.感谢你的支持.");
	swal({
	  title: "公告(20230610-1)",
	  text: "生活打败兴趣爱好，别灰心丧气，新机会等着你。\n本网站经团队我一人激烈探讨决定于20230725号关闭，感谢大家一直的支持。当然了，域名还是会继续使用滴只是项目关闭",
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
