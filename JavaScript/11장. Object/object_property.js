/* 객체 속성(Object Property) */

// 객체 속성에 접근하는 방법
// 대괄호 연산자([])
const person = {
    name:"Hone Gildong",
    age:20
};

console.log(person["name"]); // Hong Gildong
console.log(person["age"]); // 20
console.log(person[name]); // ReferenceError(키가 아닌 name이라는 변수를 찾아 오류 발생)

// 객체의 속성값이 배열, 객체 리터럴, 함수일 경우
const person1 = {
    name:{
        firstName:"Gildong",
        listName:"Hong"
    },
    likes:["apple", "samsung"],
    printHello:function(){
        return "Hello";
    }
};

console.log(person1["name"]); // { firstName:'Gildong', listName:'Hong'}
console.log(person1["name"]["firstName"]); // Gildong(객체 리터럴)
console.log(person1["likes"][0]); // apple(배열)
console.log(person1["printHello"]()); // hello(함수)

// 마침표 연산자(.)
const person2 = {
    name:{
        firstName:"Gildong",
        listName:"Hong"
    },
    likes:["apple", "samsung"],
    printHello:function(){
        return "Hello";
    }
};

console.log(person2.name.listName); // Hong
console.log(person2.age); // 20
console.log(person2.likes[1]); // samsung
console.log(person2.printHello()); // Hello


// 객체 속성 값 변경 : 키로 속성에 접근해 값 재할당
const person3 = {
    name:"Hong Gildong"
};

person3.name = "Kim"; // 또는 person3["name"] = "Kim"
console.log(person3.name); // Kim


// 객체 속성 동적으로 추가
const person4 = {};
console.log(person4); // {}

person4.name = "Hong";
console.log(person4); // { name: 'Hong' }


// 객체 속성 동적으로 삭제 : delete 키워드
const person5 = {
    name: "Kim"
};

delete person.name; // 또는 delete person["name"]
console.log(person5); // {}