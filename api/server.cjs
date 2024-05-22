const express = require('express')
const cors = require('cors')
const stripe = require('stripe')(
  'pk_test_51PIpED01HTEsX8gXhs9HBmHQl16bAZYyvArNfoLvILs5DO7IoIC6uqG7uqiHMkjCwu5EZF5VYu9JSvkBJoALW0kw00qNCZMn76'
)

const app = express()

app.use(cors())
app.use(express.json())

app.post('/create-checkout-session', async (req, res) => {
  const { items } = req.body

  const line_items = items.map((item) => ({
    price_data: {
      currency: 'usd',
      product_data: {
        name: item.name,
        images: [item.image]
      },
      unit_amount: item.price * 100 // Convert to cents
    },
    quantity: item.quantity
  }))

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items,
    mode: 'payment',
    success_url: 'http://localhost:5173/success',
    cancel_url: 'http://localhost:5173/service'
  })

  res.json({ id: session.id })
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
