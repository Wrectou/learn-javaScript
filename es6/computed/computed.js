;(function() {
  var Computed = function(option) {
    this.x = option.firstNum
    this.y = option.secondNum
  }

  Computed.prototype = {
    plus: function() {
      console.log(`${ this.x } + ${ this.y } = ${ this.x + this.y }`)
    },
    reduce: function() {
      console.log(`${ this.x } - ${ this.y } = ${ this.x - this.y }`)
    },
    ride: function() {
      console.log(`${ this.x } * ${ this.y } = ${ this.x * this.y }`)
    },
    divide: function() {
      console.log(`${ this.x } / ${ this.y } = ${ this.x / this.y }`)
    }
  }

  window.Computed = Computed
})()