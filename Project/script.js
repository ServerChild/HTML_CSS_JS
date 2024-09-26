// 텍스트 타이핑 효과 구현 //

/*
// span 요소 노드 가져오기
const spanEl = document.querySelector("main h2 span");
// 화면에 표시할 문장 배열
const txtArr = ['Web Publisher', 'Front-End Developer', 'Web UI Designer', 'UX Designer', 'Back-End Developer'];
// 배열의 인덱스 초깃값
let index = 0;
// 화면에 표시할 문장 배열에서 요소를 하나 가져온 뒤, 배열로 만들기
let currentTxt = txtArr[index].split("");

// 배열 요소 한 개씩 출력하는 함수
function writeTxt() {
    // shift() 메서드 : 배열에서 맨 앞의 요소를 추출하고 추출한 요소를 원본 배열에서 삭제
    spanEl.textContent += currentTxt.shift();

    // 배열 길이가 0이 아니라면 배열 요소를 모두 출력할 때까지 writeTxt() 함수 반복 호출
    if(currentTxt.length !== 0) {
        setTimeout(writeTxt, Math.floor(Math.random() * 100));
    } else { // currenTxt 배열이 모두 비었을 때 실행
        // 화면에 표시된 텍스트를 가져와 split() 메서드로 다시 단어 단위로 분리해 배열 할당
        currentTxt = spanEl.textContent.split("");
        setTimeout(deleteTxt, 3000); // 3초 뒤에 텍스트를 지움
    }
    writeTxt();
}


// 텍스트 삭제 효과 구현 //

// 텍스트(한 글자씩) 삭제하는 함수
function deleteTxt() {
    // pop() 메서드 : 배열 요소를 끝에서부터 한 개씩 삭제(원본 배열 요소 삭제)
    currentTxt.pop();
    // join() 메서드 : 현재 배열에 있는 요소를 하나의 문자열로 합침
    spanEl.textContent = currentTxt.join("");

    // 배열에 값이 남아 있으면 deleteTxt() 함수 반복 호출
    if(currentTxt.length !== 0) {
        setTimeout(deleteTxt, Math.floor(Math.random() * 100));
    } else { // 모든 배열이 pop() 메서드에 의해 삭제되면 실행
        // index에 1을 증가시키는 이유 -> 배열(txtArr)의 길이를 넘지 않게 하기 위해
        index = (index + 1) % txtArr.length;
        currentTxt = txtArr[index].split("");
        writeTxt();
    }
}
*/

// 텍스트 타이핑 효과 개선 //

// 텍스트 작성과 삭제 즉시 실행 함수
(function() {
    // span 요소 노드 가져오기
    const spanEl = document.querySelector("main h2 span");
    // 화면에 표시할 문장 배열
    const txtArr = ['Web Publisher', 'Front-End Developer', 'Web UI Designer', 'UX Designer', 'Back-End Developer'];
    // 배열의 인덱스 초깃값
    let index = 0;
    // 화면에 표시할 문장 배열에서 요소를 하나 가져온 뒤, 배열로 만들기
    let currentTxt = txtArr[index].split("");

    // 배열 요소 한 개씩 출력하는 함수
    function writeTxt() {
        // shift() 메서드 : 배열에서 맨 앞의 요소를 추출하고 추출한 요소를 원본 배열에서 삭제
        spanEl.textContent += currentTxt.shift();

        // 배열 길이가 0이 아니라면 배열 요소를 모두 출력할 때까지 writeTxt() 함수 반복 호출
        if(currentTxt.length !== 0) {
            setTimeout(writeTxt, Math.floor(Math.random() * 100));
        } else { // currenTxt 배열이 모두 비었을 때 실행
            // 화면에 표시된 텍스트를 가져와 split() 메서드로 다시 단어 단위로 분리해 배열 할당
            currentTxt = spanEl.textContent.split("");
            setTimeout(deleteTxt, 3000); // 3초 뒤에 텍스트를 지움
        }
    }

    // 텍스트(한 글자씩) 삭제하는 함수
    function deleteTxt() {
        // pop() 메서드 : 배열 요소를 끝에서부터 한 개씩 삭제(원본 배열 요소 삭제)
        currentTxt.pop();
        // join() 메서드 : 현재 배열에 있는 요소를 하나의 문자열로 합침
        spanEl.textContent = currentTxt.join("");

        // 배열에 값이 남아 있으면 deleteTxt() 함수 반복 호출
        if(currentTxt.length !== 0) {
            setTimeout(deleteTxt, Math.floor(Math.random() * 100));
        } else { // 모든 배열이 pop() 메서드에 의해 삭제되면 실행
            // index에 1을 증가시키는 이유 -> 배열(txtArr)의 길이를 넘지 않게 하기 위해
            index = (index + 1) % txtArr.length;
            currentTxt = txtArr[index].split("");
            writeTxt();
        }
    }
    writeTxt();
})();

// ================================================================== //

// 헤더 영역 스크롤 이동 시 이벤트 //
/*
// 수직 스크롤이 발생하면 header 태그에 active 클래스 추가 및 삭제
const headerEl = document.querySelector("header");

window.addEventListener('scroll', function() {
    // window 객체의 pageYOffset 속성으로 웹 브라우저의 수직 스크롤 위치 참조
    const browerScrollY = window.pageYOffset;

    if(browerScrollY > 0) {
        headerEl.classList.add("active");
    } else {
        headerEl.classList.remove("active");
    }
});
*/

// 헤더 영역 스크롤 이동 시 이벤트 최적화 //

// 수직 스크롤이 발생하면 header 태그에 active 클래스 추가 및 삭제
const headerEl = document.querySelector("header");

window.addEventListener('scroll', function() {
    this.requestAnimationFrame(scrollCheck);
});

function scrollCheck() {
    let browerScrollY = window.scrollY ? window.scrollY : window.pageYOffset;

    if(browerScrollY > 0) {
        headerEl.classList.add("active");
    } else {
        headerEl.classList.remove("active");
    }
}

// ================================================================== //

// 부드러운 이동 애니메이션 효과 구현 //

// 헤더 영역의 메뉴 클릭 시 메뉴 영역으로 스크롤이 부드럽게 이동하는 효과
// 애니메이션 스크롤 이동
const animationMove = function(selector) {
    // selector 매개변수로 이동할 댓아 요소 노드 가져오기
    const targetEl = document.querySelector(selector);
    // 현재 웹 브라우저의 스크롤 정보(y 값)
    const browerScrollY = window.pageYOffset;
    // 이동할 대상의 위치(y 값)
    const targetScorllY = targetEl.getBoundingClientRect().top + browerScrollY;
    // 스크롤 이동
    window.scrollTo({ top: targetScorllY, behavior: 'smooth' });
}

// 스크롤 이벤트 연결하기
const scrollMoveEl = document.querySelectorAll("[data-animation-scroll='true']");

for(let i = 0; i < scrollMoveEl.length; i++) {
    scrollMoveEl[i].addEventListener('click', function(e) {
        const target = this.dataset.target;
        animationMove(target);
    });
}