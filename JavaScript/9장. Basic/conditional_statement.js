/* 조건문(Conditional Statement) */

// if , else , else if 문 예시
let num = 0;

// if문 : 소괄호 안의 조건식이 참이면 중괄호 안의 코드 실행
if(num > 0) {
    console.log("양수");
} 
// else if문 : if문에 조건을 추가하고 싶을 때 사용
else if(num < 0) {
    console.log("음수");
}
// else 문 : if문의 조건식이 거짓일 때 실행
else {
    console.log("0");
}

// if문과 조건식 예시
let score = 90;

if(score >= 90 && score <=100) {
    console.log("A++ 학점");
}



// switch 문 예시
let food = "melon";

// 소괄호 안의 값과 일치하는 case문 값이 있을 경우 해당 case문의 코드 실행
switch(food) {
    case "melon":
        console.log("fruit");
        break;
    case "apple":
        console.log("fruit");
        break;
    case "carrot":
        console.log("vegetable");
        break;
    default:
        console.log("It's not fruits and vegetable.")
        break;
}