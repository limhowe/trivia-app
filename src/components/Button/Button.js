import React from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, Text } from 'react-native'
import styles from './styles'

const Button = ({onPress, title, disabled, style}) => (
  <TouchableOpacity disabled={disabled || false} onPress={onPress} style={[styles.button, style]}>
    <Text style={styles.buttonTitle}>{title}</Text>
  </TouchableOpacity>
)

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  disabled: PropTypes.bool
}

export default Button
