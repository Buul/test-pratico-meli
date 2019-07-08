const mapItemsResponseViewModel = async entitie => {
  const response = {}
  response.author = {
    name: process.env.AUTHOR_NAME,
    lastname: process.env.AUTHOR_LASTNAME
  }
  response.categories = []
  response.items = []

  const categoriesList = entitie.available_filters.filter(
    filter => filter.id === 'category'
  )

  if (categoriesList.length > 0) {
    categoriesList[0].values.forEach(category => {
      response.categories.push(category.name)
    })
  }
  entitie.results.forEach(item => {
    response.items.push({
      id: item.id,
      title: item.title,
      price: {
        currency: item.installments.currency_id,
        amount: item.installments.amount,
        decimals: item.installments.rate
      },
      picture: item.thumbnail,
      condition: item.condition,
      free_shipping: item.shipping.free_shipping
    })
  })
  return response
}

module.exports = mapItemsResponseViewModel
