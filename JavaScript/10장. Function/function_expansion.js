/* 함수 확장(Function Expansion) */

// 매개변수 와 인수
function gugudan(dan){
    for(let i = 1; i <= 9; i++) {
        console.log(`${dan} * ${i} = ${dan * i}`);
    }
}

gugudan(3);
gugudan(5);
gugudan(9);


// return 문 : 함수 외부로 데이터를 반환
// 예시 1
function sum(num1, num2){
    let result = num1 + num2;
    // 함수 내부 데이터를 함수 외부로 전달
    return result;
}

const result = sum(10, 5);
console.log("out: " + result);

// 예시 2
function sum2(num3, num4) {
    if(typeof num1 !== "number" || typeof num2 !== "number") {
        return; // 매개변수가 숫자가 아니면 강제 종료
    }
    return num3 + num4;
}

let result1 = sum("a", "b");
console.log("out: " + result); // undefined