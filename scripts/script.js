// question no 1
function fun_1() {
  var x_1;
  x_1 = window.document.getElementById("input-1").value;
  window.document.getElementById("show-1").innerHTML = x_1;
  window.console.log(typeof x_1);
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
  x_1 = window.document.getElementById("input-3").value;
  x_2 = window.document.getElementById("input-3-1").value;

  if (x_1 >= x_2) {
    window.document.getElementById("show-3").innerHTML = x_1;
  } else {
    window.document.getElementById("show-3").innerHTML = x_2;
  }
}
// question no 4
function fun_4() {
  x_1 = window.document.getElementById("input-4").value;

  if (x_1 >= 0) {
    window.document.getElementById("show-4").innerHTML = "positive";
  } else {
    window.document.getElementById("show-4").innerHTML = "negative";
  }
}
// question no 5
function fun_5() {
  x_1 = window.document.getElementById("input-5").value;
  x_2 = window.document.getElementById("input-5-1").value;
  x_3 = window.document.getElementById("input-5-2").value;

  window.document.getElementById("show-5").innerHTML =
    "max=" + Math.max(x_1, x_2, x_3) + " " + "min=" + Math.min(x_1, x_2, x_3);
}
// question no 6
function fun_6() {
    x_1 = window.document.getElementById("input-6").value;
  
    if (x_1%2 == 0) {
      window.document.getElementById("show-6").innerHTML = "even";
    } else {
      window.document.getElementById("show-6").innerHTML = "odd";
    }
  }
  // question no 8
function fun_8() {
    x_1 = window.document.getElementById("input-8").value;
  
    if (x_1 == "a" || x_1 == "e" || x_1 == "i"|| x_1 == "o" || x_1 == "u") {
      window.document.getElementById("show-8").innerHTML = "vowel";
    } else {
      window.document.getElementById("show-8").innerHTML = "consonant";
    }
  }