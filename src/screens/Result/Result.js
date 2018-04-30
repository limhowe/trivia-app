import React from 'react'
import { observer, inject } from 'mobx-react'
import { Container } from '../../components/Container'
import ResultCard from '../../containers/ResultCard'
import Button from '../../components/Button'
import { H1, H2 } from '../../components/Heading'

@inject('quizStore')
@observer
export default class Result extends React.Component {
  static navigationOptions = {
    title: 'Result'
  }

  onRetry () {
    this.props.quizStore.reset()
    this.props.navigation.navigate('Quiz')
  }

  render () {
    return (
      <Container>
        <H1>You Scored</H1>
        <H2>{this.props.quizStore.correctCount}/{this.props.quizStore.quizList.length}</H2>
        <ResultCard data={this.props.quizStore.listAsArray()} />
        <Button title="RETRY" onPress={() => this.onRetry()} ></Button>
      </Container>
    )
  }
}
