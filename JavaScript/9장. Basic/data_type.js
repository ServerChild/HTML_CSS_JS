/* 자료형(Data type) : 자바스크립트에서 사용할 수 있는 데이터 종류 */

// 문자열 : 큰따옴표("") 나 작은따옴표('')로 둘러싸인 값의 형태
let string1 = "Hello!";
let string2 = 'Hello!!';

// 문자열에 따옴표가 포함된 경우 : 문자열에 포함되지 않은 따옴표로 문자열 감싸서 정의
let str1 = "문자열(')";
let str2 = '문자열(")';

// 문자열 연결 연산자(+) : 문자열과 문자열 연결
let string = '문자열' + "연결 연산자";
let string3 = '문자열(")' + "문자열(')"; // 큰따옴표와 작은따옴표가 같이 있는 경우

// 이스케이프 문자 : 웹 브라우저가 사용자 의도와 다르게 해석할 때 사용
let str3 = "이스케이프 문자를 이용해 \n 줄바꿈";

// 템플릿 문자열 : 백틱(`)으로 문자열 정의
let string4 = `큰따옴표(")나 작은따옴표(')`;
let ex1 = 1;
let ex2 = 3;
let result = `${ex1} 과 ${ex2}의 합은 ${ex1 + ex2}`; 


// 숫자형 : 정수와 실수 숫자
let num = 10;
let num1 = 0.2;


// 논리형 : 참 또는 거짓
let boolean1 = true;
let boolean2 = false;


// undefined : 데이터가 할당되지 않은 경우 임시로 할당되는 값
let empty;
console.log(empty); // undefined


// null : 의도적으로 데이터 공간을 비워둘 때
let empty2 = null;
console.log(empty2); // null


// 객체(object) : 기본 자료형을 제외한 나머지
// 배열(array) : 복수의 데이터를 정의
let Score = [80, 90, 60, 30];
console.log(Score[1]); // 1번 인덱스에 접근 = 90

// 객체 리터럴 : 키(key)와 값(value)의 한 쌍으로 이루어진 속성으로 객체 정의
let studentScore = {
    kor:80,
    eng:70,
    math:30
};