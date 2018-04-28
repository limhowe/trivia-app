import React from 'react'
import PropTypes from 'prop-types'
import { Text } from 'react-native'
import styles from './styles'

const CardTitle = ({children}) => (
  <Text style={styles.cardTitle}> {children} </Text>
)

CardTitle.propTypes = {
  children: PropTypes.node.isRequired
}

export default CardTitle
