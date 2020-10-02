var flag = 0;
var num1 = '';
var num2 = '';
var op = '';

function myFun(a) {

    if (flag == 0) {
        num1 = num1 + a;
        document.getElementById("expression").innerHTML += a;
    }
    if (flag == 1) {
        num1 = Number(num1);
        num2 = num2 + a;
        document.getElementById("expression").innerHTML += a;
    }

}

function operator(a) {
    flag = 1;

    document.getElementById("expression").innerHTML += ' ' + a + ' ';
    op = a;
}

function compute() {

    num2 = Number(num2);
    if (op == '+') {
        var res = num1 + num2;
    }
    if (op == '-') {
        var res = num1 - num2;
    }
    if (op == '*') {
        var res = num1 * num2;
    }
    if (op == '/') {
        var res = num1 / num2;
    }
    document.getElementById("expression").innerHTML = "Result= : " + res;
    document.getElementById("ref").style.display = "block";

}