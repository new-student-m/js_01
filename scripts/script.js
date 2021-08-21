// question no 1
function fun_1() {
  var x_1;
  x_1 = Number(window.document.getElementById("input-1").value);
  window.document.getElementById("show-1").innerHTML = x_1;
  window.console.log("qustion no 1 " + typeof x_1);
}

// question no 2
function fun_2() {
  var x_1;
  x_1 = Number(window.document.getElementById("input-2").value);

  if (x_1 % 3 == 0 && x_1 % 4 == 0) {
    window.document.getElementById("show-2").innerHTML = "yes";
  } else {
    window.document.getElementById("show-2").innerHTML = "no";
  }
  window.console.log(typeof x_1);
}

// question no 3
function fun_3() {
  var x_1;
  var x_2;
  x_1 = Number(window.document.getElementById("input-3").value);
  x_2 = Number(window.document.getElementById("input-3-1").value);

  if (x_1 >= x_2) {
    window.document.getElementById("show-3").innerHTML = x_1;
  } else if (x_2 > x_1) {
    window.document.getElementById("show-3").innerHTML = x_2;
  } else if (isNaN(x_1) || isNaN(x_2)) {
    window.document.getElementById("show-3").innerHTML = "number pls !!";
  }
}
// question no 4
function fun_4() {
  var x_1;
  x_1 = Number(window.document.getElementById("input-4").value);
  if (x_1 >= 0) {
    window.document.getElementById("show-4").innerHTML = "positive";
  } else if (x_1 < 0) {
    window.document.getElementById("show-4").innerHTML = "negative";
  } else if (isNaN(x_1)) {
    window.document.getElementById("show-4").innerHTML = "number pls !!";
  }
}
// question no 5
function fun_5() {
  var arr = [];
  var max = 0;
  var min = 0;
  arr[0] = Number(window.document.getElementById("input-5").value);
  arr[1] = Number(window.document.getElementById("input-5-1").value);
  arr[2] = Number(window.document.getElementById("input-5-2").value);
  min = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (isNaN(arr[i])) {
      window.document.getElementById("show-5").innerHTML = "number pls !!";
      console.log("hello");
      break;
    }
    if (arr[i] >= max) {
      max = arr[i];
      console.log("max = " + max);
    }
    if (arr[i] <= min) {
      console.log("min = " + min);
      min = arr[i];
    }
    window.document.getElementById(
      "show-5"
    ).innerHTML = `Max = ${max} Min = ${min}`;
  }
}
// question no 6
function fun_6() {
  var x_1 = Number(window.document.getElementById("input-6").value);

  if (x_1 % 2 == 0) {
    window.document.getElementById("show-6").innerHTML = "even";
  } else {
    window.document.getElementById("show-6").innerHTML = "odd";
  }
}
// question no 7
function fun_7() {
  var x_1 = window.document.getElementById("input-7").value;

  if (x_1 == "a" || x_1 == "e" || x_1 == "i" || x_1 == "o" || x_1 == "u") {
    window.document.getElementById("show-7").innerHTML = "vowel";
  } else if (x_1 >= 0 || x_1 < 0) {
    window.document.getElementById("show-7").innerHTML = "letter pls !!";
  } else {
    window.document.getElementById("show-7").innerHTML = "consonant";
  }
}
// question no 8
function fun_8() {
  var x_1 = Number(window.document.getElementById("input-8").value);
  var sum = "";
  for (var i = 1; i <= x_1; i++) {
    sum = sum + i + ",";
  }
  window.document.getElementById("show-8").innerHTML = sum;
}
// question no 9
function fun_9() {
  var x_1 = Number(window.document.getElementById("input-9").value);
  var sum = "";
  for (var i = 1; i <= 12; i++) {
    var multiplication = x_1 * i;
    sum = sum + multiplication + ", ";
  }
  window.document.getElementById("show-9").innerHTML = sum;
}
// question no 10
function fun_10() {
  var x = Number(window.document.getElementById("input-10").value);
  var str = "";
  if (isNaN(x)) {
    window.document.getElementById("show-10").innerHTML = "numper pls !!";
  } else {
    for (var i = 1; i <= x; i++) {
      if (i % 2 == 0) {
        str += i + " ";
      } else {
        continue;
      }
    }
    window.document.getElementById("show-10").innerHTML = str;
  }
}
// question no 11
function fun_11() {
  var x = Number(window.document.getElementById("input-11").value);
  var y = Number(window.document.getElementById("input-11-1").value);
  var sum = 1;
  if (isNaN(x)) {
    window.document.getElementById("show-11").innerHTML = "numper pls !!";
  } else {
    for (var i = 1; i <= y; i++) {
      sum = sum * x;
    }
    window.document.getElementById("show-11").innerHTML = sum;
  }
}

// question no 12
function fun_12() {
  var x_1 = Number(window.document.getElementById("input-12").value);
  var x_2 = Number(window.document.getElementById("input-12-1").value);
  var x_3 = Number(window.document.getElementById("input-12-2").value);
  var x_4 = Number(window.document.getElementById("input-12-3").value);
  var x_5 = Number(window.document.getElementById("input-12-4").value);
  var total;
  var average;
  var percentage;
  total = x_1 + x_2 + x_3 + x_4 + x_5;
  average = total / 5;
  percentage = (total / 500) * 100;
  window.document.getElementById(
    "show-12"
  ).innerHTML = `total = ${total} <br> average = ${average} <br> percentage = ${percentage}`;
}
// question no 13
function fun_13() {
  var x = window.document.getElementById("input-13").value;
  str = x.toLowerCase();
  if (
    str == "january" ||
    str == "march" ||
    str == "may" ||
    str == "july" ||
    str == "august"
  ) {
    window.document.getElementById("show-13").innerHTML = "31";
  } else if (str == "february") {
    window.document.getElementById("show-13").innerHTML = "28/29";
  } else if (str == "april" || str == "june" || str == "septemper") {
    window.document.getElementById("show-13").innerHTML = "30";
  } else {
    window.document.getElementById("show-13").innerHTML =
      "please enter right month !";
  }
}
// question no 14
function fun_13() {
  var x_1 = Number(window.document.getElementById("input-14").value);
  var x_2 = Number(window.document.getElementById("input-14-1").value);
  var x_3 = Number(window.document.getElementById("input-14-2").value);
  var x_4 = Number(window.document.getElementById("input-14-3").value);
  var x_5 = Number(window.document.getElementById("input-14-4").value);
  var total;
  var average;
  var percentage;
  total = x_1 + x_2 + x_3 + x_4 + x_5;
  average = total / 5;
  percentage = (total / 500) * 100;
  window.document.getElementById(
    "show-14"
  ).innerHTML = `grade = ${total}  <br> percentage = ${percentage}`;
}

// question no 15
function fun_15() {
  var str = window.document.getElementById("input-15").value;
  var month = str.toLowerCase();
  switch (month) {
    case "january":
      window.document.getElementById("show-15").innerHTML = "31";
      break;
    case "february":
      window.document.getElementById("show-15").innerHTML = "28/29";
      break;
    case "march":
      window.document.getElementById("show-15").innerHTML = "31";
      break;
    case "april":
      window.document.getElementById("show-15").innerHTML = "30";
      break;
    case "may":
      window.document.getElementById("show-15").innerHTML = "31";
      break;
    case "june":
      window.document.getElementById("show-15").innerHTML = "30";
      break;
    case "july":
      window.document.getElementById("show-15").innerHTML = "31";
      break;
    case "august":
      window.document.getElementById("show-15").innerHTML = "31";
      break;
    case "septemper":
      window.document.getElementById("show-15").innerHTML = "30";
      break;
    case "october":
      window.document.getElementById("show-15").innerHTML = "31";
      break;
    case "november":
      window.document.getElementById("show-15").innerHTML = "31";
      break;
    case "december":
      window.document.getElementById("show-15").innerHTML = "31";
      break;
    default:
      window.document.getElementById("show-15").innerHTML =
        "enter right month !";
  }
}
// question no 16
function fun_16() {
  var str = window.document.getElementById("input-16").value;
  switch (str) {
    case "a":
      window.document.getElementById("show-16").innerHTML = "vowel";
      break;
    case "e":
      window.document.getElementById("show-16").innerHTML = "vowel";
      break;
    case "i":
      window.document.getElementById("show-16").innerHTML = "vowel";
      break;
    case "o":
      window.document.getElementById("show-16").innerHTML = "vowel";
      break;
    case "u":
      window.document.getElementById("show-16").innerHTML = "vowel";
      break;
    default:
      window.document.getElementById("show-16").innerHTML = "consonant";
  }
}
// question no 17
function fun_17() {
  var x_1 = Number(window.document.getElementById("input-17").value);
  var x_2 = Number(window.document.getElementById("input-17-1").value);

  var x_3 = x_1 > x_2;

  if (isNaN(x_1)) {
    window.document.getElementById("show-17").innerHTML = "enter a number";
  } else if (isNaN(x_2)) {
    window.document.getElementById("show-17").innerHTML = "enter a number";
  } else {
    switch (x_3) {
      case true:
        window.document.getElementById("show-17").innerHTML = x_1;
        break;
      default:
        window.document.getElementById("show-17").innerHTML = x_2;
    }
  }
}
// question no 18
function fun_18() {
  var x_1 = Number(window.document.getElementById("input-18").value);

  switch (true) {
    case x_1 % 2 == 0:
      window.document.getElementById("show-18").innerHTML = "even";
      break;
    default:
      window.document.getElementById("show-18").innerHTML = "odd";
  }
}
// question no 19
function fun_19() {
  var x_1 = Number(window.document.getElementById("input-19").value);

  switch (true) {
    case x_1 >= 0:
      window.document.getElementById("show-19").innerHTML = "positive";
      break;
    default:
      window.document.getElementById("show-19").innerHTML = "negative";
  }
}
// question calculator
var outPutScreen = window.document.getElementById("output-screen");

function display(num) {
  outPutScreen.value += num;
}

function calculate() {
  try {
    outPutScreen.value = eval(outPutScreen.value);
  } catch (error) {
    window.alert("invalid");
  }
}

function cl() {
  outPutScreen.value = "";
}
function del()
{
  outPutScreen.value = outPutScreen.value.slice(0,-1);
}
