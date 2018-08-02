//C开发
define(function (require, exports, module) {
    function scale(obj1, obj2){
        var downX = 0;
        var downY = 0;
        var downW = 0;
        var downH = 0;
        obj2.onmousedown  = function(ev){
            var ev = ev || window.event;
            downX = ev.clientX;
            downY = ev.clientY;
            downW = obj1.offsetWidth;
            downH = obj1.offsetHeight;

            document.onmousemove = function(ev){
                var ev = ev || window.event;
                var L = ev.clientX - downX + downW;
                var T = ev.clientY - downY + downH;
                L = require("../webQQ/range").range( L, 500, obj2.offsetWidth);
                T = require('../webQQ/range').range( T, 500, obj2.offsetHeight);
                obj1.style.width = L + 'px';
                obj1.style.height = T + 'px';
            };
            document.onmouseup = function(){
                document.onmousemove = null;
                document.onmouseup = null;
            };
            return false;
        }
    }
    exports.scale = scale;
});