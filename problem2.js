// With a single integer as the input, generate the following until a = x [series of numbers as shown in the below examples]

//     Output: (examples)
//         1) input a = 1, then output : 1
//         2) input a = 2, then output : 1, 3
//         3) input a = 3, then output : 1, 3, 5
//         4) input a = 4, then output : 1, 3, 5, 7
//         .
//         .
//         5) input a = x, then output : 1, 3, 5, 7, .......
function seriesOfNum(x) {
  let series = []
  let y = 1
  if (x === 1) {
    return 1
  } else if (x > 1) {
    for (let i = 0; i < x; i++) {
      series.push(y)
      y += 2
    }
  }
  return series
}

console.log(seriesOfNum(4))
