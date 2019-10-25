import Collection from './Collection'

export default class Dpd {
  constructor (transport, socket) {
    this.setTransport(transport)
    this.setSocket(socket)
  }

  col (name) {
    return new Collection(name, this)
  }

  on (event, callback) {
    if (!this.socket) {
      throw new Error('Socket not provided')
    }
    this.socket.on(event, callback)
    return this
  }

  once (event, callback) {
    if (!this.socket) {
      throw new Error('Socket not provided')
    }
    this.socket.once(event, callback)
    return this
  }

  off (event, callback) {
    if (!this.socket) {
      throw new Error('Socket not provided')
    }
    this.socket.off(event, callback)
    return this
  }

  emit (event, data) {
    if (!this.socket) {
      throw new Error('Socket not provided')
    }
    this.socket.emit(event, data)
    return this
  }

  setSocket (socket) {
    this.socket = socket
    return this
  }

  setTransport (transport) {
    if (transport && transport.setHeaders) {
      transport.setHeaders({
        'Content-Type': 'application/json'
      })
    }
    this.transport = transport
    return this
  }
}
