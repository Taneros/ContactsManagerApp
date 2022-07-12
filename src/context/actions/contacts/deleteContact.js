import {
  DELETE_CONTACT_FAIL,
  DELETE_CONTACT_LOADING,
  DELETE_CONTACT_SUCCESS,
} from '../../../constants/actionTypes'
import axios from '../../../helpers/axiosInstance'

export default id => dispatch => async onSuccess => {
  try {
    await dispatch({
      type: DELETE_CONTACT_LOADING,
    })

    await axios.delete(`/contacts/${id}`)

    await dispatch({
      type: DELETE_CONTACT_SUCCESS,
      payload: id,
    })

    onSuccess()
  } catch (err) {
    await dispatch({
      type: DELETE_CONTACT_FAIL,
      payload: err.response
        ? err.response.data
        : {
            error: 'Something went wrong when deleting a contact! Try again.',
          },
    })
  }
}
