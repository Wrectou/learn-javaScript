const posts = [
  { title: '文章一', body: '这是文章一的正文'},
  { title: '文章二', body: '这是文章二的正文'},
]

function getPosts() {
  let output = ''
  setTimeout(() => {
    posts.forEach((post) => {
      output += `<li>title: ${post.title}</li>`
      document.body.innerHTML = output
    })
  },1000)
}

function createPost(post){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post)
      const error = false
      if (!error) {
        resolve('success')
      } else {
        reject('error')
      }
    },2000)
  })
}

async function init() {
  await createPost({ title: '文章三', body: '这是文章三的正文'})
  getPosts()
}

init()



async function fetchUsers(){
  const res = await fetch('http://jsonplaceholder.typicode.com/users')
  const data = await res.json()

  console.log(data)
}

fetchUsers()