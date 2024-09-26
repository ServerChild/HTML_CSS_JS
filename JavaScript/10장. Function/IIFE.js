/* 즉시 실행 함수(IIFE, Immediately Invoked Function Expression) */

// 한 번 실행되고 나면 메모리에 데이터가 남지 않음
(function init() {
    console.log("initialized!");
})(); // initialized!

init(); // ReferenceError: init is not define

// 예시 1. 매개변수가 있는 함수
(function sum(a, b) {
    console.log(a + b);
})(10, 20);