let array = [1, 2, 3, 2, 1]

function repeatArray() {
  var res = array.filter((item, index, array) => {
    return array.indexOf(item) === index
  })
  return res
}

console.log(repeatArray(array));