import React, { useState, useEffect } from 'react'

import Score from './Score'
import github from '../Resources/github.png'

import './QuizFooter.css'

const QuizFooter = ({ score, max }) => {
  const [footerVisible, setVisible] = useState(true)

  const footerRef = React.createRef()

  const checkFooterVisibility = () => {
    if (footerRef.current == null) return
    const top = footerRef.current.getBoundingClientRect().top
    setVisible(top + 47 <= window.innerHeight)
  }

  const footerVisibilityListener = () => {
    checkFooterVisibility()
    window.onscroll = checkFooterVisibility
    return () => {
      window.onscroll = null
    }
  }

  useEffect(footerVisibilityListener)

  return (
    <div className='Quiz-footer' ref={footerRef}>
      <Score
        clazz='Quiz-score-fixed'
        score={score}
        max={max}
        fixed
        visible={footerVisible}
      />
      <Score score={score} max={max} />
      <div className='Quiz-footer-text'>
        <p>
          Source code available at
          {' '}
          <a href='https://www.github.com/terohuomo/vg-sfx-quiz'>Github</a>
          {' '}
          <img
            width={16}
            className='Quiz-footer-icon'
            src={github}
            alt='github icon'
          />
        </p>
      </div>
    </div>
  )
}

export default QuizFooter
