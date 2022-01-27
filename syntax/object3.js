var v1 = 'v1';
//사이에  100000 code 가 껴있다 생각
//중간에 값을 바꿔서 먹여버리면 나중에 찾기 힘들며 버그가 생긴다
v1 = 'egoing';
var v2 = 'v2';

//하나의 객체로 코드를 넣어서 정리정돈하여 사용한다. 그러면 중간에 값을 바꿀 수 없게 된다
var o = {
    v1 : 'v1',
    v2 : 'v2',
    f1 : function (){
        console.log(this.v1);
    },
    f2 : function (){
        console.log(this.v2);
    }
};

o.f1();
o.f2();