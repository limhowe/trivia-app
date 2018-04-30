import { observable, computed, toJS } from 'mobx'
import { Alert } from 'react-native'
import QuizService from '../services/QuizService'

export default class QuizStore {
  @observable quizList = []
  @observable currentQuizIndex = 0

  @computed get isLastQuiz () {
    return (this.quizList.length - 1) === this.currentQuizIndex
  }

  @computed get correctCount () {
    return this.quizList.reduce((sum, quiz) => sum + (quiz.mark === (quiz.correct_answer === 'True') ? 1 : 0), 0)
  }

  @computed get currentQuiz () {
    return this.quizList[this.currentQuizIndex]
  }

  listAsArray () {
    return toJS(this.quizList)
  }

  reset () {
    this.currentQuizIndex = 0
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
      this.quizList = response.results.map((item, index) => ({
        mark: false,
        id: index,
        ...item
      }))
    } catch (e) {
      console.log(e) //eslint-disable-line
      Alert.alert('Connection error', 'Couldn\'t fetch the data.')
    }
  }
}
