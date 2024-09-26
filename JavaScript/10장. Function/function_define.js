/* 함수(Function) */

// " 함수를 정의한다 " 예시 - 3단
function gugudan3(){
    for(let i = 1; i <= 9; i++) {
        console.log(`3 * ${i} = ${3 * i}`);
    }
}


/* 함수 정의(Function Define) */

// 함수 선언문 : function 키워드
function gugudan9(){
    for(let i = 1; i <= 9; i++) {
        console.log(`9 * ${i} = ${9 * i}`);
    }
}

gugudan9();

// 함수 표현식 : 함수를 변수에 할당
const gugudan2 = function gugudan(){
    for(let i = 1; i <= 9; i++) {
        console.log(`2 * ${i} = ${2 * i}`);
    }
}

gugudan2();

// 화살표 함수 : 화살표 이용
const dan = () => {
    for(let i = 1; i <= 9; i++) {
        console.log(`4 * ${i} = ${4 * i}`);
    }
};

dan();