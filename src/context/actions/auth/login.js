import {
  LOGIN_LOADING,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
} from '../../../constants/actionTypes'
import axios from '../../../helpers/axiosInstance'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default ({ password, userName: username }) =>
  dispatch => {
    dispatch({
      type: LOGIN_LOADING,
    })
    //TODO: rewrite async await
    axios
      .post('auth/login', {
        password,
        username,
      })
      .then(res => {
        AsyncStorage.setItem('token', res.data.token)
        AsyncStorage.setItem('user', JSON.stringify(res.data.user))

        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data,
        })
      })
      .catch(err => {
        dispatch({
          type: LOGIN_FAIL,
          payload: err.response
            ? err.response.data
            : {
                error: 'Something went wrong when trying to login! Try again.',
              },
        })
      })
  }
