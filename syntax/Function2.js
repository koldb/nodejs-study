console.log(Math.round(1.6)); //2
console.log(Math.round(1.4)); //1
//round -> 반올림 해줌  Math -> 함수의 객체라고 생각(엄청나게 많은 함수를 분류하기 위하여 사용)


function sum(left, right){ //left, right => parameter 매개변수 라 한다
    return left + right;
    //return 을 만나면 함수는 종료된다. 값을 출력한다는 의미 + 종료한다는 의미 둘다 가진다.
}

console.log(sum(2,4));  //2, 4 -> 입력값 하나하나 를 argument 라 한다

