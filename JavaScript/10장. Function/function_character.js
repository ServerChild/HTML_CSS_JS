/* 함수 특징(Function Characteristics) */

// 함수 스코프 : 함수에서 정의한 블록문만 스코프의 유효 범위로 인정
let a = 10; // 전역 스코프

function sum(){
    console.log(`함수 내부: ${a}`);
}

sum();
console.log(`함수 외부: ${a}`);

// 블록 스코프 : {}로 구성된 블록문 기준으로 스코프의 유효 범위를 나눔
let b = 5;
{
    let c = 20;
    console.log(`코드 블록 내부 b: ${b}`);
    console.log(`코드 블록 내부 c: ${c}`);
}

console.log(`코드 블록 외부 b: ${b}`);
console.log(`코드 블록 외부 c: ${c}`);

// 참조 우선순위 : 지역 > 전역
let aa = 10;
const bb = 20;

function sum1() {
    let aa = 50;
    const bb = 70;

    console.log(`함수 내부 aa : ${aa}`);
    console.log(`함수 내부 bb : ${bb}`);
}

sum1();


// 함수 호이스팅 : 코드를 선언과 할당으로 분리해 선언부를 스코프 최상위로 끌어올림
printHello(); // 선언부를 스코프 최상위로 끌어올림

function printHello() {
    console.log("Hello");
}

// 함수 표현식으로 정의된 함수
// 함수 표현식 선언부 = 변수를 선언한 부분
printHi(); // TypeError

var printHi = function printHi() {
    console.log("Hi");
}