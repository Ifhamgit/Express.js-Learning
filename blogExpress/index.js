const express = require('express')
var exphbs  = require('express-handlebars');
const path = require("path")
const app = express()
const port = 3000





app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');


app.use(express.static(path.join(__dirname,"static")))
//The express.static() function is a built-in middleware function in Express. It serves static files and is based on serve-static.

app.use('/', require(path.join(__dirname, "routes/blog.js")))

// app.get('/', (req, res) => {
//   res.sendFile()  //params property is an object that contains the properties 
//                                       //which are mapped to the named route "parameters"
// })

// app.get('/about', (req, res) => {
//   //res.send('This is about')
//   // res.sendFile(path.join(__dirname, "index.html"))
//   res.json({"harry":34})

// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
