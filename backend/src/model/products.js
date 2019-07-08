const api = require('../service/apiMeli')
const mapItemsResponseViewModel = require('./itemsResponseViewModel')
const mapItemDetailsResponseViewModel = require('./itemDetailsResponseViewModel')

const getItem = id => {
  return api.get('/items', {
    params: {
      id
    }
  })
}
const getDescription = id => {
  return api.get(`/items/${id}/description`)
}

const getProductQuery = async queryParam => {
  try {
    const response = await api.get('/sites/MLA/search', {
      params: queryParam
    })
    return mapItemsResponseViewModel(response.data)
  } catch (error) {
    return { erro: error.message }
  }
}

const getProductById = async id => {
  try {
    const [itemResponse, descriptionResponse] = [
      await getItem(id),
      await getDescription(id)
    ]

    return mapItemDetailsResponseViewModel(itemResponse.data, descriptionResponse.data)
  } catch (error) {
    return { erro: error.message }
  }
}

module.exports = { getProductQuery, getProductById }
