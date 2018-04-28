import React from 'react'
import PropTypes from 'prop-types'
import { Text } from 'react-native'
import styles from './styles'

const H3 = ({children}) => (
  <Text style={styles.H3}>{children}</Text>
)

H3.propTypes = {
  children: PropTypes.node.isRequired
}

export default H3
