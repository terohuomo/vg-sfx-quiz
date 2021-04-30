import React, { useState, useEffect } from 'react'

import AudioPlayer from './Services/AudioPlayer'
import Api from './Services/Api'
import QuizContainer from './Components/QuizContainer'
import QuizFooter from './Components/QuizFooter'
import GiveUpButton from './Components/GiveUpButton'

import './App.css'

const App = () => {
  const [sounds, setSounds] = useState([])
  const [gaveUp, setGaveUp] = useState(false)

  useEffect(() => {
    const mapToQuizElements = ids =>
      ids
        .map(({ id, order }) => ({
          id,
          order,
          correct: false,
          game: null,
          loading: false
        }))
        .sort((a, b) => a.order - b.order)

    Api.fetchSounds(mapToQuizElements, setSounds)
  }, [])

  const correctAnswers = () => {
    return sounds.filter(s => s.correct).length
  }

  const setLoading = (id, isLoading) => {
    const temp = [...sounds]
    const index = temp.findIndex(e => e.id === id)
    temp[index] = {
      ...temp[index],
      loading: isLoading
    }
    setSounds(temp)
  }

  const handleCheck = (id, answer) => {
    setLoading(id, true)

    Api.checkAnswer(id, answer, ({ success, answer }) => {
      if (success) {
        const updated = [...sounds]
        const index = updated.findIndex(e => e.id === id)
        updated[index] = {
          id,
          correct: true,
          game: answer.game,
          loading: false
        }
        setSounds(updated)
      } else {
        setLoading(id, false)
      }
    })
  }

  const handleGiveUp = () => {
    Api.giveUp(spoilers => {
      AudioPlayer.playAudio('game-over')
      setSounds(
        sounds.map(s => ({
          ...s,
          game: (spoilers.find(x => x.id === s.id) || {}).game
        }))
      )
      setGaveUp(true)
    })
  }

  return (
    <article className='App'>
      <header className='Quiz-header'>Video Game SFX Quiz</header>
      <QuizContainer
        sounds={sounds}
        handleCheck={handleCheck}
        playAudio={AudioPlayer.playAudio}
      />
      {sounds.length > 0 && (
        <GiveUpButton onClick={handleGiveUp} isDisabled={gaveUp} />
      )}
      <QuizFooter max={sounds.length} score={correctAnswers()} />
    </article>
  )
}

export default App
