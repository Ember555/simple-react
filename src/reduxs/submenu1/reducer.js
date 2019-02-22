const initialState = {
  results: [],
  pagination: {
    limit: 20,
    page: 1,
  },
  filter: {
    input: '',
  },
  tablePage: 1,
  searching: false,
  viewing: false,
}

export default (state = initialState, { type, data = {} }) => {
  if (type.startsWith('sub1/')) {
    const newState = Object.assign({}, state, data)
    console.log('>>>>>>>>>>>>>>>>>>>>>> newState', newState)

    return newState
  }

  return state
}
