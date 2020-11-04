const express = require('express')
const bodyParser = require('body-parser');

const app = express()
const PORT = process.env.PORT || 3000
const HOST = '0.0.0.0';

const jsonParser = bodyParser.json()

app.post('/fizzbuzz', jsonParser, function (req, res) {
    const {count} = req.body;

    if (typeof count !=="number" || count<1) {
        res.send({error:`Invalid body ${JSON.stringify(req.body)}`,response:""})
    }else{
        try {

        let response = []

        for(let i = 1; i<count+1;i++){
          if(i%15==0){
            response.push("fizzbuzz")
          }
          else if(i%3==0){
            response.push("fizz")
          } else if(i%5==0){
            response.push("buzz")
          }else{
            response.push(i)
          }
        }
    
        res.send({response,error:""})
    
        console.log(`Recieved ${count}, returned ${response}`)
        } catch (error) {
          res.send({error,response})
        }
    }
  })

app.listen(PORT,HOST, () => {
  console.log(`Fizzbuzz listening at http://localhost:${PORT}`)
})
