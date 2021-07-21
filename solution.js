const fetch = require("node-fetch");

const findSubtotal = orderItems => {
    let newTotal = 0
    for (i = 0; i < orderItems.length; i++) {
        newTotal += orderItems[i].price
    }
    return newTotal
}

async function fetchOrder() {
    const orderResponse = await fetch(`https://code-challenge-i2hz6ik37a-uc.a.run.app/orders/sfg34`)
    const orderJson = await orderResponse.json()
    const taxResponse = await fetch(`https://code-challenge-i2hz6ik37a-uc.a.run.app/cities/${orderJson.zip_code}`)
    const taxJson = await taxResponse.json()
    let orderName = orderJson.id 
    let orderCustomer = orderJson.shipping_name
    let orderItems = orderJson.order_items
    let orderSubtotal = findSubtotal(orderItems)
    let orderTax = taxJson.tax_rate
    
    console.log(orderTax)
}

fetchOrder()