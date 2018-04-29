import { observable, computed } from 'mobx'
import { Alert } from 'react-native'
import QuizService from '../services/QuizService'

export default class QuizStore {
  @observable quizList = []
  @observable currentQuizIndex = 0

  @computed get isLastQuiz () {
    return (this.quizList.length - 1) === this.currentQuizIndex
  }

  @computed get correctCount () {
    return this.quizList.reduce((sum, quiz) => sum + (quiz.correct_answer = quiz.mark ? 1 : 0))
  }

  @computed get currentQuiz () {
    return this.quizList[this.currentQuizIndex]
  }

  loadNext () {
    if (this.currentQuizIndex >= this.quizList.length) return -1
    else return ++this.currentQuizIndex
  }

  async getList () {
    try {
      const response = await QuizService.list({
        amount: 10,
        difficulty: 'hard',
        type: 'boolean'
      })
      this.quizList = response.results.map((item) => ({
        mark: false,
        ...item
      }))
    } catch (e) {
      console.log(e) //eslint-disable-line
      Alert.alert('Connection error', 'Couldn\'t fetch the data.')
    }
  }
}
