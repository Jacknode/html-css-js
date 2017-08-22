/**
 * Created by mac on 17/7/29.
 */


document.addEventListener('touchstart', function(e) {
    e.preventDefault();
});
banner()
// 头部导航的动画
function banner() {
    var navWrap = document.querySelectorAll('.picAll');
    for(var i=0;i<navWrap.length;i++){
        tab(navWrap[i]);
    }
    function tab(obj) {

        var navs = obj.querySelector('.pics');
        var lis = navs.children;
        var liW = css(lis[0], 'width');
        css(navs, 'width', lis.length * liW);
        mScroll({
            wrap: obj,
            dir: 'x',
            over: 'none',
            showBar: false
        });
    }

    var wrap = document.querySelector('#wrap');
    // var str = '';
    //
    // for(var i=0;i<100;i++){
    //     str+='<li>'+i+'</li>';
    // }
    // wrap.querySelector('#list').innerHTML = str;
    mScroll({
        wrap: wrap,
        dir: 'y',
        over: 'none',
        showBar: false
    })
}
