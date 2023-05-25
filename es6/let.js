function foo(obj) {
  with(obj) {
    a = 2
  }
}

let o1 = {
  a: 3
}

let o2 = {
  b: 4
}