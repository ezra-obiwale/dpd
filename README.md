# dpd
A Deployd frontend library

## Installation

```bash
npm i @ezraobiwale/dpd
```

or

```bash
yarn add @ezraobiwale/dpd
```

## Usage

This library allows you to decide which http and socket transports to use.

```javascript
import dpd from '@ezraobiwale/dpd'

dpd(httpTransport[, socketTransport])

```

**Important Note**

The `httpTransport` must have a `request` method that takes a single object parameter:

```javascript
request({
  method, // get | post | put | delete
  url, // the request url
  data // An object representing the data being sent
})
```

### Recommended Transports

### Http

- [Http](https://github.com/ezraobiwale/http)
- [Axios](https://github.com/axios/axios)

### Socket

- [SocketIO](https://github.com/socketio/socket.io)
