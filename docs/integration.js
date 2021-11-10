window.VIDEO_HOLLOWKNIGHT = { type: 'video', src: 'x7x43zv' }
window.VIDEO_FF7R = { type: 'video', src: 'x7xgg57' }
window.VIDEO_PS5 = { type: 'video', src: 'x7xlnfn' }
window.AUDIO_ACOUSTIC = { type: 'audio', src: 'acoustic' }
window.AUDIO_CREATIVEMINDS = { type: 'audio', src: 'creative-minds' }
window.AUDIO_CUTE = { type: 'audio', src: 'cute' }
window.AUDIO_HAPPYROCK = { type: 'audio', src: 'happy-rock' }

window.load = function(media) {
  document.querySelector('iframe').contentWindow.postMessage(media, 'http://localhost:3000')
}

document.querySelectorAll('button').forEach((button) => {
  button.addEventListener('click', () => window.load(window[button.dataset.media]))
})
