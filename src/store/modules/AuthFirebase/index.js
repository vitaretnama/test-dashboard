import { authInitState } from './states'
import {
  beginSignIn,
  successSignIn,
  failSignIn,
} from './mutations'
import {
  signInAction,
} from './actions'

export const authentication = {
  state: () => authInitState,
  mutations: {
    beginSignIn,
    successSignIn,
    failSignIn,
  },
  actions: {
    signInAction,
  },
}
