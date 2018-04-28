import React from 'react'
import Button from '../../components/Button'
import styles from './styles'

const QuizButton = (props) => {
  const {style, ...rest} = props
  return (
    <Button {...rest} style={[styles.quizButton, style]} />
  )
}

export default QuizButton
