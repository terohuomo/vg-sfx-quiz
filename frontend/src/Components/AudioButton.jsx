import React from 'react'
import { FaPlay } from 'react-icons/fa'

const AudioButton = ({ id, playAudio }) => {
  const buttonRef = React.createRef()

  const handleClick = () => {
    buttonRef.current.blur()
    playAudio(id)
  }

  return (
    <button ref={buttonRef} onClick={handleClick}>
      <FaPlay size={20} />
    </button>
  )
}

export default AudioButton
