import React from 'react'

import AudioButton from './AudioButton'
import QuizInput from './QuizInput'

import './QuizElement.css'

const QuizElement = ({ index, sound, playAudio, handleCheck }) => (
  <div className='Quiz-element'>
    <AudioButton id={sound.id} playAudio={playAudio} correct={sound.correct} />
    <QuizInput sound={sound} handleCheck={handleCheck} />
    <span className='Quiz-element-index'>{index}</span>
  </div>
)

export default QuizElement
