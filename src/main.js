const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let currentInput = "";

function updateDisplay() {
  display.value = currentInput;
}

function clear() {
  currentInput = "";
  updateDisplay();
}

function numberInput(num) {
  currentInput += num;
  updateDisplay();
}

function precedence(op) {
  if (op === "+" || op === "-") return 1;
  if (op === "*" || op === "/") return 2;
  return 0;
}

function infixToPostfix(expr) {
  const output = [];
  const stack = [];

  const tokens = expr.match(/(\d+\.?\d*|\.\d+|[+\-*/()])/g);

  for (const token of tokens) {
    if (!isNaN(token)) {
      output.push(token);
    } else if (token === "(") {
      stack.push(token);
    } else if (token === ")") {
      while (stack.length && stack[stack.length - 1] !== "(") {
        output.push(stack.pop());
      }
      stack.pop();
    } else {
      while (
        stack.length &&
        precedence(stack[stack.length - 1]) >= precedence(token)
      ) {
        output.push(stack.pop());
      }
      stack.push(token);
    }
  }

  while (stack.length) {
    output.push(stack.pop());
  }

  return output;
}

function evaluatePostfix(postfix) {
  const stack = [];

  for (const token of postfix) {
    if (!isNaN(token)) {
      stack.push(parseFloat(token));
    } else {
      const b = stack.pop();
      const a = stack.pop();
      let res = 0;
      if (token === "+") res = a + b;
      else if (token === "-") res = a - b;
      else if (token === "*") res = a * b;
      else if (token === "/") res = a / b;
      stack.push(res);
    }
  }
  return stack[0];
}

function calculate() {
  try {
    const expression = currentInput.replace(/×/g, "*").replace(/÷/g, "/");
    const postfix = infixToPostfix(expression);
    const result = evaluatePostfix(postfix);
    currentInput = result.toString();
    updateDisplay();
  } catch (e) {
    currentInput = "Error";
    updateDisplay();
  }
}

function handleScientific(func) {
  if (currentInput === "") return;
  const value = parseFloat(currentInput);
  if (isNaN(value)) return;

  let result;

  switch (func) {
    case "√":
      if (value < 0) {
        result = "Error";
      } else {
        result = Math.sqrt(value);
      }
      break;
    case "sin":
      result = Math.sin((value * Math.PI) / 180);
      break;
    case "cos":
      result = Math.cos((value * Math.PI) / 180);
      break;
    case "tan":
      if (Math.abs(value % 180) === 90) {
        result = "Error";
      } else {
        result = Math.tan((value * Math.PI) / 180);
      }
      break;
  }

  if (result === "Error") {
    currentInput = "Error";
  } else {
    currentInput = `${parseFloat(result.toFixed(4))}`;
  }

  updateDisplay();
}

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const value = btn.textContent.trim();
    if (!isNaN(value) || value === "." || value === "(" || value === ")") {
      numberInput(value);
    } else if (value === "AC") {
      clear();
    } else if (value === "=") {
      calculate();
    } else if (["sin", "cos", "tan", "√"].includes(value)) {
      handleScientific(value);
    } else {
      numberInput(value);
    }
  });
});
