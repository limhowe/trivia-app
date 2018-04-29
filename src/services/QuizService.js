import BaseService from './BaseService'

class QuizService extends BaseService {
  list (query) {
    return this._get(`?${this.makeQueryString(query)}`)
  }
}

export default new QuizService()
