# JavascriptCalculator

# Scientific Calculator

A modern, responsive **scientific calculator** built with **vanilla JavaScript**, **HTML**, and **Tailwind CSS** — inspired by classic Casio calculators.

---

## Features

- Basic arithmetic operations: `+`, `-`, `×`, `÷`
- Parentheses support for grouped expressions
- Scientific functions: `sin`, `cos`, `tan`, and `√ (square root)`
- Infix to postfix conversion for correct operator precedence
- Clean, modern UI styled with Tailwind CSS
- Keyboard-friendly display (read-only input field)

---

## Demo

![alt text](image.png)

---

## How it works

### Input Handling

- Users enter expressions using on-screen buttons.
- Input string is built and displayed in the calculator screen.

### Parsing & Evaluation

- Expression string is converted from **infix notation** to **postfix (Reverse Polish Notation)** using a stack-based algorithm.
- Postfix expression is then evaluated step by step using a stack.

### Scientific Functions

- `sin`, `cos`, `tan` convert degrees to radians before calculation.
- `√` computes the square root.
- Handles edge cases (e.g., negative numbers for square root, tan(90°) as error).

---

## Technologies Used

- **JavaScript (ES6+)** — logic, parsing, and evaluation
- **Tailwind CSS** — for UI styling and layout
- **HTML5** — structure

---

## 🚩 Setup & Usage

1️⃣ Clone this repository\*\*

```bash
git clone https://github.com/yourusername/scientific-calculator.git
```
