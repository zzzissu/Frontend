// HTML 문서 전체에 적용: document.getElementByTagName(name);
// 특정요소 내 적용: element.getElementByTagName(name);
// 반환값은 태그 이름에 해당하는 모든 요소를 HTMLCollection 객체로 반환
/* 
    HTMLCollection 객체를 반환하는 메서드
    1. getElementByTagName(): <태그>이름과 일치하는 모든 요소를 찾아서 HTMLCollection 객체로 반환
    2. getElementByClassName(): <클래스>이름과 일치하는 모든 요소를 찾아서 HTMLCollection 객체로 반환
    3. getElementById(): <아이디>와 일치하는 모든 요소를 찾아서 HTMLCollection 객체로 반환

    querySelector(): CSS선택자와 일치하는 <첫번째> 요소의 객체를 반환 (null 반환)
    querySelectorAll(): CSS선택자와 일치하는 <모든> 요소의 객체를 반환
*/

const liElements = document.getElementsByTagName("li");
console.log(liElements);
for (const liElement of liElements) {
  console.log(liElement.textContent);
}
for (let i = 0; i < liElements.length; i++) {
  console.log(liElements[i].textContent);
}
const arr = [...liElements];
arr.forEach((li) => {
  console.log(li.textContent);
});
