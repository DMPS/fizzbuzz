const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const HOST = '0.0.0.0';

app.get('/', function (req, res) {
    const {value} = req.query;
    
    let result = ""

    if(value%3==0) result+="fizz"
    if(value%5==0) result+="buzz"

    result = result == "" ? value : result

    res.send({result})

    console.log(`Recieved ${value}, returned ${result}`)
  })

app.listen(port,HOST, () => {
  console.log(`Fizzbuzz listening at http://localhost:${port}`)
})
