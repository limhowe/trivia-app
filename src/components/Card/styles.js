import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 2,
    borderColor: '#ffffff',
    borderWidth: 1,
    shadowColor: 'rgba(0, 0, 0, 0.12)',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 2
    }
  },
  cardTitle: {
    position: 'absolute',
    top: 120,
    left: 26,
    backgroundColor: 'transparent',
    padding: 16,
    fontSize: 24,
    color: '#000000',
    fontWeight: 'bold'
  },
  cardContent: {
    padding: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.54)'
  }
})

export default styles
