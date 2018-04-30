import React from 'react'
import { Provider } from 'mobx-react'
import { StackNavigator } from 'react-navigation'
import HomeScreen from './src/screens/Home'
import QuizScreen from './src/screens/Quiz'
import ResultScreen from './src/screens/Result'
import stores from './src/stores'

const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Quiz: {
      screen: QuizScreen
    },
    Result: {
      screen: ResultScreen
    }
  },
  {
    initialRouteName: 'Home'
  }
)

const App = () => (
  <Provider {...stores}>
    <RootStack />
  </Provider>
)

export default App
