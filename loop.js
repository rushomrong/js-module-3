//objects declaration
const mobile = {
  brand: "Motorola",
  price: "50k",
  model: "Edge 50",
  market: "Global",
};

//for of : used in array
//for in:  used in objects
for (const prop in mobile) {
  console.log(prop);
}

//keys property
const keys = Object.keys(mobile);
console.log(keys);

//using array
for (const key of keys) {
  console.log(key, ":", mobile[key]);
}
