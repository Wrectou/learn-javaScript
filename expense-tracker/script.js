// 获取dom节点
const balance = document.getElementById('balance')
const moneyPlus = document.getElementById('money-plus')
const moneyMinus = document.getElementById('money-minus')
const list = document.getElementById('list')
const form = document.getElementById('form')
const text = document.getElementById('text')
const amount = document.getElementById('amount')

// 获取本地存储数据
const localStorageTransactions = JSON.parse(localStorage.getItem('transactions'))

let transactions = localStorage.getItem('transactions') !== null ? localStorageTransactions : []

// addTransaction
function addTransaction(e) {
  e.preventDefault();
 
  if (text.value.trim() === "" || amount.value.trim() === "") {
    alert("请输入交易名称和金额")
  } else {
    const transaction = {
      id: generateId(),
      text: text.value,
      amount: +amount.value
    }
    transactions.push(transaction)
    updateLocalStorage()
    addTransactionDom(transaction)
    updateValues()
    text.value = ''
    amount.value = ''
  }
}

// 随机id
function generateId() {
  return Math.floor(Math.random() * 1000000)
}

// 添加transaction到DOM list中
function addTransactionDom(transaction) {
  const item = document.createElement('li')
  let sign = ''
  if (transaction.amount > 0) {
    sign = '+'
    item.classList.add('plus')
  } else {
    sign = '-'
    item.classList.add('minus')
  }
  item.innerHTML = `
    ${ transaction.text } <span>${ sign }$${ Math.abs(transaction.amount) }</span><button class="delete-btn" onClick="removeTransaction(${transaction.id})">x</button>
  `
  list.appendChild(item)
}

// 更新余额、收入、支出的金额
function updateValues() {
  // 通过map获取交易金额数组
  const amounts = transactions.map((transaction) => transaction.amount)

  const total = amounts.reduce((acc, item) => (acc += item),0).toFixed(2)
  const income = amounts.filter(item => item >0).reduce((acc,item) => (acc+=item),0).toFixed(2)
  const expense = (amounts.filter(item => item < 0).reduce((acc,item) => (acc+=item),0) * -1).toFixed(2)

  balance.innerText = `$${ total }`
  moneyPlus.innerText = `+$${ income }`
  moneyMinus.innerText = `-$${ expense }`
}

// removeTransaction
function removeTransaction(id) {
  transactions = transactions.filter((transaction) => transaction.id !== id)
  updateLocalStorage()
  init()
  updateValues()
}

// updateLocalStorage
function updateLocalStorage() {
  localStorage.setItem('transactions', JSON.stringify(transactions))
}

// 初始化
function init() {
  list.innerHTML = ''
  transactions.forEach(addTransactionDom)
  updateValues()
}

init()

// 新增记账
form.addEventListener('submit', addTransaction)