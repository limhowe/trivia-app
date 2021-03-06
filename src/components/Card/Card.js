import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import styles from './styles'

const Card = ({children, style}) => (
  <View style={[styles.card, style]}>
    {children}
  </View>
)

Card.propTypes = {
  children: PropTypes.node.isRequired
}

export default Card
