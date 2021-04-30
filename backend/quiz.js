const fs = require('fs')

const loadSounds = () => {
  const soundsRaw = JSON.parse(fs.readFileSync(`${__dirname}/sounds.json`, 'UTF-8'))
  return soundsRaw.reduce((curr, now) => {
    curr[now.id] = now
    return curr
  }, {})
}

console.log('--- Loading sounds ---')
const sounds = loadSounds()

// Input and answer both stripped of any special characters, spaces and ignore uppercase
const cleanString = input => input.replace(/[^0-9A-z]+/g, '').toLowerCase()

const checkAnswer = (id, input) => {
  const cleaned = cleanString(input)
  const sound = sounds[id]
  const success = sound.answers.some(a => cleaned.startsWith(cleanString(a)))

  return {
    success,
    answer: success ? sound : null
  }
}

module.exports = {
  checkAnswer,
  sounds
}
