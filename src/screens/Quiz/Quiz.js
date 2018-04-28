import React from 'react'
import { Container, HContainer } from '../../components/Container'
import QuizCard from '../../containers/QuizCard'
import QuizButton from '../../containers/QuizButton'
import styles from './styles'

export default class Quiz extends React.Component {
  static navigationOptions = {
    title: 'Quiz'
  }

  onTrue () {

  }

  onFalse () {

  }

  render () {
    return (
      <Container>
        <QuizCard question="Quiz1" category="This is Entertaining Game"/>
        <HContainer style={styles.quizButtons}>
          <QuizButton title="True" onPress={() => this.onTrue()} />
          <QuizButton title="False" onPress={() => this.onFalse()} />
        </HContainer>
      </Container>
    )
  }
}
