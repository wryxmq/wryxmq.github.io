var link0="友情链接：";
var link1 = [{
	"name":"WRYXMQ",
	"url":"https://wryxmq.github.io"
},{
	"name":"百度一下",
	"url":"https://www.baidu.com"
},{
	"name":"DW AI",
	"url":"https://dawu.world"
}];


var linksDiv = document.getElementById("links");
var link2 = '';
for (var i = 0; i < link1.length; i++) {
  link2 += '<a target="_blank" href="' + link1[i].url + '">' + link1[i].name + '</a> ';
}
var linksData = link0+ link2;
linksDiv.innerHTML = linksData;