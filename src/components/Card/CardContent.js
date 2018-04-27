import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import styles from './styles'

const CardContent = ({children}) => (
  <View style={styles.cardContent}>
    {children}
  </View>
)

CardContent.propTypes = {
  title: PropTypes.node.isRequired
}

export default CardContent
