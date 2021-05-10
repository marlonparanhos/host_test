const { RequestPlans } = require('./productsRequest')

describe('UserData test', () => {
  const requestedProducts = ['product_5', 'product_6', 'product_335']

  it('Should consult the API for pricing and plan names', async (done) => {
    const response = await RequestPlans(requestedProducts)
    done()
    expect(response.constructor.name === 'Object' && response !== null).toBe(true)
  })

  it('Should match the default following pattern', async (done) => {
    let plansTemplate = {}
    requestedProducts.forEach((key) => {
      plansTemplate = {
        ...plansTemplate,
        [key]: {
          name: expect.any(String),
          id: expect.any(Number),
          cycle: {
            monthly: {
              priceRenew: expect.any(String),
              priceOrder: expect.any(String),
              months: expect.any(Number)
            },
            triennially: {
              priceRenew: expect.any(String),
              priceOrder: expect.any(String),
              months: expect.any(Number)
            },
            annually: {
              priceRenew: expect.any(String),
              priceOrder: expect.any(String),
              months: expect.any(Number)
            }
          }
        }
      }
    })

    const response = await RequestPlans(requestedProducts).then(res => {
      const filtered = Object.keys(res)
        .filter(key => requestedProducts.includes(key))
        .reduce((obj, key) => {
          obj[key] = res[key]
          return obj
        }, {})

      return filtered
    })
    done()

    expect(response).toMatchObject(plansTemplate)
  })
})
