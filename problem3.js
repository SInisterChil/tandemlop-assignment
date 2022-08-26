// Get the total count of number list in the dictionary which is multiple of [1,2,3,4,5,6,7,8,9]
//     (examples)
//     input: [1,2,8,9,12,46,76,82,15,20,30]
//     Output:
//         {1: 11, 2: 8, 3: 4, 4: 4, 5: 3, 6: 2, 7: 0, 8: 1, 9: 1}

function multipleOfArray(arr) {
  let x = 10
  let obj = {}
  arr.forEach(function (element, x) {
    let value = 0
    for (let i = 0; i < x; i++) {
      if (element % x === 0) {
        value += 1
      }
      return (obj[x] = value)
    }
  })
}
