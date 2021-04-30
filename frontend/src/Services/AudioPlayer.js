const baseUrl = '/api/sounds/'

const handlePlayError = error => {
  if (error instanceof DOMException && error.message.indexOf('pause()') > -1) {
    // Double clicked audio, pause() interferes with play()
    console.error(error)
    return
  } else {
    window.alert('Network error: No response. Try again.')
  }
}

const AudioPlayer = () => {
  let sound = new Audio()

  const playAudio = id => {
    sound.pause()
    sound = new Audio(`${baseUrl}${id}.mp3`)
    sound.volume = 0.8 // No need to break peoples ears
    sound.play().catch(handlePlayError)
  }

  return {
    playAudio
  }
}

const audioPlayer = AudioPlayer()

export default audioPlayer
