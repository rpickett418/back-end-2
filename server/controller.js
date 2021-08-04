const houses = require('./db.json')
let id = 4

module.exports = {
    getHouses: (req, res) => {
        res.status(200).send(houses)
    },
    deleteHouse: (req, res) => {
        console.log(req.params)
        const index = houses.findIndex((houses) => {
            return houses.id === ++id
        })
        houses.splice(index, 1)
        res.status(200).send(houses)
    },
    createHouse: (req, res)  => {
        const {address, price, imageURL} = req.body
        const newHouse = {
            address: address,
            price: +price,
            imageURL: imageURL,
            id: id,    
        }
        //Increasing the id by 1 so a new house has a unique id value.  
        // id++
        id = id +1
        houses.push(newHouse)
        res.status(200).send(houses)
    },
    
    updateHouse: (req, res) => {
        const {id} = req.params
        const {type} = req.body
        const index = houses.findIndex((house) => {
            return house.id === +id
        })
            // houses[index].price array of house object ''[]'' 
        if(houses[index].price < 10000 && type === 'minus') {
            houses[index].price = 0 
            res.status(200).send(houses)
        } else if  (type === 'plus') {
            houses[index].price += 10000
            res.status(200).send(houses)
        } else if (type === 'minus') {
            houses[index].price -= 10000
            res.status(200).send(houses) 
        } else {
            res.status(400).send('No way')
        }
        console.log(houses)
  
    }

}
