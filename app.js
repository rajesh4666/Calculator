let result = document.querySelector("#result");

function Solve(val) {
   //  var v = document.getElementById('result');
    result.value += val;
}

function Result() {
   // var num1 = document.getElementById('result').value;

      var num2 = eval(result.value.replace('x', '*'));
      result.value = num2;
   
}

function Clear() {
   //  var inp = document.getElementById('result');
    result.value = '';
}

function Back() {
   //  var ev = document.getElementById('result');
    result.value = result.value.slice(0, -1);
}
