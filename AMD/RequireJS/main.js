/**
 * Created by ubuntu on 5/19/18.
 */
require(['app/a', 'app/b'], function(a, b){
    console.log('main.js执行');
    a.hello();
    document.getElementById('b').onclick = function(){
        b.hello();
    };
});