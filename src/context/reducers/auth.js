export default auth = (state, { type, payload }) =>
  ({
    LOGIN: state,
  }[`${type}` ?? state])
