var name = 'egoing'

//줄바꿈할때는 끝에 역슬래쉬 붙이기
//에러는 안나지만 코드상에서 줄바꿈이 됐을뿐 문자상 줄바꿈은 아니다
//문자상 줄바꿈 -> \n
var letter = 'Lorem '+name+' ipsum dolor sit amet, consectetur adipiscing elit. \nSed pellentesque bibendum neque, eget gravida diam elementum quis. Sed feugiat sem nulla, a semper odio elementum efficitur. In massa ipsum, dapibus sit amet pulvinar et, \n finibus non dui. Curabitur dignissim finibus condimentum. Mauris lacinia maximus ligula, eu condimentum nulla. Aenean eget porta sapien. Donec lacus quam, congue vitae auctor ac'

console.log(letter);

//그렇지만 불편하다
//node.js 에서는 템플릿 리터럴(template literal) 을 사용한다
//literal 은 정보를 표현하는 기호, 방법
// `` 이 기호가 리터럴 시작과 끝을 나타냄

var a = '1';

var letter = `Lorem ${name}


 ipsum dolor sit amet, consectetur adipiscing elit. 
 ${name}
 Sed pellentesque bibendum neque, eget gravida diam elementum quis. Sed feugiat sem nulla, a semper odio elementum efficitur. In massa ipsum, dapibus sit amet pulvinar et, finibus non dui. Curabitur dignissim finibus condimentum. Mauris lacinia maximus ligula,
 
 ${name}eu condimentum nulla. Aenean eget porta sapien. Donec lacus quam, congue vitae auctor ac`