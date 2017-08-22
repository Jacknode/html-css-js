//动画形式公式
var Tween = {
    linear: function (t, b, c, d){
        return c*t/d + b;
    },
    easeIn: function(t, b, c, d){
        return c*(t/=d)*t + b;
    },
    easeOut: function(t, b, c, d){
        return -c *(t/=d)*(t-2) + b;
    },
    easeBoth: function(t, b, c, d){
        if ((t/=d/2) < 1) {
            return c/2*t*t + b;
        }
        return -c/2 * ((--t)*(t-2) - 1) + b;
    },
    easeInStrong: function(t, b, c, d){
        return c*(t/=d)*t*t*t + b;
    },
    easeOutStrong: function(t, b, c, d){
        return -c * ((t=t/d-1)*t*t*t - 1) + b;
    },
    easeBothStrong: function(t, b, c, d){
        if ((t/=d/2) < 1) {
            return c/2*t*t*t*t + b;
        }
        return -c/2 * ((t-=2)*t*t*t - 2) + b;
    },
    elasticIn: function(t, b, c, d, a, p){
        if (t === 0) {
            return b;
        }
        if ( (t /= d) == 1 ) {
            return b+c;
        }
        if (!p) {
            p=d*0.3;
        }
        if (!a || a < Math.abs(c)) {
            a = c;
            var s = p/4;
        } else {
            var s = p/(2*Math.PI) * Math.asin (c/a);
        }
        return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
    },
    elasticOut: function(t, b, c, d, a, p){
        if (t === 0) {
            return b;
        }
        if ( (t /= d) == 1 ) {
            return b+c;
        }
        if (!p) {
            p=d*0.3;
        }
        if (!a || a < Math.abs(c)) {
            a = c;
            var s = p / 4;
        } else {
            var s = p/(2*Math.PI) * Math.asin (c/a);
        }
        return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
    },
    elasticBoth: function(t, b, c, d, a, p){
        if (t === 0) {
            return b;
        }
        if ( (t /= d/2) == 2 ) {
            return b+c;
        }
        if (!p) {
            p = d*(0.3*1.5);
        }
        if ( !a || a < Math.abs(c) ) {
            a = c;
            var s = p/4;
        }
        else {
            var s = p/(2*Math.PI) * Math.asin (c/a);
        }
        if (t < 1) {
            return - 0.5*(a*Math.pow(2,10*(t-=1)) *
                Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
        }
        return a*Math.pow(2,-10*(t-=1)) *
            Math.sin( (t*d-s)*(2*Math.PI)/p )*0.5 + c + b;
    },
    backIn: function(t, b, c, d, s){
        if (typeof s == 'undefined') {
            s = 1.70158;
        }
        return c*(t/=d)*t*((s+1)*t - s) + b;
    },
    backOut: function(t, b, c, d, s){
        if (typeof s == 'undefined') {
            s = 1.30158;  //回缩的距离
        }
        return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
    },
    backBoth: function(t, b, c, d, s){
        if (typeof s == 'undefined') {
            s = 1.70158;
        }
        if ((t /= d/2 ) < 1) {
            return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
        }
        return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
    },
    bounceIn: function(t, b, c, d){
        return c - Tween['bounceOut'](d-t, 0, c, d) + b;
    },
    bounceOut: function(t, b, c, d){
        if ((t/=d) < (1/2.75)) {
            return c*(7.5625*t*t) + b;
        } else if (t < (2/2.75)) {
            return c*(7.5625*(t-=(1.5/2.75))*t + 0.75) + b;
        } else if (t < (2.5/2.75)) {
            return c*(7.5625*(t-=(2.25/2.75))*t + 0.9375) + b;
        }
        return c*(7.5625*(t-=(2.625/2.75))*t + 0.984375) + b;
    },
    bounceBoth: function(t, b, c, d){
        if (t < d/2) {
            return Tween['bounceIn'](t*2, 0, c, d) * 0.5 + b;
        }
        return Tween['bounceOut'](t*2-d, 0, c, d) * 0.5 + c*0.5 + b;
    }
}
// 获取或者设置样式
function css(el,attr,val){
    var transform = ['rotate','rotateX','rotateY','rotateZ','scale','scaleX','scaleY','skewX','skewY','translateX','translateY','translateZ'];
    for(var i = 0; i < transform.length; i++){
        if(attr == transform[i]){
            return setTransform(el,attr,val);
        }
    }
    if(arguments.length == 2){
        if(el.currentStyle){
            val = el.currentStyle[attr];
        } else {
            val = getComputedStyle(el)[attr];
        }
        return parseFloat(val);
    } else {
        if(attr == "opacity"){
            el.style.opacity = val;
            el.style.filter = "alpha(opacity= "+val*100+")";
        } else if(attr == "zIndex"){
            el.style[attr] = Math.round(val);
        }else {
            el.style[attr] = val + "px";
        }
    }
}
function setTransform(el,attr,val){
    if(!el.transform){
        el.transform = {};
        //如果元素没有这个自定义属性我们就创建一下，格式是个对象
    }
    if(typeof val == "undefined"){
        return el.transform[attr];
    } else {
        el.transform[attr] = val;
        var value = "";
        for(var s in el.transform){
            //console.log(s,el.transform[s]);
            switch(s){
                case "rotate":
                case "rotateX":
                case "rotateY":
                case "rotateZ":
                case "skewX":
                case "skewY":
                    value += (s+"("+el.transform[s]+"deg) ");
                    break;
                case "translateX":
                case "translateY":
                case "translateZ":
                    value += (s+"("+el.transform[s]+"px) ");
                    break;
                case "scale":
                case "scaleX":
                case "scaleY":
                    value += (s+"("+el.transform[s]+") ");
                    break;
            }
        }
        el.style.WebkitTransform = value;
        el.style.MozTransform = value;
        el.style.msTransform = value;
        el.style.transform = value;
    }
}
//执行动画
function startMove(init){
    clearInterval(init.el.timer);
    var t = 0;
    var b = {};
    var c = {};
    var d = Math.ceil(init.time/20);
    for( var s in init.target){
        b[s] = css(init.el,s);
        c[s] = init.target[s] - b[s];
    }
    init.el.timer = setInterval(function(){
        t++;
        if(t > d){
            clearInterval(init.el.timer);
            init.callBack&&init.callBack();
        } else {
            for(var s in init.target){
                var val = Tween[init.type](t,b[s],c[s],d);
                css(init.el,s,val);
            }
            init.callIn&&init.callIn();
        }
    },20);
}