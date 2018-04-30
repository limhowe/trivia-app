import React from 'react'
import PropTypes from 'prop-types'
import { View, FlatList } from 'react-native'
import { Card, CardContent } from '../../components/Card'
import ResultsListItem from './ResultListItem'
import styles from './styles'

const Separator = () => <View style={styles.separator} />

const ResultCard = ({data}) => (
  <Card style={styles.resultsCard}>
    <CardContent>
      <FlatList
        style={styles.resultsList}
        data={data}
        renderItem={ResultsListItem}
        keyExtractor={(item) => ('result_' + item.id)}
        ItemSeparatorComponent={Separator} />
    </CardContent>
  </Card>
)

ResultCard.propTypes = {
  data: PropTypes.array.isRequired
}

export default ResultCard
