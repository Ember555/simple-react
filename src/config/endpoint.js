const host = process.env.HOST || window.location.hostname
const port = process.env.PORT || 8443
const _port = (port && `:${port}`) || ''
const path = process.env.PATH || ''

export const restUrl = (apiPath = '') =>
  `https://${host}${_port}${path}${apiPath}`
