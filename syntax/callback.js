/* function a(){
    console.log('A');
}
a();
 */
//이름이 없으면 익명 함수
//자바스크립트에서는 함수가 값이다
//a가 함수로써 값을 가진다
var a = function(){
    console.log('A');
}

function slowfunc(callback){
    callback();
}

slowfunc(a);