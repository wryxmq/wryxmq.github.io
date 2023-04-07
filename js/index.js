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
	  title: "公告(20230307-1)",
	  text: "如果你是第一次使用请点击'去看教程'\n也可以在网站下面查看文字或视频教程.\n删除失效链接,替换新链接.感谢你的支持.",
	  buttons: ["直接使用","去看教程"],
	  dangerMode: true,
	})
	.then((willDelete) => {
	  if (willDelete) {
		window.open("#");
	  }
	});
}

if(Ifvip1!=-1){
    var Ifvip=getCookie("vip");
}
