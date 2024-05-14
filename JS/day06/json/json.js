// 1. object to JSON
let json = JSON.stringify(true); // boolean type
console.log(json);

// 2. array to JSON
json = JSON.stringify(["apple", "banana"]); // 배열도 가능
console.log(json);

// 객체는 ({})로 묶어서 표현, 배열은 ([])로 묶어서 표현
1, true, "str", { inkey: "value" }, null;
// 숫자
{
  key: 1;
}
// 문자열
{
  key: "str";
}
// 오브젝트
{
  key: {
    inkey: "value";
  }
}
// null
{
  key: null;
}

// 3. 오브젝트
const rabbit = {
  name: "tori",
  color: "white",
  size: null,
  birthDate: new Date(),
  jump: () => {
    console.log(`${this.name} can jump!!`);
  },
};
json = JSON.stringify(rabbit);
console.log(json);

// 원하는 프롬퍼티만 선택하여 출력
json = JSON.stringify(rabbit, ["name", "color"]);
console.log(json);
// 원하는 형태로 바꾸고 싶을 때에는 콜백함수 사용
json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return value;
});

// json -> Object
console.clear();
const obj = JSON.parse(json);
console.log(obj);

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate);

const obj = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  // return value;
  return key === "birthDate" ? new Date(value) : value;
});
console.log(obj.birthDate);
console.log(obj.birthDate.getDate());
