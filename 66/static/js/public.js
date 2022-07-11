$(document).ready(function() { 
	$(window).scroll(function() {
		var bodyTop = 0,
			sideTop = $('.sidebar ul').eq(0).height() + 142;
		if (typeof window.pageYOffset != 'undefined') {
			bodyTop = window.pageYOffset;
		} else if (typeof document.compatMode != 'undefined' && document.compatMode != 'BackCompat') {
			bodyTop = document.documentElement.scrollTop;
		} else if (typeof document.body != 'undefined') {
			bodyTop = document.body.scrollTop;
		}
		if (bodyTop > sideTop) {
			$('#crf1').css({
				'position': 'fixed',
				'top': '5px'
			});
		} else {
			$('#crf1').css({
				'position': 'relative',
				'top': '0px'
			});
		}
	});
}); 
layui.use('element', function(){
  var element = layui.element;
});
lastScrollY = 0;
function gotop() {
	var diffY;
	if (document.documentElement && document.documentElement.scrollTop) diffY = document.documentElement.scrollTop;
	else if (document.body) diffY = document.body.scrollTop;
	else { /*Netscape stuff*/
	}
	percent = .1 * (diffY - lastScrollY);
	if (percent > 0) percent = Math.ceil(percent);
	else percent = Math.floor(percent);
	lastScrollY = lastScrollY + percent;
	if (lastScrollY < 100) {
		$("#gotop").fadeOut('fast');
	} else {
		$("#gotop").fadeIn('fast');
	}
}
$('#side_func').prependTo('body');
window.setInterval("gotop()", 1);

$('#side_func a.joinus').hover(

function() {
	$(this).find('span.text1').css({
		'display': 'none'
	});
	$(this).find('span.text2').css({
		'display': 'block'
	});
}, function() {
	$(this).find('span.text2').css({
		'display': 'none'
	});
	$(this).find('span.text1').css({
		'display': 'block'
	});
});



$("#gotop").click(function() {
	$("html,body").animate({
		scrollTop: 0
	}, 200);
	return false;
});

$('#gocomm,.pti_comm').click(function() {
	var href = $(this).attr("href");
	var pos = $(href).offset().top - 35;
	$("html,body").animate({
		scrollTop: pos
	}, 200);
	return false;
});
$(function () {
	$('.post_content').find('img').each(function () {
		var _this = $(this);
		var _src = _this.attr("src");
		var _alt = _this.attr("alt");
		_this.wrap('<a data-fancybox="images" href="' + _src + '" data-caption="' + _alt + '"></a>');
	})
})
$("img.lazy").lazyload({effect:'fadeIn',threshold:'400',failurelimit:'6'});
$(document).ready(function() {
	var NLNUM = $('.page_num a');
	NLNUM.click(function() {
		NLNUM.removeClass('current');
		$(this).addClass('current');
		var NUMB = $(this).index() + 1;
		if ($(this).attr('class') == 'current') {
			$('.block').css({
				'display': 'none'
			});
			$('.new-list-' + String(NUMB)).css({
				'display': 'block'
			});
		} else {
			$('.new-list .block').css({
				'display': 'none'
			});
		}
	});
layui.use(['carousel', 'form'], function(){
  var carousel = layui.carousel
  ,form = layui.form;
  carousel.render({
    elem: '#test1'
    ,width: '430px'
    ,height: '300px'
    ,interval: 3000
    ,anim: 'default'
    ,arrow: 'hover'
  });
  carousel.on('change(test4)', function(res){
    console.log(res)
  });
  var $ = layui.$, active = {
    set: function(othis){
      var THIS = 'layui-bg-normal'
      ,key = othis.data('key')
      ,options = {};
      othis.css('background-color', '#5FB878').siblings().removeAttr('style'); 
      options[key] = othis.data('value');
      ins3.reload(options);
    }
  };
  form.on('switch(autoplay)', function(){
    ins3.reload({
      autoplay: this.checked
    });
  });
  $('.demoSet').on('keyup', function(){
    var value = this.value
    ,options = {};
    if(!/^\d+$/.test(value)) return;
    options[this.name] = value;
    ins3.reload(options);
  });

  $('.demoTest .layui-btn').on('click', function(){
    var othis = $(this), type = othis.data('type');
    active[type] ? active[type].call(this, othis) : '';
  });
});
$(".type a").hover(function (e) {
    $(".type .hover").removeClass("hover");
    $(this).addClass("hover");
    var index = $(".type .hover").index();
    var x = $(".index-plate-list").width() * index + parseInt($(".index-plate-list").css("margin-right")) * index;
    $(".list-tr").css("transform", "translateX(-" + x + "px)");
 });
 $(".zd_comm").click(function(){
 $("html,body").stop(true);$("html,body").animate({scrollTop: $("#comment-place").offset().top}, 1000);})
$(".comm_tijiao").click(function(){
$(".comm_infobox").fadeIn('slow');
}) 
$(".comm_close,#comment_submit").click(function(){
$(".comm_infobox").fadeOut('slow');
}) 
$('.neibox pre').addClass('prettyprint linenums');
window.prettyPrint && prettyPrint();
$(".comm_rest").click(function(){
$("#comname,#commail,#comurl,#comment").attr("value","");
});
$(".smilebg").mouseleave(function(){
$(".smilebg").slideUp(200);
});
$('#comment_submit').click(function(){
  $('.commentform').submit();
});
 
 
});
function tool_img() {
	var URL = prompt('请输入图片的地址（禁止发违法图片）:','http://');
	if (URL) {
		document.getElementById('comment').value = document.getElementById('comment').value + '[img]' + URL + '[/img]';
	}
}
function tool_link() {
	var URL = prompt('请输入链接地址:','http://');
	if (URL) {
		document.getElementById('comment').value = document.getElementById('comment').value + '[link]' + URL + '[/link]';
	}
}
function tool_bq() {
	if($('.smilebg').css('display')=='none'){
		$('.smilebg').slideDown(200)
	}else{
		$('.smilebg').slideUp(200)
	}
}
//表情所用脚本
function grin(tag) {
    	var myField;
    	tag = '' + tag + '';
        if (document.getElementById('comment') && document.getElementById('comment').type == 'textarea') {
    		myField = document.getElementById('comment');
    	} else {
    		return false;
    	}
    	if (document.selection) {
    		myField.focus();
    		sel = document.selection.createRange();
    		sel.text = tag;
    		myField.focus();
    	}
    	else if (myField.selectionStart || myField.selectionStart == '0') {
    		var startPos = myField.selectionStart;
    		var endPos = myField.selectionEnd;
    		var cursorPos = endPos;
    		myField.value = myField.value.substring(0, startPos)
    					  + tag
    					  + myField.value.substring(endPos, myField.value.length);
    		cursorPos += tag.length;
    		myField.focus();
    		myField.selectionStart = cursorPos;
    		myField.selectionEnd = cursorPos;
    	}
    	else {
    		myField.value += tag;
    		myField.focus();
    	}
    }