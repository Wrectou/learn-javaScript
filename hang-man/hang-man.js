const wordEl = document.getElementById('word')
const wrongLettersEl = document.getElementById('wrong-letters')
const playAgainEl = document.getElementById('play-button')
const popupEl = document.getElementById('popup-container')
const notificationEl = document.getElementById('notification-container')
const finalMessageEl = document.getElementById('final-message')
const figureParts = document.querySelectorAll('.figure-part')

const words = ['application', 'program', 'interface', 'wonder']

let selectedWord = words[Math.floor(Math.random() * words.length)]
console.log(selectedWord)

const correctLetters = []
const wrongLetters = []

// 显示单词函数
function displayWord() {
  wordEl.innerHTML =
    `
      ${selectedWord.split('').map(letter =>
      `
          <div class="letter">
            ${correctLetters.includes(letter) ? letter : ''}
          </div>
        `
    ).join('')}
    `
  let innerWord = wordEl.innerText.replace(/\n/g, '')
  // console.log(innerWord)
  if (innerWord === selectedWord) {
    finalMessageEl.innerText = '恭喜你输入正确！ 😃'
    popupEl.style.display = 'flex'
  }
}

// 4、showNotification函数
function showNotification() {
  notificationEl.classList.add('show')
  setTimeout(() => {
    notificationEl.classList.remove('show')
  }, 3000)
}

// 5、updateWrongLettersEl
function updateWrongLettersEl() {
  wrongLettersEl.innerHTML = `
    ${wrongLetters.length > 0 ? '<p>错误：</p>' : ''}
    ${wrongLetters.map((letter) => `<span>${letter}</span>`)}
  `
  figureParts.forEach((part, i) => {
    const errors = wrongLetters.length
    if (errors > i) {
      part.style.display = 'block'
    } else {
      part.style.display = 'none'
    }
  })

  if (wrongLetters.length == figureParts.length) {
    finalMessageEl.innerText = '抱歉输入错误，游戏结束. 😕'
    popupEl.style.display = 'flex'
  }
}

// 6、playAgainEl
playAgainEl.addEventListener('click', () => {
  correctLetters.splice(0)
  wrongLetters.splice(0)
  selectedWord = words[Math.floor(Math.random() * words.length)]
  displayWord()
  updateWrongLettersEl()
  popupEl.style.display = 'none'
})

displayWord()

// 3、按下键盘上的字母
window.addEventListener('keydown', e => {
  if (e.keyCode >= 65 && e.keyCode <= 90) {
    // console.log(e)
    const letter = e.key
    if (selectedWord.includes(letter)) {
      if (!correctLetters.includes(letter)) {
        correctLetters.push(letter)

        displayWord()
      } else {
        showNotification()
      }
    } else {
      if (!wrongLetters.includes(letter)) {
        wrongLetters.push(letter)

        updateWrongLettersEl()
      } else {
        showNotification()
      }
    }
  }
})
