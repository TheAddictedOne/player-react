import express from 'express'

const app = express()
const port = 8080

app.use(express.static('partner'))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
