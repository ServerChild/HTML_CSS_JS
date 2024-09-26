/* 객체(Object) */
// 키(key)와 값(value)으로 구성된 속성의 집합


// 생성 방법 : {} 이용 = 리터럴 방식
const person = {}; // 빈 객체


// 속성을 지정해 객체 생성
const person1 = {
    name:"Hong Gildong"
};


// 모든 자료형의 데이터를 값으로 가질 수 있음
const person2 = {
    name:["Hong", "Gildong"],
    age:20,
    isAdult:true
};


// 객체 안에 또 다른 객체나 함수 o
const person3 = {
    name:{
        firstName:"Gildong",
        listName:"Hong"
    },
    age:20,
    isAdult:true,
    printInfo:function(){
        console.log('printInfo');
    }
};