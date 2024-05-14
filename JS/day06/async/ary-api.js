// join(): array -> string
const fruits = ["apple", "banana", "orange"];
const result = fruits.join(",");
console.log(result);

//split()
const fruits = " 🍎, 🍌, 🍊, 🍇";
const result = fruits.split(",");
console.log(result);

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student("A", 29, true, 45),
  new Student("B", 27, true, 90),
  new Student("C", 31, true, 67),
  new Student("D", 34, true, 80),
  new Student("E", 25, true, 90),
];

{
  // find: 제일 처음의 요소를 리턴
  const result = students.find(function (student, index) {
    console.log(student, index);
    return student.score === 90;
  });
  console.log(result);
}
{
  // filter: 조건을 모두 리턴
  const result = students.filter((student) => student.enrolled);
  console.log(result);
}
{
  const result = students.map((student) => student);
  const result = students.map((student) => student.score);
  console.log(result);
}
