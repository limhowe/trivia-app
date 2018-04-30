import React from 'react'
import { View, Text } from 'react-native'
import entities from 'entities'
import { Icon } from 'react-native-elements'

const ResultsListItem = ({item, index}) => (
  <View>
    { item.mark === (item.correct_answer === 'True') ? (
      <Icon name='done' />
    ) : (
      <Icon name='clear' />
    )}
    <Text>
      {entities.decodeHTML(item.question)}
    </Text>
    <Text>
      You answered: {item.mark.toString()} | Correct answer: {item.correct_answer}
    </Text>
  </View>
)

export default ResultsListItem
