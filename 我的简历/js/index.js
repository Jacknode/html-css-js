(function(){
    var wrap = document.querySelector('.wrap');
    var pages = wrap.querySelectorAll('.page');
    var page1 = document.querySelector('#page1');
    var page2 = wrap.querySelector('#page2');
    var page3 = wrap.querySelector('#page3');
    var page4 = wrap.querySelector('#page4');
    var page5 = wrap.querySelector('#page5');
    var page6 = wrap.querySelector('#page6');
    var page7 = wrap.querySelector('#page7');
    var showMove = [];//每一屏的出场
    var hideMove = [];//每一屏的归位
    var now = 0;
    var prev = 0;//上一次动画是第几屏
    var timer = 0;

    //封装一个自动添加show或者移除show的方法
    function tabShow(obj,type) {
        if(type=='add'){
            obj.classList.add('show');
        }else{
            obj.classList.remove('show');
        }
    }
    //获取第二屏的所有元素
    var page2 = {
        ipad:page2.querySelector('.ipad'),
        Basic:page2.querySelector('.Basic'),
        whiteRaduls:page2.querySelector('.whiteRaduls'),
        yellow:page2.querySelector('.yellow'),
        avatarIcon:page2.querySelector('.avatarIcon'),
        name:page2.querySelector('.name'),
        WhiteLine:page2.querySelector('.WhiteLine'),
        Pinyin:page2.querySelector('.Pinyin'),
        Birth:page2.querySelector('.Birth'),
        Email:page2.querySelector('.Email'),
        phone:page2.querySelector('.phone'),
        address:page2.querySelector('.address'),
        BirthVal:page2.querySelector('.BirthVal'),
        EmailVal:page2.querySelector('.EmailVal'),
        phoneVal:page2.querySelector('.phoneVal'),
        addressVal:page2.querySelector('.addressVal'),
        PurpleIcon:page2.querySelector('.PurpleIcon'),
        downRed:page2.querySelector('.downRed'),
        redIcon:page2.querySelector('.redIcon'),
        longLine:page2.querySelector('.longLine'),
        upLine:page2.querySelector('.upLine'),
        About:page2.querySelector('.About')
    };
    //获取第一屏的所有元素
    var page1 = {
        Resume:page1.querySelector('.Resume'),
        content:page1.querySelector('.content'),
        English:page1.querySelector('.English'),
        Avatar:page1.querySelector('.Avatar'),
        h2:page1.querySelector('.h2'),
        img:page1.querySelector('.img'),
        list:page1.querySelector('.list'),
        allP:page1.querySelectorAll('p')
    };
    var page3 = {
        ipad:page3.querySelector('.ipad'),
        Basic:page3.querySelector('.Basic'),
        PurpleIcon:page3.querySelector('.PurpleIcon'),
        downRed:page3.querySelector('.downRed'),
        redIcon:page3.querySelector('.redIcon'),
        longLine:page3.querySelector('.longLine'),
        upLine:page3.querySelector('.upLine'),
        About:page3.querySelector('.About'),
        school:page3.querySelector('.school'),
        Brief:page3.querySelector('.Brief')
    };
    var page4 = {
        ipad:page4.querySelector('.ipad'),
        Basic:page4.querySelector('.Basic'),
        PurpleIcon:page4.querySelector('.PurpleIcon'),
        downRed:page4.querySelector('.downRed'),
        redIcon:page4.querySelector('.redIcon'),
        longLine:page4.querySelector('.longLine'),
        upLine:page4.querySelector('.upLine'),
        About:page4.querySelector('.About'),
        workDown:page4.querySelector('.workDown'),
        workLine:page4.querySelector('.workLine'),
        Round1:page4.querySelector('.Round1'),
        Round2:page4.querySelector('.Round2'),
        Round3:page4.querySelector('.Round3'),
        Round3Val2:page4.querySelector('.Round3Val2'),
        Round3Val1:page4.querySelector('.Round3Val1'),
        Round2Val1:page4.querySelector('.Round2Val1'),
        Round2Val2:page4.querySelector('.Round2Val2'),
        Round1Val2:page4.querySelector('.Round1Val2'),
        Round1Val1:page4.querySelector('.Round1Val1')
    };
    var page5 = {
        ipad:page5.querySelector('.ipad'),
        Basic:page5.querySelector('.Basic'),
        PurpleIcon:page5.querySelector('.PurpleIcon'),
        downRed:page5.querySelector('.downRed'),
        redIcon:page5.querySelector('.redIcon'),
        longLine:page5.querySelector('.longLine'),
        upLine:page5.querySelector('.upLine'),
        About:page5.querySelector('.About')
    };
    var page6 = {
        ipad:page6.querySelector('.ipad'),
        Basic:page6.querySelector('.Basic'),
        PurpleIcon:page6.querySelector('.PurpleIcon'),
        downRed:page6.querySelector('.downRed'),
        redIcon:page6.querySelector('.redIcon'),
        longLine:page6.querySelector('.longLine'),
        upLine:page6.querySelector('.upLine'),
        About:page6.querySelector('.About'),
        jobVal:page6.querySelector('.jobVal'),
        fouc:page6.querySelector('.fouc')
    };
    var page7 = {
        ipad:page7.querySelector('.ipad'),
        Basic:page7.querySelector('.Basic'),
        PurpleIcon:page7.querySelector('.PurpleIcon'),
        downRed:page7.querySelector('.downRed'),
        redIcon:page7.querySelector('.redIcon'),
        longLine:page7.querySelector('.longLine'),
        upLine:page7.querySelector('.upLine'),
        About:page7.querySelector('.About'),
        posts:page7.querySelector('.posts'),
        postsVal:page7.querySelector('.postsVal'),
        expectations:page7.querySelector('.expectations'),
        expectationsVal:page7.querySelector('.expectationsVal'),
        mePost:page7.querySelector('.mePost'),
        mePostVal:page7.querySelector('.mePostVal'),
        believe:page7.querySelector('.believe'),
        believeVal:page7.querySelector('.believeVal'),
        workIcon:page7.querySelector('.workIcon')
    };
    /* 第0屏的入场动画 */
    showMove[0] = function(){
        page1.Resume.classList.add('show');
        page1.content.classList.add('show');
        page1.English.classList.add('show');
        page1.Avatar.classList.add('show');
        page1.h2.classList.add('show');
        page1.img.classList.add('show');
        page1.allP[0].classList.add('show');
        page1.allP[1].classList.add('show');
        page1.allP[2].classList.add('show');
    };
    /* 第1屏的入场动画 */
    showMove[1] = function(){
            page2.About.classList.add('show');
            page2.upLine.classList.add('show');
            page2.longLine.classList.add('show');
            page2.redIcon.classList.add('show');
            page2.downRed.classList.add('show');
            page2.PurpleIcon.classList.add('show');
            page2.addressVal.classList.add('show');
            page2.phoneVal.classList.add('show');
            page2.EmailVal.classList.add('show');
            page2.BirthVal.classList.add('show');
            page2.address.classList.add('show');
            page2.phone.classList.add('show');
            page2.Email.classList.add('show');
            page2.Birth.classList.add('show');
            page2.Pinyin.classList.add('show');
            page2.WhiteLine.classList.add('show');
            page2.name.classList.add('show');
            page2.avatarIcon.classList.add('show');
            page2.yellow.classList.add('show');
            page2.whiteRaduls.classList.add('show');
            page2.ipad.classList.add('show');
            page2.Basic.classList.add('show');
    };
    /* 第2屏的入场动画 */
    showMove[2] = function(){
        page3.ipad.classList.add('show');
        page3.Basic.classList.add('show');
        page3.PurpleIcon.classList.add('show');
        page3.downRed.classList.add('show');
        page3.redIcon.classList.add('show');
        page3.longLine.classList.add('show');
        page3.upLine.classList.add('show');
        page3.About.classList.add('show');
        page3.school.classList.add('show');
        page3.Brief.classList.add('show');
    };
    /* 第3屏的入场动画 */
    showMove[3] = function(){
        page4.ipad.classList.add('show');
        page4.Basic.classList.add('show');
        page4.PurpleIcon.classList.add('show');
        page4.downRed.classList.add('show');
        page4.redIcon.classList.add('show');
        page4.longLine.classList.add('show');
        page4.upLine.classList.add('show');
        page4.About.classList.add('show');
        page4.workDown.classList.add('show');
        page4.workLine.classList.add('show');
        page4.Round1.classList.add('show');
        page4.Round2.classList.add('show');
        page4.Round3.classList.add('show');
        page4.Round3Val2.classList.add('show');
        page4.Round3Val1.classList.add('show');
        page4.Round2Val2.classList.add('show');
        page4.Round2Val1.classList.add('show');
        page4.Round1Val2.classList.add('show');
        page4.Round1Val1.classList.add('show');
    };
    /* 第4屏的入场动画 */
    showMove[4] = function () {
        page5.ipad.classList.add('show');
        page5.Basic.classList.add('show');
        page5.PurpleIcon.classList.add('show');
        page5.downRed.classList.add('show');
        page5.redIcon.classList.add('show');
        page5.longLine.classList.add('show');
        page5.upLine.classList.add('show');
        page5.About.classList.add('show');
    };
    showMove[5] = function () {
        page6.ipad.classList.add('show');
        page6.Basic.classList.add('show');
        page6.PurpleIcon.classList.add('show');
        page6.downRed.classList.add('show');
        page6.redIcon.classList.add('show');
        page6.longLine.classList.add('show');
        page6.upLine.classList.add('show');
        page6.About.classList.add('show');
        page6.jobVal.classList.add('show');
        page6.fouc.classList.add('show');
    };
    /* 第5屏的入场动画 */
    showMove[6] = function () {
        page7.ipad.classList.add('show');
        page7.Basic.classList.add('show');
        page7.PurpleIcon.classList.add('show');
        page7.downRed.classList.add('show');
        page7.redIcon.classList.add('show');
        page7.longLine.classList.add('show');
        page7.upLine.classList.add('show');
        page7.About.classList.add('show');

        page7.posts.classList.add('show');
        page7.postsVal.classList.add('show');
        page7.expectations.classList.add('show');
        page7.expectationsVal.classList.add('show');
        page7.mePost.classList.add('show');
        page7.mePostVal.classList.add('show');
        page7.believe.classList.add('show');
        page7.believeVal.classList.add('show');
        page7.workIcon.classList.add('show');
    };
    /* 第0屏的回到初始化动画 */
    hideMove[0] = function(){
        page1.Resume.classList.remove('show');
        page1.content.classList.remove('show');
        page1.English.classList.remove('show');
        page1.Avatar.classList.remove('show');
        page1.h2.classList.remove('show');
        page1.img.classList.remove('show');
        page1.allP[0].classList.remove('show');
        page1.allP[1].classList.remove('show');
        page1.allP[2].classList.remove('show');
    };
    /* 第1屏的回到初始化动画 */
    hideMove[1] = function(){
        page2.About.classList.remove('show');
        page2.upLine.classList.remove('show');
        page2.longLine.classList.remove('show');
        page2.redIcon.classList.remove('show');
        page2.downRed.classList.remove('show');
        page2.PurpleIcon.classList.remove('show');
        page2.addressVal.classList.remove('show');
        page2.phoneVal.classList.remove('show');
        page2.EmailVal.classList.remove('show');
        page2.BirthVal.classList.remove('show');
        page2.address.classList.remove('show');
        page2.phone.classList.remove('show');
        page2.Email.classList.remove('show');
        page2.Birth.classList.remove('show');
        page2.Pinyin.classList.remove('show');
        page2.WhiteLine.classList.remove('show');
        page2.name.classList.remove('show');
        page2.avatarIcon.classList.remove('show');
        page2.yellow.classList.remove('show');
        page2.whiteRaduls.classList.remove('show');
        page2.ipad.classList.remove('show');
        page2.Basic.classList.remove('show');
    };
    /* 第2屏的回到初始化动画 */
    hideMove[2] = function(){
        page3.ipad.classList.remove('show');
        page3.Basic.classList.remove('show');
        page3.PurpleIcon.classList.remove('show');
        page3.downRed.classList.remove('show');
        page3.redIcon.classList.remove('show');
        page3.longLine.classList.remove('show');
        page3.upLine.classList.remove('show');
        page3.About.classList.remove('show');
        page3.school.classList.remove('show');
        page3.Brief.classList.remove('show');
    };
    /* 第3屏的回到初始化动画 */
    hideMove[3] = function(){
        page4.ipad.classList.remove('show');
        page4.Basic.classList.remove('show');
        page4.PurpleIcon.classList.remove('show');
        page4.downRed.classList.remove('show');
        page4.redIcon.classList.remove('show');
        page4.longLine.classList.remove('show');
        page4.upLine.classList.remove('show');
        page4.About.classList.remove('show');
        page4.workDown.classList.remove('show');
        page4.workLine.classList.remove('show');
        page4.Round1.classList.remove('show');
        page4.Round2.classList.remove('show');
        page4.Round3.classList.remove('show');
        page4.Round3Val2.classList.remove('show');
        page4.Round3Val1.classList.remove('show');
        page4.Round2Val2.classList.remove('show');
        page4.Round2Val1.classList.remove('show');
        page4.Round1Val2.classList.remove('show');
        page4.Round1Val1.classList.remove('show');
    };
    /* 第4屏的回到初始化动画 */
    hideMove[4] = function () {
        page5.ipad.classList.remove('show');
        page5.Basic.classList.remove('show');
        page5.PurpleIcon.classList.remove('show');
        page5.downRed.classList.remove('show');
        page5.redIcon.classList.remove('show');
        page5.longLine.classList.remove('show');
        page5.upLine.classList.remove('show');
        page5.About.classList.remove('show');
    };
    hideMove[5] = function () {
        page6.ipad.classList.remove('show');
        page6.Basic.classList.remove('show');
        page6.PurpleIcon.classList.remove('show');
        page6.downRed.classList.remove('show');
        page6.redIcon.classList.remove('show');
        page6.longLine.classList.remove('show');
        page6.upLine.classList.remove('show');
        page6.About.classList.remove('show');
        page6.jobVal.classList.remove('show');
        page6.fouc.classList.remove('show');
    };
    /* 第6屏的回到初始化动画 */
    hideMove[6] = function () {
        page7.ipad.classList.remove('show');
        page7.Basic.classList.remove('show');
        page7.PurpleIcon.classList.remove('show');
        page7.downRed.classList.remove('show');
        page7.redIcon.classList.remove('show');
        page7.longLine.classList.remove('show');
        page7.upLine.classList.remove('show');
        page7.About.classList.remove('show');

        page7.posts.classList.remove('show');
        page7.postsVal.classList.remove('show');
        page7.expectations.classList.remove('show');
        page7.expectationsVal.classList.remove('show');
        page7.mePost.classList.remove('show');
        page7.mePostVal.classList.remove('show');
        page7.believe.classList.remove('show');
        page7.believeVal.classList.remove('show');
        page7.workIcon.classList.remove('show');
    };
    show();
    touchEvent({
        el:wrap,
        swipeUp:function(){
            var next = (now + 1)%pages.length;
            pages[next].style.transition = "none";
            pages[next].className = "page";
            setTimeout(function(){
                pages[now].style.transition = "1s";
                pages[now].className = "page pagePrev";
                pages[next].style.transition = "1s";
                pages[next].className = "page pageActive";
                prev = now;
                now = next;
                hide();
            },30);
        },
        swipeDown: function(){
            var next = (now - 1 + pages.length)%pages.length;
            pages[next].style.transition = "none";
            pages[next].className = "page pagePrev";
            setTimeout(function(){
                pages[now].style.transition = "1s";
                pages[now].className = "page";
                pages[next].style.transition = "1s";
                pages[next].className = "page pageActive";
                prev = now;
                now = next;
                hide();
            },30);
        }
    });
    function hide(){
        clearTimeout(timer);
        timer = setTimeout(function(){
            hideMove[prev]();
            show();
        },500);
    }
    function show(){
        showMove[now]();
    }
})();
document.addEventListener('touchstart',function (e) {
    e.preventDefault();
});
// 滑动幻灯片
(function () {
    var wrapImg = document.querySelector('.wrapImg');
    var list = wrapImg.querySelector('.list');
    var lis = list.children
    var navs = wrapImg.querySelectorAll('span');
    list.innerHTML +=list.innerHTML;
    console.log(lis.length)
    list.style.width = lis.length +'00%';
    var liW = css(wrapImg,'width');
    var start = {};
    var startEl = {};
    var isMove = true;
    var now = 0;//记录当前是到了第几张
    css(list,'translateX',0);
    css(list,'translateZ',0.01);
    wrapImg.addEventListener('touchstart',function (e) {
        clearInterval(list.timer);
        var touch = e.changedTouches[0];
        start = {x:touch.pageX,y:touch.pageY};
        isMove = true;
        if(Math.abs(now)==0){
            now = -lis.length/2;
            css(list,'translateX',now*liW);
        }else if(Math.abs(now)==lis.length-1){
            now = -(lis.length/2-1);
            css(list,'translateX',now*liW);
        }
        startEl.x = css(list,'translateX');
    });
    wrapImg.addEventListener('touchmove',function (e) {
        if(!isMove){
            return
        }
        var nowTouch = e.changedTouches[0];
        var nowT = {x:nowTouch.pageX - start.x,y:nowTouch.pageY - start.y};

        if(Math.abs(nowT.y) > Math.abs(nowT.x)){
            isMove = false;
            return;
        }

        css(list,'translateX',nowT.x+startEl.x);
    });
    wrapImg.addEventListener('touchend',function (e) {
        if(!isMove){
            return
        }
        now = Math.round(css(list,'translateX')/liW);

        var target = now*liW;
        for(var i=0;i<navs.length;i++){
            navs[i].className = '';
        }
        navs[Math.abs(now%navs.length)].className = 'active';
        startMove({
            el:list,
            target:{
                translateX:target
            },
            time:500,
            type:'linear'
        })
    })
})();

//音乐控制
(function () {
    var music = document.querySelector('.music');
    var audio = document.querySelector('#audio');

    music.addEventListener('touchstart',function () {
        if(audio.paused){
            audio.play();
            music.style.backgroundImage = "url('img/Music.png')";
            music.style.animation = 'musicTab 3s infinite linear';
        }else{
            music.style.animation = 'none';
            music.style.backgroundImage = "url('img/Music2.png')";
            audio.pause();

        }
    })
})();