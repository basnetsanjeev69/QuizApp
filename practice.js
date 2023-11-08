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

// const cart = [
//   {
//     id: 1,
//     name: "iphone",
//     price: "299.99",
//     quantity: "3",
//   },

//   {
//     id: 2,
//     name: "watch",
//     price: "222.99",
//     quantity: "2",
//   },

//   {
//     id: 3,
//     name: "mac",
//     price: "2999.99",
//     quantity: "5",
//   },
// ];
// let total = 0;
// function calulate(cartInfo) {
//   cartInfo.forEach((item) => {
//     total  += item.price * item.quantity;
//   });
//   return total;
// }

// let result = calulate(cart);

// console.log(result);

const students = [
  {
    name: "ram",
    subject: [
      {
        math: 40,
      },
      {
        science: 50,
      },
      {
        computer: 80,
      },
    ],
  },
  {
    name: "shyam",
    subject: [
      {
        math: 10,
      },
      {
        science: 50,
      },
      {
        computer: 80,
      },
    ],
  },
  {
    name: "sita",
    subject: [
      {
        math: 90,
      },
      {
        science: 90,
      },
      {
        computer: 90,
      },
    ],
  },
];
let result = 0;
let passedValue = 0;
let failedValue = 0;
let distinctionValue = 0;

function checkFail(subjectsArray) {
  for (let i = 0; i < subjectsArray.length; i++) {
    const subject = subjectsArray[i];
    const value = Object.values(subject); // Get the values of the object properties
    if (value < 40) {
      return true; // Return true if any value is less than 40
    }
  }
  return false; // Return false if no value is less than 40
}

function checkPass(subjectsArray) {
  for (let i = 0; i < subjectsArray.length; i++) {
    const subject = subjectsArray[i];
    const value = Object.values(subject); // Get the values of the object properties
    if (value < 40) {
      return false; // Return false if any value is less than 40
    }
  }
  return true; // Return true if no value is less than 40
}

function checkDistinction(subjectsArray) {
  for (let i = 0; i < subjectsArray.length; i++) {
    const subject = subjectsArray[i];
    const value = Object.values(subject); // Get the values of the object properties
    if (value < 90) {
      return false; // Return false if any value is less than 90
    }
  }
  return true; // Return true if no value is less than 90
}

function claculate(studentsinfo) {
  studentsinfo.forEach((student) => {
    let subjectDetail = student.subject;
    const isFail = checkFail(subjectDetail);
    const isPass = checkPass(subjectDetail);
    const isDistinction = checkDistinction(subjectDetail);
    if (isFail) {
      failedValue++;
    }

    if (isPass) {
      passedValue++;
    }

    if (isDistinction) {
      distinctionValue++;
    }

    result = {
      passed: passedValue,
      failed: failedValue,
      distinction: distinctionValue,
    };
    
  });

  return result;
}

let studentResult = claculate(students);
console.log(studentResult);
