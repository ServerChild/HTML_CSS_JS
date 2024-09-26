/* 연산자(operator) : 어떤 연산을 처리하는 데 사용하도록 미리 정의된 기호 */

// 산술 연산자 : 이항 산술, 단항 산술, 단항 부정 연산자
// 이항 산술 연산자 : 피연산자 2개
let sum = 10 + 20;
let sub = 20 - 10;

// 단항 산술 연산자 : 피연산자 1개
let increment = 10;
increment++; // 1 증가(후치)
let decrement = 10;
--decrement; // 1 감소(전치)

// 단항 부정 연산자 : 음수는 양수로, 양수는 음수로
let num = -10;
num = -num;


// 대입 연산자와 복합 대입 연산자 : 데이터 대입, 할당하는 연산자
let x = 10; // 대입 연산자
let y = 10; // 복합 대입 연산자
y += 5; // y = y + 5


// 비교 연산자 : 피연산자를 비교한 뒤, 논리값(true or false) 반환
10 == '10' // true(값 비교)
10 === '10' // false(자료형 비교)


// 논리 연산자 : 피연산자를 논리적으로 평가한 뒤, 조건에 맞는 피연산자 반환
true && true // true
true && false && true // false


// 삼항 연산자 : 세 항 중 가장 왼쪽에 있는 피연산자의 참, 거짓에 따라 나머지 두 항의 피연산자를 선택적으로 반환
let score = 90;
let grade = score >= 90 ? 'A+' : 'B';
console.log(grade); // A+