import Dpd from './Dpd'

export default (transport, socketIO) => {
  return new Dpd(transport, socketIO)
}
