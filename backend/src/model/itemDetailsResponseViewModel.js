const mapItemDetailsResponseViewModel = async (item, description) => {
  const response = {}
  response.author = {
    name: process.env.AUTHOR_NAME,
    lastname: process.env.AUTHOR_LASTNAME
  }

  response.item = {
    id: item.id,
    title: item.title,
    price: {
      currency: item.currency_id,
      amount: item.price,
      decimals: item.base_price
    },
    picture: item.pictures && item.pictures[0].url,
    condition: item.condition,
    free_shipping: item.free_shipping,
    sold_quantity: item.sold_quantity,
    description: description.plain_text
  }
  return response
}

module.exports = mapItemDetailsResponseViewModel
