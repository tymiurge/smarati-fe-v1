const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

export const loginUser = data => delay(10).then(
  () => {
    if (data.login === 'shrek@gmail.com') {
      return {
        status: 'Forbidden',
        code: 403,
        messages: [
          `Most likely the ${data.login} account has not been registered. Please register it and if it still does not work - contact our support`
        ],
        data: {
        }    
      }
    }
    return {
      status: 'ok',
      code: 200,
      messages: [],
      data: {
        confirmed: true,
        id: 12345
      }
    }
  }
)
