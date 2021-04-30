import React from 'react'

import QuizElement from './QuizElement'

const QuizContainer = ({ sounds, playAudio, handleCheck }) => (
  <section className='Quiz-main'>
    {sounds.length === 0 && <p>Loading...</p>}
    {sounds.map((s, i) => (
      <QuizElement
        key={s.id}
        index={i + 1}
        sound={s}
        playAudio={playAudio}
        handleCheck={handleCheck}
      />
    ))}
  </section>
)

export default QuizContainer
