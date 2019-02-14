export const valid = () => {
  const _token = getToken()
  return _token !== undefined && _token !== null
}

export const getToken = () => sessionStorage.getItem('token')
