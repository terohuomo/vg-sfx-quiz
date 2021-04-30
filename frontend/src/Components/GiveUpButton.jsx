import React from 'react'

import './GiveUpButton.css'

let buttonPressTimer = null

const GiveUpButton = ({ onClick, isDisabled }) => {
  const handleButtonPress = () => {
    buttonPressTimer = setTimeout(onClick, 1500)
  }

  const handleButtonRelease = () => {
    clearTimeout(buttonPressTimer)
  }

  return (
    <div className='Quiz-wrapper'>
      <button
        className='Quiz-giveup-button'
        onMouseDown={handleButtonPress}
        onMouseUp={handleButtonRelease}
        onTouchStart={handleButtonPress}
        onTouchEnd={handleButtonRelease}
        disabled={isDisabled}
      >
        <b>Press and hold</b> for spoilers
      </button>
    </div>
  )
}

export default GiveUpButton
