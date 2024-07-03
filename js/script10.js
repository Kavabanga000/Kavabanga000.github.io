function calculateY(a, x, b, c) {
    try {
      if (a < 0 && c!== 0) {
        let y = a * x + b * x + c;
        return y;
      } else if (a > 0 && c === 0) {
        if (x === 0) {
          throw new Error("Деление на ноль!");
        }
        let y = -a / x - c;
        return y;
      } else {
        let y = -a * (x + c);
        return y;
      }
    } catch (error) {
      alert(error.message);
      return null;
    }
  }
  
  function calculateAndDisplayResult() {
    let a = 5;
    let x = 0;
    let b = 4;
    let c = 0;
  
    let result = calculateY(a, x, b, c);
    if (result!== null) {
      document.getElementById("result").innerHTML = `Результат расчета: ${result}`;
    }
  }





  function calculate() {
    let operation = document.getElementById("operation").value;
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let result;
  
    switch (operation) {
      case "add":
        result = num1 + num2;
        break;
      case "sub":
        result = num1 - num2;
        break;
      case "mul":
        result = num1 * num2;
        break;
      case "div":
        if (num2 === 0) {
          alert("Cannot divide by zero!");
          return;
        }
        result = num1 / num2;
        break;
      default:
        alert("Invalid operation!");
        return;
    }
  
    document.getElementById("result").innerHTML = `Result: ${result}`;
}
function showOSInfo() {
    const os = navigator.platform;
    alert(`Операционная система: ${os}`);
}