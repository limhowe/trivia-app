import React from 'react'
import { Container, HContainer } from '../../components/Container'
import { observer, inject } from 'mobx-react'
import QuizCard from '../../containers/QuizCard'
import QuizButton from '../../containers/QuizButton'
import styles from './styles'
import { H3 } from '../../components/Heading'

@inject('quizStore')
@observer
export default class Quiz extends React.Component {
  static navigationOptions = {
    title: 'Quiz'
  }

  componentDidMount () {
    this.props.quizStore.getList()
  }

  loadNext () {
    if (this.props.quizStore.isLastQuiz) {
      this.props.navigation.navigate('Result')
    } else {
      this.props.quizStore.loadNext()
    }
  }

  onTrue () {
    this.props.quizStore.currentQuiz.mark = true
    this.loadNext()
  }

  onFalse () {
    this.props.quizStore.currentQuiz.mark = false
    this.loadNext()
  }

  render () {
    return (
      <Container>
        { this.props.quizStore.quizList.length > 0 &&
          <QuizCard question={this.props.quizStore.currentQuiz.question} category={this.props.quizStore.currentQuiz.category}/>
        }
        { this.props.quizStore.quizList.length > 0 &&
          <H3>{this.props.quizStore.currentQuizIndex + 1 }/{this.props.quizStore.quizList.length }</H3>
        }
        <HContainer style={styles.quizButtons}>
          <QuizButton title="True" onPress={() => this.onTrue()} />
          <QuizButton title="False" onPress={() => this.onFalse()} />
        </HContainer>
      </Container>
    )
  }
}
