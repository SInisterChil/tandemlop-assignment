// Create a small calculator which performs operations such as Addition, Subtraction, Multiplication and Division using class.
//     Calculator inputs :> ‘a’, ‘b’ and ‘type of operation’
//     Datatype :> ‘a’ = double, ‘b’ = double, ‘type of operation’ = string
function calculator(a, b, c) {
  if (c === "Add") {
    return a + b
  } else if (c === "Sub") {
    return a - b
  } else if (c === "Multiply") {
    return a * b
  } else if (c === "Divide") {
    return a / b
  } else {
    return "Please give valid input"
  }
}
