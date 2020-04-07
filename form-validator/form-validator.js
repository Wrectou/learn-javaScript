// get element
const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

function showError(input, message) {
  const formControl = input.parentElement
  formControl.className = 'form-control error'
  const small = formControl.querySelector('small')
  small.innerText = message
}

function showSuccess(input) {
  const formControl = input.parentElement
  formControl.className = 'form-control success'
}

function errMessage(input) {
  return input.placeholder.slice(3)
}

function inputValidator(inputArr) {
  inputArr.forEach((input) => {
    if (input.value.trim() == '') {
      showError(input, `${errMessage(input)}为必填项！`)
    } else {
      showSuccess(input)
    }
  })
}

function emailValidator(input) {
  let emailReg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
  if (!emailReg.test(input.value.trim())) {
    showError(input, '请输入正确的邮箱格式！')
  } else {
    showSuccess(input)
  }
}

function lengthValidator(input, min, max) {
  if (input.value.trim().length < min) {
    showError(input, `${errMessage(input)}的长度应不少于${min}个字符！`)
  } else if (input.value.trim().length > max) {
    showError(input, `${errMessage(input)}的长度应不大于${max}个字符！`)
  }
}

function passwordsMatchValidator(input1, input2) {
  if (input1.value.trim() != input2.value.trim()) {
    showError(input2, '两次密码输入不一致！')
  }
}

// submit form
form.addEventListener('submit', (e) => {
  e.preventDefault()

  inputValidator([username, email, password, password2])
  emailValidator(email)
  lengthValidator(username, 3, 12)
  lengthValidator(password, 6, 16)
  passwordsMatchValidator(password, password2)
})