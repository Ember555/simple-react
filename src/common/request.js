import { getToken } from '../common/token'

export const getOptions = (url, responseType = 'json') => ({
  url,
  method: 'GET',
  headers: {
    access_token: getToken(),
    'Content-Type': 'application/json',
  },
  responseType,
  crossDomain: true,
  withCredentials: false,
})

export const postOptions = (url, body = {}) => ({
  url,
  method: 'POST',
  headers: {
    access_token: getToken(),
    'Content-Type': 'application/json',
  },
  body,
  crossDomain: true,
  withCredentials: false,
})
