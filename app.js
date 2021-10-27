require('dotenv').config()
const path = require('path')
var express = require('express'),
  app = express()

const PORT = process.env.PORT || 4000
const server = app.listen(PORT, () =>
  console.log(`digiscript listening on port ${PORT} !`)
)

process.environment =
  process.env.NODE_ENV === 'sandbox' ? 'dev' : process.env.NODE_ENV
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/public/views'))
app.use(express.static(__dirname + '/public'))
app.use(express.static(__dirname + '/'))

// /* At the top, with other redirect methods before other routes */
// if (process.environment != 'dev') {
//   app.get('*', function (req, res, next) {
//     if (req.headers['x-forwarded-proto'] != 'https')
//       res.redirect('https://www.thedigiscript.com' + req.url)
//     else next() /* Continue to other routes if we're not redirecting */
//   })
// }
app.get('/', function (req, res) {
  res.render('index')
})
