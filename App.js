import React from 'react'
import { StackNavigator } from 'react-navigation'
import HomeScreen from './src/screens/Home'
import QuizScreen from './src/screens/Quiz'

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Quiz: {
      screen: QuizScreen
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
