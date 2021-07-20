const fetch = require("node-fetch");

const getOrders = () => {
    try {
        fetch('https://code-challenge-i2hz6ik37a-uc.a.run.app/orders')
        .then((response) => response.json())
        .then((data) => {
            const orders = Object.values(data)
            console.log(orders)
        })
    }
    catch (err) {
        console.log(err)
    }
}

getOrders()