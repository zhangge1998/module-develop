/**
 * Created by ubuntu on 5/19/18.
 */
define(function(require, exports, module){
    console.log('main.js执行');

    var a = require('./app/a');
    a.hello();

    document.getElementById('b').onclick = function(){
        var b = require('./app/b');
        b.hello();
    };

});