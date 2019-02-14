const defaultLimit = 20

export const withQuery = (url, param) => {
  const { page = 1, limit = defaultLimit, ...rest } = param || {}
  const query = Object.keys(rest)
    .filter(key => rest[key] || false)
    .map(key => `&${key}=${rest[key]}`)
    .join('')
  const _url = `${url}?page=${page}&limit=${limit}${query}`

  return _url
}
