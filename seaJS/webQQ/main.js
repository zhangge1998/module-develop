//A开发
define(function(require, exports, module){
    var oInput = document.getElementById('input1');
    var oDiv1 = document.getElementById('div1');
    var oDiv2 = document.getElementById('div2');
    var oDiv3 = document.getElementById('div3');
    var drag = require('../webQQ/drag.js').drag;
    drag(oDiv3);
    oInput.onclick = function(){
        oDiv1.style.display = 'block';
    };
    var scale = require('../webQQ/scale').scale;
    oDiv2.onclick = scale(oDiv1, oDiv2);
});