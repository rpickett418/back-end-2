const express = require('express')
const cors = require('cors')
const ctrl = require('./controller.js')

const app = express()
// middlewares
app.use(express.json())
app.use(cors())

// House endpoints
app.get('/api/houses', ctrl.getHouses)
app.delete('/api/houses/:id', ctrl.deleteHouse)
app.post('/api/houses', ctrl.createHouse)
app.put('/api/houses/:id', ctrl.updateHouse)

app.listen(4004, () => console.log("GOTT EM"))