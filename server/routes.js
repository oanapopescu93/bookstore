var express = require("express")
var bodyParser = require('body-parser')
var path = require("path")
var router = express.Router()

var products = require('./var/home').PRODUCTS
var headerList = require('./var/home').HEADERLIST
var finance = require('./var/home').FINANCES
var contact = require('./var/home').CONTACT
const { sendEmail } = require("./utils/mail")
const { get_exchangerate, filterRates } = require("./utils/other")

var jsonParser = bodyParser.json() 
router.use(express.static(path.resolve(__dirname, '../client/build')))

router.post("/api/home", jsonParser, (req, res, next) => {  
  let payload = {products, headerList, finance, contact}
  res.send(JSON.stringify(payload))
})
router.post("/api/contact", jsonParser, (req, res, next) => {
  sendEmail('contact', req.body).then((data)=>{
    try{
      res.send(data)
    }catch(e){
      console.log('[error]','contact--> ', e)
      res.send({send: "email_no_send"})
    }
  }) 
})
router.post("/api/exchange_rates", jsonParser, (req, res, next) => {
  get_exchangerate().then((e)=>{
    if(e && e.data && e.data.conversion_rates){ //base_code: 'USD'
      const allowedCurrencies = ['USD', 'EUR', 'GBP', 'CHF', 'RON']
      const filteredRates = filterRates(e.data.conversion_rates, allowedCurrencies)
      res.send({conversion_rates: filteredRates})
    } else {
      res.send({conversion_rates: {}})
    }
  })  
})

router.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))
})

module.exports = router