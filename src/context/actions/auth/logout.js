import { LOGOUT } from '../../../constants/actionTypes'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default () => async dispatch => {
  console.log(`logout dispatch working`)

  try {
    await AsyncStorage.removeItem('user')
    await AsyncStorage.removeItem('token')
    dispatch({
      type: LOGOUT,
    })
  } catch (error) {
    console.log('LOGOUT ERROR', error)
  }
}
