import {
  CREATE_CONTACT_FAIL,
  CREATE_CONTACT_LOADING,
  CREATE_CONTACT_SUCCESS,
} from '../../../constants/actionTypes'
import axios from '../../../helpers/axiosInstance'

export default form => dispatch => async onSuccess => {
  const requestPayload = {
    country_code: 'RU',
    first_name: form.firstName || '',
    last_name: form.lastName || '',
    phone_number: form.phoneNumber || '',
    contact_picture: form.contactPicture || null,
    is_favorite: form.isFavorite || false,
  }

  try {
    await dispatch({
      type: CREATE_CONTACT_LOADING,
    })

    const res = await axios.post('/contacts/', requestPayload)

    await dispatch({
      type: CREATE_CONTACT_SUCCESS,
      payload: res.data,
    })

    onSuccess(res.data.id)
  } catch (err) {
    console.log(`err`, err)
    dispatch({
      type: CREATE_CONTACT_FAIL,
      payload: err.response
        ? err.response.data
        : {
            error: 'Something went wrong when creating a contact! Try again.',
          },
    })
  }
}
