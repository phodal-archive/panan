import * as express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(3000, function() {
  console.log('Listening on port 3000...')
})

module.exports = app
