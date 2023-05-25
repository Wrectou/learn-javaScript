let array = [1, 2, 3, 2, 1]

function repeatArray() {
  var res = []
  for (var i = 0; i < array.length; i++) {
    if (res.indexOf(array[i]) === -1) {
      res.push(array[i])
    }
  }
  return res
}

console.log(repeatArray(array));