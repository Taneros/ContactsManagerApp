import {
  CREATE_CONTACT_FAIL,
  CREATE_CONTACT_LOADING,
  CREATE_CONTACT_SUCCESS,
} from '../../../constants/actionTypes'
import axios from '../../../helpers/axiosInstance'

export default form => dispatch => onSuccess => {
  console.log(`about to send!`, form)

  const requestPayload = {
    country_code: 'RU',
    first_name: form.firstName || '',
    last_name: form.lastName || '',
    phone_number: form.phoneNumber || '',
    contact_picture: form.contactPicture || 'http://localhost',
    is_favorite: false,
  }

  dispatch({
    type: CREATE_CONTACT_LOADING,
  })

  axios
    .post('/contacts/', requestPayload)
    .then(res => {
      console.log(`res.data`, res.data)

      dispatch({
        type: CREATE_CONTACT_SUCCESS,
        payload: res.data,
      })

      onSuccess()
    })
    .catch(err => {
      console.log(`err`, err)
      dispatch({
        type: CREATE_CONTACT_FAIL,
        payload: err.response
          ? err.response.data
          : {
              error: 'Something went wrong when creating a contact! Try again.',
            },
      })
    })
}
