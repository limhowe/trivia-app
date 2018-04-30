import React from 'react'
import { View, Text } from 'react-native'
import entities from 'entities'

const ResultsListItem = ({item, index}) => (
  <View>
    <Text>
      {index + 1}. {entities.decodeHTML(item.question)}
    </Text>
    <Text>
      You answered: {item.mark.toString()} | Correct answer: {item.correct_answer}
    </Text>
  </View>
)

export default ResultsListItem
