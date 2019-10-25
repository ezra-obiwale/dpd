import Dpd from './Dpd'

export default (transport, socketIO) => {
  return new Dpd(transport, socketIO)
}

export const VueInstaller = {
  install(Vue, transport, socketIO) {
    Vue.prototype.$dpd = new Dpd(transport, socketIO)
  }
}
