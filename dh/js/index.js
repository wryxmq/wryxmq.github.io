// 每二十四小时进行一次弹窗弹出
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
var newD=new Date(date+24*60*60*1000);

var Ifvip1 = document.cookie.indexOf("vip=");
if(Ifvip1==-1){
    document.cookie="vip=1; expires="+newD.toUTCString();
    alert("网站试运行期间随时可能有所改变,还请谅解.\n也欢迎提出您的宝贵意见或向本站提供网址方便更多人\n邮箱: wryxmq@protonmail.com\n注: 访问链接时需要等待完全加载完成后进行验证才能正常访问到真正的网站");
}

if(Ifvip1!=-1){
    var Ifvip=getCookie("vip");
}

// 代码完善中....
window.onscroll = function(){
  //回到顶部
  var sllTop = document.documentElement.scrollTop||document.body.scrollTop;
  if(sllTop>240){
    $('#get-top').css('display','block')
  }else{
    $('#get-top').css('display','none')
  }
}
$('#get-top').click(function(){ 
  $('body,html').animate({
    scrollTop: 0
  }, 800);//点击回到顶部按钮，缓懂回到顶部,数字越小越快
})
// 显示/隐藏二级菜单
$(".left-menu-btn").hover(function(){
  $('#tow-nav').fadeIn(200);
},function(){
  $("#tow-nav").hover(function(){
    $('#tow-nav').fadeIn(0);
  },function(){
    $('#tow-nav').fadeOut(0)
  });
  $('#tow-nav').fadeOut(0)
})


//判断用户使用的设备
var deviceVal  = browserRedirect();
function browserRedirect() {
  var sUserAgent = navigator.userAgent.toLowerCase();
  var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
  var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
  var bIsMidp = sUserAgent.match(/midp/i) == "midp";
  var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
  var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
  var bIsAndroid = sUserAgent.match(/android/i) == "android";
  var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
  var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
  if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
    return 'phone';
  } else {
    return 'pc';
  }
}

/*
 * 2018-6-12更新
 * 解决在低分辨率下首页内容过高导致滚动条出现，影响主题背景图片不全屏的问题
 * 解决方式：对于屏幕分辨率高度低于845px显示器，改变首页的内容为6块区域。
 */

 (function(){
  //当浏览器窗口被调整大小时触发
  window.onresize = function(){
    ShowHideElement("i-link-box","linkList-item",845);
  }
  window.onload = function(){
    ShowHideElement("i-link-box","linkList-item",845); 
  }
  function ShowHideElement(Element1, Element2, Vaule){
    var Person = document.getElementsByClassName(Element1);
    var BoxHeight = document.getElementsByClassName(Element2);
    var WindowHeight = window.innerHeight||document.body.clientHeight;
    //遍历获取到的元素
    for(var i=6; i<Person.length; i++){
      if(WindowHeight <= Vaule && deviceVal === "pc"){
        Person[i].style.display = "none";
        BoxHeight[0].style.marginTop="5px";
      }else{
        Person[i].style.display = "block";
        BoxHeight[0].style.marginTop="0px";
      }
    }
  }
  window.ShowHideElement = ShowHideElement;
}());

 
//下面别动
function myApi(){

    this.mouseScroll = {

        inte : function(obj,value){
            this.OBJ = obj;
            this.addscroll(obj);



            var outH = obj.outerHeight(),
                oScrollcontent = obj.children(':first'),
                contentH = oScrollcontent.outerHeight(),
                oYscrollinnerH = outH/contentH*outH,
                oYscrollouter = obj.find('#Yscrollouter'),
                oYscrollinner = obj.find('#Yscrollinner');

            obj.css({'position': 'relative','overflow':'hidden'});
            oScrollcontent.css('position', 'absolute');

            if(contentH > outH){
                this.mousehover(obj, oYscrollouter, oYscrollinner);
                this.mousewheel(obj, value, oScrollcontent, oYscrollinner, outH, contentH, oYscrollinnerH );
                this.mousemoved(obj, oScrollcontent, oYscrollouter, oYscrollinner, outH, contentH, oYscrollinnerH );
            };
        },

        addscroll : function(obj,value){
            obj.append('<div id="Yscrollouter"><div id="Yscrollinner"></div></div>');
            $('#Yscrollinner').css('cursor','pointer');
        },

        mousehover : function(obj, outer, inner){

            obj.hover(function() {
                outer.fadeIn(400);
            }, function() {
                outer.fadeOut(400);
            });

            inner.hover(function() {
                $('body').css({
                    '-moz-user-select': 'none',
                    '-webkit-user-select': 'none',
                    '-ms-user-select': 'none',
                    '-khtml-user-select': 'none',
                    'user-select': 'none',});
            }, function() {
                $('body').css({
                    '-moz-user-select': 'auto',
                    '-webkit-user-select': 'auto',
                    '-ms-user-select': 'auto',
                    '-khtml-user-select': 'auto',
                    'user-select': 'auto',});
            });

        },

        mousewheel : function(obj, value, O, inner, H1, H2, H3){

            var oScrollcontentVal = value/(H1 - H3)*(H2 - H1);

                inner.height(H3);  //滚动条高度

            obj.on('mousewheel',function(event,delta ){  //绑定滚轮事件

                event.preventDefault();  //阻止浏览器默认为行

                var delta = event.originalEvent.wheelDelta;
                var oYscrollinnerTop = inner.position().top;

                var oScrollcontentTop = O.position().top;

                if(delta > 0){
                    if(oYscrollinnerTop - value < 0){
                        inner.css('top', 0);
                        O.css('top', 0);
                    }else{
                        inner.css('top', oYscrollinnerTop - value);
                        O.css('top', oScrollcontentTop + oScrollcontentVal);
                    }
                }else{
                    if(oYscrollinnerTop + value > H1 - H3){
                        inner.css('top', H1 - H3);
                        O.css('top', H1 - H2);
                    }else{
                        inner.css('top', oYscrollinnerTop + value);
                        O.css('top', oScrollcontentTop - oScrollcontentVal);
                    }
                };
            });

        },

        mousemoved : function(obj, O, outer, inner, H1, H2, H3){
            inner.on('mousedown',function(event){   //绑定鼠标事件

                var clientY = event.clientY,
                    oYscrollinnerTop = inner.position().top,
                    oScrollcontentTop = O.position().top,

                    moveY = 0;

                    $(document).on('mousemove',function(event){
                        moveY = event.clientY - clientY;
                        var oScrollcontentMove = moveY/(H1 - H3)*(H2 - H1);

                        if(oYscrollinnerTop + moveY < 0){
                            inner.css('top', 0);
                            O.css('top', 0);
                        }else if(oYscrollinnerTop + moveY > H1 - H3){
                            inner.css('top', H1 - H3);
                            O.css('top', H1 - H2);
                        }else{
                            inner.css('top', oYscrollinnerTop + moveY);
                            O.css('top', oScrollcontentTop - oScrollcontentMove);
                        }
                    });

                    $(document).on('mouseup',function(event){
                        $(document).off('mousemove');
                    })

            })
        }

    }
}

