if (navigator.userAgent.match(/(iPhone|iPod|Android|ios|nokia|sony|ericsson|mot|samsung|htc|sgh|lg|sharp|sie-|panasonic|ucweb|meizu|blackberry|netfront|symbian|windowsce|palm|operamini|operamobi|lenovo|alcatel|philips|cldc|openwave|nexusone|midp|wap|mobile|UCBrowser)/i)) {
     console.log('移动端')
}else{
    console.log('PC端')
    //通过某解析地址,在pc端增加解析地址
    $('#jk option[value="https://jx.iztyy.com/svip/?url="]').after('<option value="https://www.nxflv.com/?url=">电脑解析1</option>');
}
