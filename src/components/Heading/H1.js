import React from 'react'
import PropTypes from 'prop-types'
import { Text } from 'react-native'
import styles from './styles'

const H1 = ({children}) => (
  <Text style={styles.H1}>{children}</Text>
)

H1.propTypes = {
  children: PropTypes.node.isRequired
}

export default H1
