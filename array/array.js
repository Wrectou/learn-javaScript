let array = [1, 2, 3, 2, 1]

function repeatArray() {
  let res = []
  for(var i = 0; i < array.length; i++) {
    for(var j = 0 ; j < res.length; j++){
      if (array[i] === res[j]) {
        break
      }
    }
    if (j === res.length) {
      res.push(array[i])
    }
  }
  return res
}

console.log(repeatArray(array));