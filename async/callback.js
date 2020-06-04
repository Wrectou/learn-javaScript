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

function createPost(post, callback){
  setTimeout(() => {
    posts.push(post)
    callback()
  },2000)
}

createPost({ title: '文章三', body: '这是文章三的正文'}, getPosts)