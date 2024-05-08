// function
// 함수 선언(정의), 호출
// func();     // 함수 정의 - 함수가 실행
// func() {    // 함수 호출 - 함수를 생성
//     ~~~
// }

// function[함수명](입력){~~~};
printHello(); // 호이스팅(정의 하기 전에 호출 먼저 하는 것/선언을 위로 올리는 것)
function printHello() {
  // 함수 정의 -> 함수 호출 순서
  console.log("Hello!");
}
// printHello();      // 함수 호출: 함수이름(입력);

function log(message) {
  // 함수 정의
  console.log(message);
}
log(); // 입력을 주지 않았기 때문에 undefined 출력
log("hi"); // 함수 정의에 있는 형태대로 호출
log(123);

// function showError() {
//   alert("에러발생, 다시 시도하세요");
// }
// showError();
// showError. - 지원되는 내장 함수들을 볼 수 있다. 객체이기 때문

// 입력 파라미터를 객체로 받는 함수
function changName(obj) {
  // 함수 정의
  obj.name = "coder";
}
const ellie = { name: "ellie" }; // ellie 객체 생성
console.log(ellie);
changName(ellie);
console.log(ellie);

// default parameters
function showMessage(message, from = "unknown") {
  console.log(`${message} by ${from}`);
}
showMessage("Hi");

function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }
  for (const arg of args) {
    console.log(arg);
  }
  args.forEach((arg) => console.log(arg));
}
printAll("dream", "coding", "javis", "adam", 1, 2);

// 함수 출력
function add(num1, num2) {
  return num1 + num2;
}
const res = add(10, 20);
console.log(res);

// 함수 표현식
// let func = function () { }           // 함수를 변수에 할당시킨다.
let showHello = function () {
  console.log("Hello");
};
showHello();
let hiHello = showHello;
hiHello();

// 즉시 실행 함수: 즉시 실행되며 단 한번만 호출되어 다시는 호출할 수 없음
let res = (function () {
  let a = 10;
  let b = 20;
  return a + b;
})();
console.log(res);

// 입력 파라미터가 있는 즉시 실행 함수
let res2 = (function (a, b) {
  return a * b;
})(10, 20);
console.log(res2);

// 화살표 함수
// let func = () => { };        // 화살표를 기준으로 왼쪽은 몸체 오른쪽은
const simplePrint = function () {
  console.log("simplePrint");
};
console.log(simplePrint); // 함수의 이름은 포인터
console.log(simplePrint());

const simplePrint1 = () => {
  console.log("simplePrint");
};
simplePrint1();
const simplePrint2 = () => console.log("simplePrint");
simplePrint1();

const add = (a, b) => {
  return a + b;
};
console.log(add(10, 20));

const hi = () => {
  alert("안녕하세요");
};
hi();

let hi1 = (user) => {
  document.write(user + "님 안녕하세요");
};
hi1("한지수");

// 콜백 함수
function randomQuiz(answer, printYes, printNo) {
  if (answer === "I love you") {
    printYes();
  } else ProcessingInstruction();
}
const printYes = function () {
  console.log("Yes");
};
const printNo = function () {
  console.log("No");
};

randomQuiz("I love you", printYes, printNo);
randomQuiz("wrong", printYes, printNo);
