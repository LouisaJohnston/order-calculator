const fetch = require("node-fetch");

let finalSubtotal = 0;
let finalTotal = 0;

const findTotals = (orderItems, orderTax) => {
    let subtotal = 0;
    let taxableTotal = 0;
    for (i = 0; i < orderItems.length; i++) {
        let newPrice = orderItems[i].price * .01;
        subtotal += newPrice * orderItems[i].quantity;
        if (orderItems[i].taxable === true) {
            taxableTotal += newPrice * orderItems[i].quantity;
        }
    }
    finalSubtotal = subtotal.toFixed(2);
    const newTotal = (taxableTotal * orderTax) + taxableTotal; 
    finalTotal = newTotal.toFixed(2);
}

async function fetchOrder() {
    const orderResponse = await fetch(`https://code-challenge-i2hz6ik37a-uc.a.run.app/orders/sfg47`);
    const orderJson = await orderResponse.json();
    const taxResponse = await fetch(`https://code-challenge-i2hz6ik37a-uc.a.run.app/cities/${orderJson.zip_code}`);
    const taxJson = await taxResponse.json();
    let orderName = orderJson.id; 
    let orderCustomer = orderJson.shipping_name;
    let orderItems = orderJson.order_items;
    let orderTax = taxJson.tax_rate * .01;
    findTotals(orderItems, orderTax);
    let orderSubtotal = finalSubtotal;
    let orderTotal = finalTotal;
}

fetchOrder()