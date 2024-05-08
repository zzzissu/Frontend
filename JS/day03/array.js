/* 배열 */
// 배열생성
const arr1 = new Array();
const arr2 = [1, 2, 3, 4, 5];
console.log(arr2);

// const fruits = ["🍒", "🍋"];
// console.log(fruits);

// // for
// for (let i = 0; i < 2; i++) {
//   console.log(fruits[i]);
// }

// // for of
// for (let fruit of fruits) {
//   console.log(fruit); // fruits에 있는 요소들을 하나씩 꺼내어 fruit에 집어넣음. / 배열 불가능
// }

// //forEach
// fruits.forEach(function (fruit, index, array) {
//   // function ? (): ?자리에 함수명이 와야함. / 익명함수 가능(재사용X)
//   console.log(fruit, index, array); // 콜백함수: 내가 원하는 형태대로 데이터를 가공하기 위해 사용
// });

// fruits.forEach((fruit, index) => {
//   // 애로우 함수(화살표 포함)
//   console.log(fruit, index);
// });

// fruits.forEach((fruit) => console.log(fruits));

// let ary = [1, 2, 3, 4, 5];
// console.log(ary.length);
// ary.push(10); // 배열의 원소를 맨 뒤에 추가
// console.log(ary.length);
// console.log(ary);
// ary.unshift(0); // 배열의 원소를 맨 앞에 추가
// console.log(ary.length);
// console.log(ary);
// ary.pop(); // 배열의 맨 뒤 원소를 삭제
// console.log(ary.length);
// console.log(ary);
// ary.shift(); // 배열의 맨 앞 원소를 삭제
// console.log(ary.length);
// console.log(ary);

// slice
const fruits = ["🍀", "☘️"];
console.log(fruits);
fruits.push("🍎", "🍋", "🍑", "🍍");
console.log(fruits);
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(3, 2);
console.log(fruits);
fruits.splice(1, 1, "🍉", "🍇");
console.log(fruits);

// const
const fruit2 = ["🥝", "🥥"];
const newFruits = fruits.concat(fruit2);
console.log(newFruits);

// seraching
console.clear();
console.log(fruits);
console.log(fruits.indexOf("🍑")); //인덱스 리턴 (결과값 : 3)
console.log(fruits.indexOf("🍏")); //인덱스 리턴 (결과값 : 1)
console.log(fruits.includes("🍉")); // 있으면 ture, 없으면 false
console.log(fruits.includes("🍈"));
