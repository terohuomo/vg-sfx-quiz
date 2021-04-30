import React from 'react'

import './Score.css'

const getStyle = (score, max) => {
  const scorePercentInteger = Math.round(score / max * 100);

  switch (true) {
    case scorePercentInteger > 99:
      return 'fantastic'
    case scorePercentInteger > 75:
      return 'excellent'
    case scorePercentInteger > 50:
      return 'great'
    case scorePercentInteger > 25:
      return 'decent'
    case scorePercentInteger > 15:
      return 'way-off'
    default:
      return 'miss'
  }
}

const Score = ({ score, max, visible, fixed }) => (
  <div
    className={`Quiz-score-wrapper ${
      fixed ? 'Quiz-score-wrapper--fixed' : ''
    } ${visible ? 'Quiz-score-wrapper--hidden' : ''}`}
  >
    Score:
    <span className={`Quiz-score Quiz-score--${getStyle(score, max)}`}>
      {score}
    </span>{' '}
    / {max}
  </div>
)

export default Score
