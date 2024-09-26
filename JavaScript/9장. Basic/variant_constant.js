/* 변수(variant) : 값이 변하는 데이터를 저장하고 관리하기 위한 공간 */
/* 
    var 키워드 : 선언한 변수명 중복 o
       -> 중복 생성 시 공간에 다시 생성되면서 기존에 할당된 데이터 사라지고 새로운 값 할당
*/
var num = 10 + 20;
console.log(num);

// let 키워드 : 선언한 변수명 중복 x
let num2 = 2 + 4;
console.log(num2);


/* 상수(constant) : 재할당이 안되는 데이터를 선언할 때 사용하는 키워드 */
const num3 = 11;
console.log(num3);