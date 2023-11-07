const check = () => {
  let score = 0;
  // question1
// let answer = {
//     result : 
// }
  let radios1 = document.getElementsByName("question1");

  if (radios1[0].checked || radios1[1].checked || radios1[2].checked) {
    for (let radio of radios1) {
      if (radio.checked) {
        if (radio.value.toLowerCase() == "www") {
          score++;
        }
      }
    }
  } else {
    alert("Please select one option!!!");
    return false;
  }

  // question2

  let radios2 = document.getElementsByName("question2");
  if (radios2[0].checked || radios2[1].checked || radios2[2].checked) {
    for (let radio of radios2) {
      if (radio.checked) {
        if (radio.value.toLowerCase() == "h1") {
          score++;
          break;
        }
      }
    }
  } else {
    alert("Please select one option!!!");
    return false;
  }

  // question3

  let radios3 = document.getElementsByName("question3");
  if (radios3[0].checked || radios3[1].checked || radios3[2].checked) {
    for (let radio of radios3) {
      if (radio.checked) {
        if (radio.value.toLowerCase() == "style") {
          score++;
          break;
        }
      }
    }
  } else {
    alert("Please select one option!!!");
    return false;
  }

  // question4

  let radios4 = document.getElementsByName("question4");
  if (radios4[0].checked || radios4[1].checked || radios4[2].checked) {
    for (let radio of radios4) {
      if (radio.checked) {
        if (radio.value.toLowerCase() == "style") {
          score++;
          break;
        }
      }
    }
  } else {
    alert("Please select one option!!!");
    return false;
  }

  document.getElementById("score").innerHTML = "Your score is " + score + "/4";
  show("scoredisplay");
  hide("quiz");
  hide("timer");
};

const back = () => {
  hide("timer");
  show("welcome");
  hide("quiz");
};

const start = () => {
  show("timer");
  hide("welcome");
  show("quiz");
  let timeGiven = 60;

  document.getElementById("timer").innerHTML = "00" + ":" + timeGiven;
  startTimer();
};
function startTimer() {
  var presentTime = document.getElementById("timer").innerHTML;

  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond(timeArray[1] - 1);
console.log("s")
  if (s < 0) {
    alert("times up");
    show("timerout");
    hide("quiz");
    hide("timer");
    return;
  }

  document.getElementById("timer").innerHTML = m + ":" + s;

  setTimeout(startTimer, 1000);
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {
    sec = "0" + sec;
  } // add zero in front of numbers < 10

  return sec;
}

function show(divname) {
  var x = document.getElementById(divname);

  x.style.display = "block";
}
function hide(divname) {
  var x = document.getElementById(divname);
  x.style.display = "none";
}
