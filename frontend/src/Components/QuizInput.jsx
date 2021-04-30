import React, { useState } from 'react'

let timeout

const debounce = (fn, bufferInterval) => {
  clearTimeout(timeout)
  timeout = setTimeout(fn, bufferInterval)
}

const QuizInput = ({ sound, handleCheck }) => {
  const [text, setText] = useState('')

  const performCheck = value => {
    if (value.length > 0) {
      handleCheck(sound.id, value)
    }
  }

  const handleChange = ({ target }) => {
    const newValue = target.value || ''
    setText(newValue)
    debounce(() => performCheck(newValue.trim()), 200)
  }

  const getClass = sound => {
    if (sound.loading) {
      return 'Quiz-input--loading'
    }
    if (sound.correct) {
      return 'Quiz-input--correct'
    }
    if (sound.game) {
      return 'Quiz-input--spoiler'
    }
  }

  return (
    <input
      className={getClass(sound)}
      type='text'
      maxLength={40}
      value={sound.game || text}
      onChange={handleChange}
      disabled={sound.game !== null}
      placeholder={`Input answer... `}
    />
  )
}

export default QuizInput
