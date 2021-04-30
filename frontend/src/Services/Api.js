import axios from 'axios'

const fetchSounds = (transform, set) =>
  axios
    .get('/api/sounds')
    .then(r => r.data)
    .then(data => set(transform(data)))
    .catch(e => {
      window.alert('Network error: No response. Try reloading the page.')
    })

const checkAnswer = (id, answer, set) =>
  axios
    .post(`/api/sounds/${id}/answer`, { answer })
    .then(r => r.data)
    .then(set)
    .catch(e => {
      window.alert('Network error: No response. Try again.')
    })

const giveUp = set =>
  axios
    .post(`/api/give-up`, {})
    .then(r => r.data)
    .then(set)
    .catch(e => {
      window.alert('Network error: No response. Try again.')
    })

const Api = {
  fetchSounds,
  checkAnswer,
  giveUp
}

export default Api
