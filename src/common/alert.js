import { notification } from 'antd'

export const alertSuccess = (message = 'message') => {
  const alertWidth = message.length * 10
  notification.success({
    message: 'Success',
    description: message,
    duration: 3,
    style: {
      width: message.length > 30 ? alertWidth : 300,
      marginLeft: message.length > 30 ? 390 - alertWidth : 390 - 300,
    },
  })
}

export const alertInfo = (message = 'message') => {
  notification.info({
    message: 'Info',
    description: message,
    duration: 0,
    style: {
      width: 300,
      marginLeft: 390 - 300,
    },
  })
}

export const alertError = (message = 'message') => {
  notification.error({
    message: 'Error',
    description: message,
    duration: 0,
    style: {
      width: 300,
      marginLeft: 390 - 300,
    },
  })
}
