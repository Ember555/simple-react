export default (state = {}, { type, data }) => ({
  ...state,
  ...data,
  type,
})
