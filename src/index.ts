import getProduct from './scrapers'
import express from 'express'

// rest of the code remains same
const app = express();
const PORT = process.env.PORT || 8000;


app.get('/', async (req, res) => {
  try{
    const product = await getProduct(req.query.barcode.toString())
    res.send(product)
  }catch (e) {
    console.log(e)
    // if there is an error just return nothing
    res.send()
  }
})

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running PORT:${PORT}`)
});
