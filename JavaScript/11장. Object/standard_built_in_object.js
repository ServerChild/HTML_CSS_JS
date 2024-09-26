/* 표준 내장 객체(Standard Built-in Object) */

// String 객체 : 문자열
const pw = "123";

// length : 문자열 길이 반환
if(pw.length < 4) {
    console.log("비밀번호는 최소 4자리 이상 입력해 주세요.");
}

// includes() : 문자열 포함 여부
const email = "test!naver.com";

if(email.includes("@") === false) {
    console.log("올바른 이메일 형식이 아닙니다.");
}


// Array 객체 : 배열
const arr = [10, 20, 30];

// 배열 길이를 이용한 반복문 처리
for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// 파괴적 메서드 : 원본 데이터 변경
arr.push(40); // 배열 맨 뒤에 요소(40) 추가 [10, 20, 30, 40]
arr.pop(); // 배열 맨 뒤에서 요소(40) 추출 [10, 20, 30]
arr.unshift(0); // 배열 맨 앞에 요소(0) 추가 [0, 10, 20, 30]
arr.shift(); // 배열 맨 앞에서 요소(0) 추출 [10, 20, 30]

// 비파괴적 메서드 : 원본 데이터 변경 x
// forEach() : 배열 안의 요소를 순회하면서 콜백 함수를 호출해 접근한 요소의 값 출력
arr.forEach(function(v) {
    console.log(v);
});


// Date 객체 : 날짜 및 시간
const date = new Date();

console.log(date);

// 메서드 사용
const date1 = new Date();

const dateFormat = `${date1.getFullYear()}-${date1.getMonth() + 1}-${date1.getDate()} ${date1.getHours()}:${date1.getMinutes()}:${date1.getSeconds()}`;

console.log(dateFormat);


// Math 객체 : 수학 연산
const floatNum = 10.52;

Math.floor(floatNum); // 10
Math.ceil(floatNum); // 11
Math.round(floatNum); // 11

// Math.random() : 0 이상 1 미만의 난수 반환
const random = Math.random();

console.log(random); // 실행할 때마다 다름

// 난수 범위 늘리기
function getMaxRandom(max) {
    return Math.floor(Math.random() * max) + 1;
}

const maxRandom = getMaxRandom(20);
console.log(maxRandom); // 0 이상 20 이하의 무작위 정수