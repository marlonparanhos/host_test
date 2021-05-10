import axios from 'axios'

export async function RequestPlans(requestedProducts) {
  const response = await axios.get('https://2891637c-8ab7-4a84-906b-a98465726f85.mock.pstmn.io/prices')
    .then((res) => {
      const products = res.data.shared.products

      const filtered = Object.keys(products)
        .filter(key => requestedProducts.includes(key))
        .reduce((obj, key) => {
          obj[key] = products[key]
          return obj
        }, {})

      return filtered
    })
    .catch((error) => error.response)
  return response
}
