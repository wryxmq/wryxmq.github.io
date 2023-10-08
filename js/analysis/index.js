//设置初始化数据
var jx0="https://jx.iztyy.com/svip/?url=";
var jx0_Text="vip1";

//设置非pc端数据
var data_n = [
{
"value": "https://z1.im1907.top/?jx=",
"text": "vip2"
},
{
"value": "https://vip.bljiex.com/?v=",
"text": "vip3"
}
];

//设置pc端数据
var data_y = [
{
"value": "https://www.nxflv.com/?url=",
"text": "vip-2"
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



