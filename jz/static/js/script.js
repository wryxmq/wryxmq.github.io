$(function(){
    
    //此处线报猿的广告
    $.getScript("https://api.xianbaoyuan.net/static/js/layerWeb.js?time=" + new Date().getTime());
    
    
	//Topmenu
	$(".nav-menu li:has(ul)").children("a").addClass('hasub');
	$(".nav-menu li:has(ul)").mouseenter(function(){ 
		$(this).addClass("navhome").find('ul').stop(true, true).delay(50).slideDown(100);
	}).mouseleave(function(){
		$(this).removeClass("navhome").find('ul').stop(true, true).delay(50).slideUp(100);
	});
	$('.mb-nav-ctrl').click(function(){
		$(".navbar").toggleClass("active");	
	});
    $(document).bind("click",function(e){
        if(!$(e.target).closest(".mb-nav-ctrl").length && !$(e.target).closest(".navbar").length){
			minav=0;
			$(".navbar").removeClass("active");
        }
    });
	var surl = location.href, surl2 = $(".positionbar a:eq(2)").attr("href"), surl3 = $(".positionbar a:eq(3)").attr("href");
	$(".nav-menu>li>a").each(function() {
		if ($(this).attr("href")==surl || $(this).attr("href")==surl2 || $(this).attr("href")==surl3){
			$(this).parent().addClass("cu");
		}
	});
	b();
	$(window).scroll(function(e){
		b();		
	});
	$('#gotop').click(function(){
		$("html,body").animate({ scrollTop : '0' }, 400);	
	});
	$('#code').hover(function(){
		$(this).attr('id','code_hover');
		$('#code_img').show();
	},function(){
		$(this).attr('id','code');
		$('#code_img').hide();
	});
	function b(){
		h = $(window).height();
		t = $(document).scrollTop();
		if(t > h){
			$('#gotop').show();
		}else{
			$('#gotop').hide();
		}
	}
	//erx:GetMore
	var startnum = 0, gmsnum = 40, totalnum = $(".xyti.fti .count b.red").text()*1;
	$(".pages .next").click(function(){
		if(startnum < totalnum-gmsnum){
			startnum += gmsnum;
			getNewlistAjax(startnum);
		}else{
			alert("已到达最末页");
		}
	});
	$(".pages .prev").click(function(){
		if(startnum >= gmsnum){
			startnum -= gmsnum;
			getNewlistAjax(startnum);
		}else{
			alert("当前已是第1页");
		}
	});
	function getNewlistAjax(sn){
		$(".newlist").append('<div class="loading"><i class="fa fa-spinner fa-2x fa-spin"></i></div>');
		var fp = bloghost+"zb_users/theme/Zbedia/plugin/getmore";
	    $.ajax({
			type: "GET",
			timeout: 6000,
			url: fp+".php?startnum="+sn,
			success: function(data){
				$(".newlist ul").html(data);
				$(".newlist .loading").remove();
			},
			error: function (textStatus) {
				if(textStatus == "timeout"){
					$(".newlist .loading").html('<span>加载超时，请刷新网页或稍后再试！</span>');
				}
			}
	    });
	}
	//erx:Mobile
	var xyPwt = $(window).width();
	$(window).resize(function(){
		xyPwt=$(window).width();
		erxMobileNav();
	});
	function erxMobileNav(){
		if(xyPwt<=900){
			$(".nav-menu li:has(ul)").each(function(){
				$(this).attr("data-minav", 0);
				$(this).children("a").click(function(){
					var minav = $(this).parent().attr("data-minav")*1;
					if(!minav){
						$(this).parent().attr("data-minav", 1).siblings().attr("data-minav", 0);
						return false;
					}
				});
			});
		}else{
			$(".nav-menu li:has(ul)").removeAttr("data-minav");
		}
	}
	erxMobileNav();
});
if(window.console && window.console.log)
zbp.plugin.unbind("comment.reply.start", "system");
zbp.plugin.on("comment.reply.start", "Zbedia", function(id) {
	var i = id;
	$("#inpRevID").val(i);
	var frm = $('#divCommentPost'), cancel = $("#cancel-reply");
	if (!frm.hasClass("reply-frm")){
		frm.before($("<div id='temp-frm' style='display:none'>")).addClass("reply-frm");
	}
	$('#AjaxComment' + i).before(frm);
	cancel.show().click(function() {
		var temp = $('#temp-frm');
		$("#inpRevID").val(0);
		if (!temp.length || !frm.length) return;
		temp.before(frm);
		temp.remove();
		$(this).hide();
		frm.removeClass("reply-frm");
		return false;
	});
	try {
		$('#txaArticle').focus();
	} catch (e) {}
	return false;
})
zbp.plugin.on("comment.get", "Zbedia", function (logid, page) {
	$('span.commentspage').html("Waiting...");
});
zbp.plugin.on("comment.got", "Zbedia", function () {
	$("#cancel-reply").click();
});
zbp.plugin.on("comment.post.success", "Zbedia", function () {
	$("#cancel-reply").click();
});
















