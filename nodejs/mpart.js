var M = {
    v : 'v',
    f : function(){
        console.log(this.v);
    }
}

//약속
//M 이 가르키는 객체를 모듈 밖에서 사용할수있도록 exports 하겠다 라는 뜻
module.exports = M;