import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import styles from './styles'

const CardContent = ({children, style}) => (
  <View style={[styles.cardContent, style]}>
    {children}
  </View>
)

CardContent.propTypes = {
  children: PropTypes.node.isRequired
}

export default CardContent
