import React from 'react'
import PropTypes from 'prop-types'
import { Text } from 'react-native'
import styles from './styles'

const H2 = ({children}) => (
  <Text style={styles.H2}>{children}</Text>
)

H2.propTypes = {
  children: PropTypes.node.isRequired
}

export default H2
