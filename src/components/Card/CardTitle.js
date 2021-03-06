import React from 'react'
import PropTypes from 'prop-types'
import { Text } from 'react-native'
import styles from './styles'

const CardTitle = ({children, style}) => (
  <Text style={[styles.cardTitle, style]}> {children} </Text>
)

CardTitle.propTypes = {
  children: PropTypes.node.isRequired
}

export default CardTitle
