// 获取节点
const main = document.getElementById('main')
const addUserBtn = document.getElementById('add-user')
const doubleBtn = document.getElementById('double')
const showMillionairesBtn = document.getElementById('show-millionaires')
const sortBtn = document.getElementById('sort')
const calculateWealthBtn = document.getElementById('calculate-wealth')

// users数据
let data = []

// 获取随机名称和钱
async function getRandomUser() {
  const res = await fetch('https://randomuser.me/api')
  const data = await res.json()
  const user = data.results[0]
  const newUser = {
    name: `${user.name.last} ${user.name.first}`,
    money: Math.floor(Math.random() * 1000000)
  }
  addData(newUser)
}

// 添加随机user数据
function addData(obj) {
  data.push(obj)
  updateData()
}

// 更新数据
function updateData(providedData = data) {
  main.innerHTML = '<h2><strong>Person</strong>Wealth</h2>'
  providedData.forEach((user) => {
    const element = document.createElement('div')
    element.classList.add('person')
    element.innerHTML = `<strong>${user.name}</strong>${formatMoney(user.money)}`
    main.appendChild(element)
  })
}

// 格式化money
function formatMoney(money) {
  return "$" + money.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
}

// 资金翻倍
function doubleMoney() {
  // data = data.map(user=> {
  //   user.money = user.money * 2
  //   return user;
  // })
  data = data.map(user => {
    return { ...user, money: user.money * 2 }
  })
  updateData()
}

// 财富榜 排序
function sortMoney() {
  data.sort((a,b) => b.money - a.money)
  updateData()
}

// 查询百万富翁
function showMillionairesMoney() {
  const newData = data.filter((user) => user.money > 1000000)
  if (newData.length > 0) {
    updateData(newData)
  } else {
    alert('没有查询到百万富翁呦')
  }
}

// 计算总金额
function calculateWealthMoney() {
  // const total = data.reduce((a,b) => {
  //   return a.money + b.money
  // })
  const total = data.reduce((acc, user) => (acc += user.money), 0 )
  const totalEl = document.createElement('div')
  totalEl.innerHTML = `<h3>Total Money<strong>${formatMoney(total)}</strong></h3>`
  main.appendChild(totalEl)
}

// 添加账户
addUserBtn.addEventListener('click', getRandomUser)
doubleBtn.addEventListener('click', doubleMoney)
sortBtn.addEventListener('click', sortMoney)
showMillionairesBtn.addEventListener('click', showMillionairesMoney)
calculateWealthBtn.addEventListener('click', calculateWealthMoney)