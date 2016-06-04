$(function(){

    //初始化
    var mySwiper = new Swiper('.swiper-container', {
        speed:700,
        pagination: '.swiper-pagination',
        direction: 'vertical',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 0,
        mousewheelControl: true,
        noSwiping : true,
        onSlideNextEnd: function(){
            clearInterval(timer1);
            if(mySwiper.progress==1){
                show();
            }
            if(mySwiper.progress>0 && mySwiper.progress<0.5){
                change();
                timer1=setInterval(change,2000);
            }
        },
        onSlidePrevEnd:function(){
            clearInterval(timer1);
            if(mySwiper.progress>0 && mySwiper.progress<0.5){
                change();
                timer1=setInterval(change,2000);
            }
        }
    });

    var aCir=document.querySelectorAll('canvas');

    //第二屏
    var oPage2=document.querySelector('#page_two');
    var oPage2Bg=document.querySelector('#page_two .page_two_bg');
    var aLiPage2=oPage2.getElementsByTagName('li');
    var arrClass=['l','m','r','','','',''];
    var iCount=2;
    var timer1=null;
    var oMiddle=null;

    function change(){
        for(var i=0;i<aLiPage2.length;i++){
            aLiPage2[i].className=arrClass[i];
            aLiPage2[i].onmouseover=aLiPage2[i].onmouseout=null;
            aLiPage2[i].children[0].style.opacity=0;
        }
        arrClass.unshift(arrClass.pop());
        oPage2Bg.style.backgroundImage='url(img/'+iCount+'.png)';
        oMiddle=document.querySelector('.m');
        oMiddle.children[0].style.opacity=1;
        oMiddle.onmouseover=function(){
            clearInterval(timer1);
            this.children[0].href='javascript:window.open("example/'+(iCount-1)+'/'+(iCount-1)+'.html")';
        };
        oMiddle.onmouseout=function(){
            //change();
            timer1=setInterval(change,2000);
            this.children[0].href='javascript:;';
        };
        iCount++;
        if(iCount>7){
            iCount=1;
        }
    }

    //第三屏
    var oPage3=document.querySelector('#page_three');
    var aLiPage3=oPage3.children;

    for(var i=0;i<aLiPage3.length;i++){
        aLiPage3[i].onmouseover=function(){
            for(var i=0;i<aLiPage3.length;i++){
                aLiPage3[i].style.width='10%';
            }
            this.style.width='60%';
            this.children[1].style.opacity=1;
        };
        aLiPage3[i].onmouseout=function(){
            for(var i=0;i<aLiPage3.length;i++){
                aLiPage3[i].style.width='20%';
            }
            this.children[1].style.opacity=0;
        };
    }



    //第四屏
    var c =aCir[0];
    x = c.getContext('2d');
    pr = window.devicePixelRatio || 1;
    w = window.innerWidth;
    h = window.innerHeight;
    f = 90;
    var q=[];
    m = Math;
    r = 0;
    u = m.PI*2;
    v = m.cos;
    z = m.random;
    var timer=null;
    c.width = w*pr;
    c.height = h*pr;
    x.scale(pr, pr);
    x.globalAlpha = 0.6;
    function show(){
        x.clearRect(0,0,w,h);
        q=[{x:0,y:h*.7+f},{x:0,y:h*.7-f}];
        timer=setInterval(function(){
            d(q[0], q[1]);
            if(q[1].x>w+f){
                clearInterval(timer);
            }
        },16);
    }
    function d(i,j){
        x.beginPath();
        x.moveTo(i.x, i.y);
        x.lineTo(j.x, j.y);
        var k = j.x + (z()*2-0.25)*f;
        n = y(j.y);
        x.lineTo(k, n);
        x.closePath();
        r-=u/-50;
        x.fillStyle = '#'+(v(r)*127+128<<16 | v(r+u/3)*127+128<<8 | v(r+u/3*2)*127+128).toString(16);
        x.fill();
        q[0] = q[1];
        q[1] = {x:k,y:n};
    }
    function y(p){
        var t = p + (z()*2-1.1)*f;
        return (t>h||t<0) ? y(p) : t;
    }
    $('.page_four').click(function(){
        show();
    });
});

function d2a(n){
    return n/180*Math.PI;
}