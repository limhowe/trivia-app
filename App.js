import React from 'react'
import { StackNavigator } from 'react-navigation'
import HomeScreen from './src/screens/Home'

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen
    }
  },
  {
    initialRouteName: 'Home'
  }
)

const App = () => (
  <RootStack />
)

export default App
