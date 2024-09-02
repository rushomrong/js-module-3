const subject = "Chemistry";
const book = "chemistry";

if (subject === book) {
  console.log("Both are same subjects");
} else {
  console.log("Both subjects are different by the title");
}

////

if (subject.toLowerCase() === book.toLowerCase()) {
  console.log("Both are same subjects.");
} else console.log("both are not same subjects!");

// whitespace remove using trim

const l1 = " water";
const l2 = " water ";

if (l1.trim() === l2.trim()) {
  console.log("I love to drink water");
} else {
  console.log("I don't like to drink");
}
