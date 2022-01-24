var fs = require('fs');

/* 
//readfileSync 동기적
console.log('A');
var result = fs.readFileSync('syntax/sample.txt', 'utf8');
console.log(result);
console.log('C'); */


//readfile 비동기적
//readfile 은 리턴값이 없기에 세번째 인자에 함수를 넣는다
//C 가 먼저 실행이 되고 B가 끝나면서 나중에 실행됨 -> 비동기적 실행
console.log('A');
fs.readFile('syntax/sample.txt', 'utf8', function(err, result){
    console.log(result);
});
console.log('C');
