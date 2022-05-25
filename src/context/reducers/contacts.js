export default contacts = (state, { type, payload }) =>
  ({
    GET_CONTACTS: state,
  }[`${type}` ?? state])
