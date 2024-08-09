const express = require("express")
const app = express()
const bodyParser = require('body-parser')

var http = require('http').createServer(app)
var io = require('socket.io')(http)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false })) 

const dotenv = require('dotenv')
const path = require('path')
var NODE_ENV = process.env.NODE_ENV.trim() 
dotenv.config({
  path: path.resolve(__dirname, `.env.${NODE_ENV}`)
})

const PORT = process.env.PORT || 1111

var routes = require("./routes")
app.use(routes)
var stripePayment = require("./payments/stripePayment")
app.use(stripePayment)

io.on('connection', function(socket) {
  socket.on('order_send', function(details){
      try{		
        io.to(socket.id).emit('order_read', details)
      }catch(e){
        console.log('[error]','order_read--> ', e)
      }
  })

  socket.on('heartbeat', function(data) {
		console.log('heartbeat', data)
	})
  socket.on('disconnect', function() {  
    console.log('Got disconnect!')
  })
})

http.listen(PORT, () => {console.log(`Server listening on ${PORT}`)})