// html5 video的方法
// video.paused   // 判断是否是暂停状态
// video.play()    // 播放方法
// video.pause()   // 暂停方法
// video.currentTime   // 已经播放的时长
// video.duration    // 总时长
// 通过video的这个方法 timeupdate 获取视频时长信息

// get element
const video = document.getElementById('video')
const play = document.getElementById('play')
const stop = document.getElementById('stop')
const progress = document.getElementById('progress')
const timestamp = document.getElementById('timestamp')

// toogleVideoStatus
function toogleVideoStatus() {
  if (video.paused) {
    video.play()
    play.innerHTML = `<i class="fa fa-pause fa-2x"></i>`
    // video.webkitRequestFullScreen()
    // video.width = window.innerWidth
    // video.height = window.innerHeight
  } else {
    video.pause()
    play.innerHTML = `<i class="fa fa-play fa-2x"></i>`
    // video.width = '60%'
    // video.height = '100%'
    // document.webkitCancelFullScreen();
  }
}

// updatePlayIcon
// function updatePlayIcon() {
//   if (video.paused) {
//     play.innerHTML = `<i class="fa fa-play fa-2x"></i>`
//   } else {
//     play.innerHTML = `<i class="fa fa-pause fa-2x"></i>`
//   }
//   console.log(play)
// }

// updateProgress
function updateProgress() {
  // console.log(video.currentTime)  // 视频当前已经播放的时常
  // console.log(video.duration)  // 视频的总时长
  progress.value = (video.currentTime / video.duration) * 100

  let mins = Math.floor(video.currentTime / 60)
  if (mins < 10) {
    mins = "0" + String(mins)
  }
  let secs = Math.floor(video.currentTime % 60)
  if (secs < 10) {
    secs = "0" + String(secs)
  }
  timestamp.innerText = `${mins}:${secs}`
}

// stopVideo
function stopVideo() {
  video.currentTime = 0
  video.pause()
}

// setVideoProgress
function setVideoProgress() {
  video.currentTime = progress.value * video.duration / 100
}

// addEventListener
video.addEventListener('click', toogleVideoStatus)
// video.addEventListener('pause', updatePlayIcon)
// video.addEventListener('play', updatePlayIcon)
video.addEventListener('timeupdate', updateProgress)

play.addEventListener('click', toogleVideoStatus)
stop.addEventListener('click', stopVideo)
progress.addEventListener('change', setVideoProgress)



document.addEventListener('keyup', function(e) {
  // console.log(e)
  if (e.keyCode === 70) {
    video.width = window.innerWidth
    video.height = window.innerHeight
  }
})