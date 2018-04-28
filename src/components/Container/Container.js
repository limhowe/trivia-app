import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import styles from './styles'

const Container = ({children, style}) => (
  <View style={[styles.container, style]}>
    {children}
  </View>
)

Container.propTypes = {
  children: PropTypes.node.isRequired
}

export default Container
