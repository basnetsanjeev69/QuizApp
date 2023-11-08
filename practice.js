// const myStr = "My new numsd is +6431-9438-1232  +6431-948-1233 fhhfhh fhhrfb";

// var stringArray = myStr.split(/[ ]+/);
// stringArray.splice(2,0,"Hello")
// console.log(stringArray);
//  for (let word of stringArray) {
//    if (word[0] == "+") {
//      var number = word;
//      console.log(number);
//      var counntryCode = number.split(/[-]+/);
//      console.log(counntryCode[0]);
//      console.log(counntryCode[1]);
//    }
//  }

const cart = [
  {
    id: 1,
    name: "iphone",
    price: "299.99",
    quantity: "3",
  },

  {
    id: 2,
    name: "watch",
    price: "222.99",
    quantity: "2",
  },

  {
    id: 3,
    name: "mac",
    price: "2999.99",
    quantity: "5",
  },
];
let total = 0;
function calulate(cartInfo) {
  cartInfo.forEach((item) => {
    total  += item.price * item.quantity;
  });
  return total;
}

let result = calulate(cart);

console.log(result);


