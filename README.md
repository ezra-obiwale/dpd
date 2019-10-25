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

const server = dpd(httpTransport[, socketTransport])

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

### Http Usage

```javascript
const collection = server.col('collection-name')
```

The `collection` object has methods `get`, `post`, `put`, `del` and `exec`.

#### get

```javascript
collection.get({ $sort: { name: 1 } }) // get a list

collection.get('abcd1234') // get an item
```

#### post

```javascript
collection.post({ name: 'John Doe' }) // creates new item
```

#### put

```javascript
collection.put({ name: 'Jane Doe' }) // updates an item
```

#### del

```javascript
collection.del('abcd1234') // deletes an item

**Note**

The response is always the returned value of the `request` method of the http transport.

### Socket Usage

Methods include `on`, `once`, `off` and `emit`:

#### on

```javascript
server.on('create', (/*...*/) => {
  // do something
})
```

### once

```javascript
server.once('create', (/*...*/) => {
  // do something
})
```

### off

```javascript
server.off('create', (/*...*/) => {
  // do something
})
```

### emit

```javascript
server.emit('notify', { /*...*/ })
```

## Vue Usage

```javascript
import Vue from 'vue'
import { VueInstaller } from '@ezraobiwale/dpd'

Vue.use(VueInstaller, httpTransport [, socketTransport])
```

You can then access `dpd` as `this.$dpd`.