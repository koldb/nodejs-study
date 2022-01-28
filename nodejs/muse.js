/* var M = {
    v : 'v',
    f : function(){
        console.log(this.v);
    }
} */

//exports 된 모듈을 가져오려면 require 사용
var part = require('./mpart.js');
console.log(part);

part.f();

