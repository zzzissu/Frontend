/* 일치연산자 */
let num = 10;
let str = "10";
if (num == str) console.log("같다"); // 값만 비교
if (num === str) console.log("같다"); // 값 + 타입 비교
else console.log("다르다");

console.log(0 == false); // 동등연산자
console.log(0 === false); // 일치연산자
console.log("" == false);
console.log("" === false);
console.log(null == false);
console.log(null === false);

// 제어문
// 1. 선택 제어문
const name = "adam";
if (name === "adam") {
  console.log("Welcome Adam!");
} else if (name === "scott") {
  console.log("Welcome Scott");
} else {
  console.log("unknown");
}
console.log(name === "smith" ? "yes" : "no");

// 2. switch
const brower = "Chrome";
switch (brower) {
  case "IE":
    console.log("Microsoft");
    break;
  case "FireFox":
    console.log("Mozilla");
    break;
  case "Chrome":
    console.log("Google");
    break;
  default:
    console.log("unknown");
    break;
}
// 입력한 숫자가 3의 배수인지 확인하는 프로그램 작성
// let input = prompt("숫자를 입력하세요");
// if (input !== null) {
//   if (input % 3 === 0) {
//     alert("3의 배수입니다.");
//   } else {
//     alert("3의 배수가 아닙니다.");
//   }
// }
// alert("다시 입력하세요.");

// let session = prompt("관심 남자를 선택해 주세요. 1. 차은우 2. 선재 3. 유병재");
// switch (session) {
//   case "1":
//     document.write("<p>차은우는 <strong>존나 잘생김</strong>입니다.</p>");
//     break;
//   case "2":
//     document.write("<p>선재는 <strong>진짜 잘생김</strong>입니다.</p>");
//     break;
//   case "3":
//     document.write("<p>유병재는 <strong>존나 </strong>입니다.</p>");
//     break;
//   default:
//     alert("잘못입력하셨습니다.");
// }
// <script>태그에 defer 속성이 있으면 document 객체를 바로 사용할 수 없다.

// 반복문
// 1. for
// for (let i = 5; i > 0; i--) {
//   console.log(`for: ${i}`);
// }

// let sum = 0;
// for (let i = 1; i <= 1000; i++) {
//   sum += i;
// }
// document.write("<h1>1부터 1000까지 더한 값: </h1>" + sum);

// let ary = [10, 20, 30, 40, 50];
// for (let i = 0; i < 5; i++) {
//   console.log(ary[i]);
// }
// for (let i of ary) {
//   console.log(i);
// }
// let i = 5;
// while (i > 0) {
//   console.log(`while: ${i}`);
//   i--;
// }

document.open();
// 1. 입력된 구구단 출력
// let input_1 = prompt("숫자 입력하시오.", "");

// document.write(input_1, "단 <br/>");
// for (var i = 1; i <= 9; i++) {
//   document.write(input_1, " X ", i, " = ", i * input_1, "<br/>");
// }

// document.write("<br/>");

// // 2. 1단부터 9단까지 출력
// for (i = 1; i <= 9; i++) {
//   document.write(i + "단<br/>");

//   for (let a = 1; a <= 9; a++) {
//     document.write(i + "X" + a, "=", a * 1, "<br/>");
//   }
// }

// document.write("<br/>");

// 3. 0부터 100까지 4의 배수가 아닌 것을 출력(continue)
// for (let i = 1; i <= 100; i++) {
//   if (i % 4 !== 1) {
//     continue;
//   }
//   document.write(i, "   ");
// }

// document.write("<br/>");

// 4. 입력된 숫자만큼 카운터
let num3 = Number(prompt("숫자 입력"));
for (let a = 1; a <= num3; a++) {
  document.write(a, "  ");
}
