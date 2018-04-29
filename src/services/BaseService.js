import request from 'axios'
import config from '../config'

export default class BaseService {
  apiUrl (url) {
    return `${config.API_URL}${url}`
  }

  makeQueryString (params) {
    const resultArr = []
    Object.keys(params).forEach((key) => {
      resultArr.push(`${key}=${params[key]}`)
    })
    return resultArr.join('&')
  }

  _checkError (err) {
    // TODO: implement error handling intercepter based on error response
    const {
      response: {
        status // eslint-disable-line
      }
    } = err
  }

  _abort () {
    if (this.req) {
      this.req.abort()
      this.req = null
    }
  }

  _call (req, additionalParams = {}) {
    this.req = req
    return new Promise((resolve, reject) => {
      req.then((resp) => {
        this.req = null
        resolve(resp.data)
      }).catch((err) => {
        this._checkError(err)
        this.req = null
        reject(err && err.response && err.response.data ? err.response.data : err)
      })
    })
  }

  _get (url, ...args) {
    const req = request.get(this.apiUrl(url))
    return this._call(req, ...args)
  }

  _post (url, data, ...args) {
    const req = request.post(this.apiUrl(url))
    req.send(data)
    return this._call(req, ...args)
  }

  _put (url, data, ...args) {
    const req = request.put(this.apiUrl(url))
    req.send(data)
    return this._call(req, ...args)
  }

  _delete (url, ...args) {
    const req = request.delete(this.apiUrl(url))
    return this._call(req, ...args)
  }
}
