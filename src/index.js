const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const PORT = process.env.PORT || 3000
const HOST = '0.0.0.0';

const jsonParser = bodyParser.json()

app.post('/fizzbuzz', jsonParser, function (req, res) {
    const {count} = req.body;

    if (typeof count !=="number") {
        res.send({error:`Invalid response ${count}`,response:""})
    }else{
        let response = ""

        if(count%3==0) response+="fizz"
        if(count%5==0) response+="buzz"
    
        response = response == "" ? count : response
    
        res.send({response,error:""})
    
        console.log(`Recieved ${count}, returned ${response}`)
    }
  })

app.listen(PORT,HOST, () => {
  console.log(`Fizzbuzz listening at http://localhost:${PORT}`)
})
