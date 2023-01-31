const express = require('express')
const path = require("path")
const app = express()
const port = 3000


// const ifhamMiddleware =(req,res,next)=>{
//   console.log(req)
//   next()    //We write this "next()" beacuse we want that after the "ifhamMiddleware" next middleware should run.
// }


// app.use(ifhamMiddleware)


app.use(express.static(path.join(__dirname,"public")))
//The express.static() function is a built-in middleware function in Express. It serves static files and is based on serve-static.

app.get('/hello/:name', (req, res) => {
  res.send('Hello!'+ req.params.name)  //params property is an object that contains the properties 
                                      //which are mapped to the named route "parameters"
})

app.get('/about', (req, res) => {
  //res.send('This is about')
  // res.sendFile(path.join(__dirname, "index.html"))
  res.json({"harry":34})

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
