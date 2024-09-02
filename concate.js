const firstName = "Rusho";
const lastName = "Mrong";
// const fullName = firstName + lastName;

//using white space in the strings
// const fullName = firstName + " " + lastName;
const fullName = firstName.concat(" ").concat(lastName);
console.log(fullName);

//includes to check - if there is a word inside with specific word or letter
console.log(lastName.includes("r"));
