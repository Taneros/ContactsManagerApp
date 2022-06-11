import {
  LOGIN_LOADING,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
} from '../../../constants/actionTypes'
import axiosInstance from '../../../helpers/axiosInterceptor'

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
        console.log('LOGIN SUCCESS! 🚀 ~ file: login.js ~ line 20 ~ res', res)

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
            : { error: 'Something went wrong! Try again.' },
        })
      })
  }
