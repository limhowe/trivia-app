import React from 'react'
import { Container } from '../../components/Container'
import { Card, CardContent } from '../../components/Card'
import Button from '../../components/Button'
import { H1, H2, H3 } from '../../components/Heading'

export default class Home extends React.Component {
  static navigationOptions = {
    title: 'Home'
  }

  onBegin () {
    this.props.navigation.navigate('Quiz')
  }

  render () {
    return (
      <Container>
        <H1>Welcome to the Trivia Challenge!</H1>
        <Card>
          <CardContent>
            <H2>You will be presented with 10 True or False questions.</H2>
            <H3>Can you score 100%?</H3>
          </CardContent>
        </Card>
        <Button title="BEGIN" onPress={() => this.onBegin()} ></Button>
      </Container>
    )
  }
}
