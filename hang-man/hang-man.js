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

const correctLetters = ['w','o','n','d','e','r']
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
  console.log(innerWord)
  if (innerWord === selectedWord) {
    finalMessageEl.innerText = '恭喜你输入正确！ 😃'
    popupEl.style.display = 'flex'
  }
}

displayWord()