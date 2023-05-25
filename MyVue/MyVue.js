class Vue {
  
  constructor(obj_instance) {
    this.$data = obj_instance.data
    Observer(this.$data)
  }

}

// 数据劫持 - 监听实例里的数据
function Observer(data_instance) {
  if (!data_instance || typeof data_instance !== "object") return
  Object.keys(data_instance).forEach(key => {
    let value = data_instance[key]
    Observer(value)
    Object.defineProperty(data_instance, key, {
      enumerable: true,
      configurable: true,
      get() {
        console.log('getter ->  key: '+key+', value: '+value);
        return value
      },
      set(newVal) {
        console.log('setter ->  key: '+key+', newValue: '+value);
        value = newVal
        Observer(newVal)
      }
    })
  })
}