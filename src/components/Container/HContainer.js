import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import styles from './styles'

const HContainer = ({children, style}) => (
  <View style={[styles.hContainer, style]}>
    {children}
  </View>
)

HContainer.propTypes = {
  children: PropTypes.node.isRequired
}

export default HContainer
