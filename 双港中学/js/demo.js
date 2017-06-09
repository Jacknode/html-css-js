/**
 * Created by User on 2016/10/6.
 */
$(function(){

    var num = 0;
    var timer=null;
    Carouse();
    //轮播
    function Carouse(){
        timer = setInterval(function(){
        if(num==$('#Carousel').find('a').length){
            num=0;
        }
        $('#Carousel').find('a').hide().eq(num).fadeIn();
            num++;
        },2000)
    }
    //内容轮播
    //Content();
    //var timers = null;
    //var now = 0;
    //var arr = ['sa','dddd','ggggg'];
    //function Content(){
    //    var aImg = $('.Content-images').find('img');
    //    timers = setInterval(function(){
    //        if(now<aImg.length-1){now++;}
    //        else{now=0;}
    //        changeTo(now);
    //
    //    },1000);
    //    function changeTo(index){
    //        aImg.hide().eq(index).fadeIn();
    //        $('.number').find('dd').removeClass('active').eq(index).addClass('active');
    //        $('.Content-images').find('span').html(arr[index]);
    //    }
    //    $('number').find('dd').each(function(item){
    //        $(this).hover(function(){
    //            clearInterval(timers);
    //            changeTo(item);
    //            now = item;
    //        },function(){
    //            timers = setInterval(function(){
    //                if(now<aImg.length-1){now++;}
    //                else{now=0;}
    //                changeTo(now);
    //
    //            },1000);
    //        })
    //    })
    //}
    Content();
        var oDiv = $('.dl-img');
        var img = $('.dl-img').find('img');
        var imgW = img.eq(0).innerHeight();
        var timer1 = null;
        var iNow = 0;
    console.log(imgW)
        function Content(){


            timer1 = setInterval(function(){
                if(iNow<img.length-1){
                iNow++;
                }else{
                    iNow=0;
                }
                oDiv.animate({'margin-top':-iNow*imgW});


            console.log(-iNow*imgW)
            },2000)
        }
    school();
    //校园风光
    function school(){
        var oUl = $('.Campus-imgages').find('ul');
        var oLiWidth = oUl.find('li').innerWidth();
        var timer = null;

        function leftMove(){
            oUl.find('li:last').prepend(oUl);
            oUl.css('magin-left','-oLiWidth');
            oUl.animate({'margin-left':0});
        }
        function rightMove(){
            oUl.animate({'margin-left':-oLiWidth},function(){
                oUl.find('li:first').appendTo(oUl);
                oUl.css('margin-left','0');
            })
        }
        timer = setInterval(rightMove,2000);
        oUl.hover(function(){
            clearInterval(timer);
        },function(){
            timer = setInterval(rightMove,2000);
        })

    }
});