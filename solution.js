const fetch = require("node-fetch");

const findSubtotal = orderItems => {
    let newTotal = 0
    for (i = 0; i < orderItems.length; i++) {
        let newPrice = orderItems[i].price * .01
        newTotal += newPrice.toFixed(2) * orderItems[i].quantity
    }
    return newTotal.toFixed(2)
}

const findTotal = (orderItems, orderTax) => {
    let taxableTotal = 0
    for (i = 0; i < orderItems.length; i++) {
        let newPrice = orderItems[i].price * .01
        if (orderItems[i].taxable === 1) {
            taxableTotal += newPrice.toFixed(2) * orderItems[i].quantity
        }
    }
    const newTotal = (taxableTotal * orderTax) + taxableTotal 
    return newTotal.toFixed(2)
}

async function fetchOrder() {
    const orderResponse = await fetch(`https://code-challenge-i2hz6ik37a-uc.a.run.app/orders/sfg47`)
    const orderJson = await orderResponse.json()
    const taxResponse = await fetch(`https://code-challenge-i2hz6ik37a-uc.a.run.app/cities/${orderJson.zip_code}`)
    const taxJson = await taxResponse.json()
    let orderName = orderJson.id 
    let orderCustomer = orderJson.shipping_name
    let orderItems = orderJson.order_items
    let orderSubtotal = findSubtotal(orderItems)
    let orderTax = taxJson.tax_rate * .01
    let orderTotal = findTotal(orderItems, orderTax)
    
    console.log(orderTotal)
}

fetchOrder()