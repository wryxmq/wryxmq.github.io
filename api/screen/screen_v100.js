/*v1.0.0
	编写者: 马猩猿(WRYXMQ,QMr)
	时间: 20210920
	url: https://wryxmq.github.io
	
	感谢以下网址提供技术参考或服务↓↓↓
	翻译服务:
	https://fanyi.baidu.com
	颜色参考: 
	https://www.w3school.com.cn/html/html_colors.asp
*/

// 初始化id值
var Qdata0="Qv100";

function Qx(){
	// 初始化宽度
	var QWidth=document.body.offsetWidth+"px";
	// 初始化高度
	var QHeight=document.body.offsetHeight+"px";

	// 设置页面宽度
	document.getElementById(Qdata0).style.width=QWidth;
	// 设置页面高度
	document.getElementById(Qdata0).style.height=QHeight;

	// 设置循环间隔(毫秒)
	setTimeout("Qx()",500);

	// 检测代码
	console.log("宽: "+QWidth+",高: "+QHeight);
}

// Qx初始化
Qx();