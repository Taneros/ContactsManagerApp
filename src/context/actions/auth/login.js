import {
  LOGIN_LOADING,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
} from '../../../constants/actionTypes'
import axiosInstance from '../../../helpers/axiosInstance'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default ({ password, userName: username }) =>
  dispatch => {
    dispatch({
      type: LOGIN_LOADING,
    })

    axiosInstance
      .post('auth/login', {
        password,
        username,
      })
      .then(res => {
        console.log(
          'LOGIN SUCCESS! 🚀 ~ file: login.js ~ line 20 ~ res',
          res.data
        )

        AsyncStorage.setItem('token', res.data.token)
        AsyncStorage.setItem('user', JSON.stringify(res.data.user))

        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data,
        })
      })
      .catch(err => {
        console.log('LOGIN FAIL 🚀 ~ file: login.js ~ line 28 ~ err', err)

        dispatch({
          type: LOGIN_FAIL,
          payload: err.res
            ? err.res.data
            : {
                error: 'Something went wrong when trying to login! Try again.',
              },
        })
      })
  }
