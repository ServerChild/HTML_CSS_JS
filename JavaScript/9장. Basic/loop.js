/* 반복문(Loop) */

// while문 : 특정 조건을 만족하는 동안 블록문 실행
let num = 1;

while(num <= 10) {
    console.log(num);
    num++;
}


// do .. while문 : 블록문을 한 번 수행한 후에 조건식 평가
do {
    console.log("무조건");
    console.log("한 번은 실행");
} while(false);



// for문 : 지정한 횟수만큼 반복 실행
for(let i = 0; i < 5; i++) {
    console.log(i);
}

// for문 중첩해서 사용
// 외부 for문의 초깃값 : 반복문이 실행될 때 1번만 설정
// 내부 for문의 초깃값 : 외부 블록문이 실행될 때마다 새로 설정
for(let i = 0; i < 2; i++) {
    console.log(`i: ${i}`);

    for(let j = 0; j < 2; j++) {
        console.log(`j: ${j}`);
    }
}

// for문과 배열
let arr = ["banana", "apple", "orange"];

for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}


// for .. in : 객체 리터럴이나 배열에 반복 접근할 수 있는 반복문
// 객체 리터럴을 반복할 경우
let obj = {name:"철수" , age:"20"};

for(let key in obj) {
    console.log(key + ": " + obj[key]);
}

// 배열을 반복할 경우
let arr1 = ["orange", "banana", "apple"];

for(let index in arr1) {
    console.log(index + ": " + arr1[index]);
}