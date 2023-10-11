//设置初始化数据
var jx0="https://z1.m1907.top/?jx=";
var jx0_Text="vip1(支持多集解析)";

//设置非pc端数据
var data_n = [
{
"value": "https://jx.jsonplayer.com/player/?url=",
"text": "vip2"
},
{
"value": "https://svip.bljiex.cc/?v=",
"text": "vip3"
}
];

//设置pc端数据
var data_y = [
{
"value": "http://www.jzmhtt.com/zdy/vip/?url=",
"text": "vip2"
},
{
"value": "https://www.playm3u8.cn/jiexi.php?url=",
"text": "vip3"
},
{
"value": "https://www.8090g.cn/?url=",
"text": "vip4"
},
{
"value": "https://jx.xmflv.com/?url=",
"text": "vip5"
},
{
"value": "https://www.ckplayer.vip/jiexi/?url=",
"text": "vip6"
},
{
"value": "https://www.yemu.xyz/?url=",
"text": "vip7"
},
{
"value": "https://jx.m3u8.tv/jiexi/?url=",
"text": "vip8"
},
{
"value": "https://bd.jx.cn/?url=",
"text": "vip9"
}
];






//处理初始化解析数据
var selectElement = document.getElementById("jk");
var optionElement = document.createElement("option");
optionElement.value = jx0;
optionElement.innerText = jx0_Text;
selectElement.appendChild(optionElement);

//处理非pc端数据
var NonPCend = '';
data_n.forEach(function(option) {
NonPCend += '<option value="' + option.value + '">' + option.text + '</option>';
});
//console.log(NonPCend);

//处理pc端数据
var PCend = '';
data_y.forEach(function(option) {
PCend += '<option value="' + option.value + '">' + option.text + '</option>';
});
//console.log(PCend);

//通过判断显示pc端或非pc端数据
if (navigator.userAgent.match(/(iPhone|iPod|Android|ios|nokia|sony|ericsson|mot|samsung|htc|sgh|lg|sharp|sie-|panasonic|ucweb|meizu|blackberry|netfront|symbian|windowsce|palm|operamini|operamobi|lenovo|alcatel|philips|cldc|openwave|nexusone|midp|wap|mobile|UCBrowser)/i)) {
     console.log('移动端')
	 $('#jk Option[value="'+jx0+'"]').after(NonPCend);
}else{
    console.log('PC端')
    $('#jk option[value="'+jx0+'"]').after(PCend);
}


//在事件触发时阻止默认的复制行为，从而禁止将数据写入剪贴板。
document.addEventListener('copy', function(e) {
  e.preventDefault();
});


