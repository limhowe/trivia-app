import React from 'react'
import { Text } from 'react-native'
import { Container } from '../components/Container'
import { Card, CardContent } from '../components/Card'
import { H1 } from '../components/Heading'

export default class Home extends React.Component {
  render () {
    return (
      <Container>
        <H1>Welcome to the Trivia Challenge!</H1>
        <Card>
          <CardContent>
            <Text>You will be presented with 10 True or False questions.</Text>
            <Text>Can you score 100%?</Text>
          </CardContent>
        </Card>
      </Container>
    )
  }
}
