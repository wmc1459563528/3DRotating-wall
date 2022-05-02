
// 这里使用了微信自带的WeixinJSBridgeReady事件
document.addEventListener('WeixinJSBridgeReady', function () {
  document.querySelector('#audios').play()
})
// 触摸事件
document.addEventListener('touchstart', function () {
  document.querySelector('#audios').play()

})

// 点击事件
document.addEventListener('click', function () {
  document.querySelector('#audios').play()

})
