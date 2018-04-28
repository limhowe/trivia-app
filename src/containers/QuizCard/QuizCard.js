import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardContent, CardTitle } from '../../components/Card'
import { H2 } from '../../components/Heading'

const QuizCard = ({question, category}) => (
  <Card>
    <CardTitle>{category}e</CardTitle>
    <CardContent>
      <H2>{question}</H2>
    </CardContent>
  </Card>
)

QuizCard.propTypes = {
  question: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired
}

export default QuizCard
