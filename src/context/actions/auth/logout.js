import { LOGOUT } from '../../../constants/actionTypes'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default () => async dispatch => {
  try {
    await AsyncStorage.removeItem('user')
    await AsyncStorage.removeItem('token')
    await dispatch({
      type: LOGOUT,
    })
  } catch (error) {
    console.log('LOGOUT ERROR', error)
  }
}
