//Activity 1
const x = ["one", "two", "three"];
const y = x.map((item) => `<li>${item}</li>`);
document.getElementById("myList").innerHTML = y.join("\n");

//Activity 2
const x1 = ["A", "B", "A"];
const y1 = x1.map((item) => {
    switch (item) {
        case "A":
            return 4;

        case "B":
            return 3;
    }
});
console.log(y1);

//Activity 3
gpaAcc = y1.reduce((acc, curr) => acc + curr);
gpa = gpaAcc / y1.length;
console.log(gpa);

//Activity 4
const x2 = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
const y2 = x2.filter((item) => item.length > 6);
console.log(y2);

//Activity 5
const x3 = [12, 34, 21, 54];
const luckNumber = 21;
console.log(x3.indexOf(luckNumber));

document.addEventListener("keydown", logKey);

function logKey(e) {
  // how do we know which key was pressed?
  console.log(e);
  // checkout e.code, e.key, and e.keyCode
  // what is the difference?
}
