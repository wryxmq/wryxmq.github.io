//<script type="text/javascript" src="ifispc.js"></script>
function() {
    var sUserAgent = navigator.userAgent;
    if (sUserAgent.indexOf('Android') > -1 || sUserAgent.indexOf('iPhone') > -1 || sUserAgent.indexOf('iPad') > -1 || sUserAgent.indexOf('iPod') > -1 || sUserAgent.indexOf('Symbian') > -1) {
        //判断为手机端执行
    } else {
		//判断为pc端执行
		location.href = 'http://youtube.com';
	}
}