const axios = require('axios')

// import 'babel-polyfill'

const api = axios.create({
  baseURL: 'https://api.mercadolibre.com/'
})

api.interceptors.request.use(async config => {
  return config
})

module.exports = api
