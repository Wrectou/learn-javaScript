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

createPost({ title: '文章三', body: '这是文章三的正文'})
  .then(getPosts)
  .catch((err) => {console.log(err)})



// Promise.all()
const promise1 = Promise.resolve('hello promise.all')
const promise2 = 10
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, 'wrectou')
})
const promise4 = fetch('http://jsonplaceholder.typicode.com/users').then(res => res.json())

Promise.all([promise1, promise2, promise3, promise4])
  .then(data=>{
    console.log(data)
  })
  .catch(err => {
    console.log(err)
  })