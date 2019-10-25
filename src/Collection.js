export default class Collection {
  constructor (name, dpd) {
    this.name = name
    this.dpd = dpd
  }

  get (queryOrId) {
    return this.exec('get', this.name, queryOrId)
  }

  post (data) {
    return this.exec('post', this.name, null, data)
  }

  put (queryOrId, data) {
    return this.exec('put', this.name, queryOrId, data)
  }

  del (queryOrId) {
    return this.exec('delete', this.name, queryOrId)
  }

  exec (method, url, queryOrId, data) {
    if (!this.dpd.transport) {
      throw new Error('Http transport not provided')
    }

    if (queryOrId) {
      if (typeof queryOrId !== 'object') {
        url += `/${queryOrId}`
      } else {
        url += '?' + JSON.stringify(queryOrId).replace(/:true/g, ':1').replace(/:false/g, ':0')
      }
    }

    return this.dpd.transport.request({ method, url: `/${url}`, data })
  }

  on (event, callback) {
    this.dpd.on(`${this.name}:${event}`, callback)
    return this
  }

  once (event, callback) {
    this.dpd.once(`${this.name}:${event}`, callback)
    return this
  }

  off (event, callback) {
    this.dpd.off(`${this.name}:${event}`, callback)
    return this
  }

  emit (event, data) {
    this.dpd.emit(`${this.name}:${event}`, data)
    return this
  }
}
