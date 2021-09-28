const fetch = require("node-fetch");

let finalSubtotal = 0;
let finalTotal = 0;

const findTotals = (orderItems, orderTax) => {
    let subtotal = 0;
    let taxableTotal = 0;
    orderItems.forEach((item) => {
        let orderPrice = item.price * .01;
        subtotal += orderPrice * item.quantity;
        if (item.taxable) {
            taxableTotal += orderPrice * item.quantity;
        }
    })
    
    finalSubtotal = subtotal.toFixed(2);
    const newTotal = (taxableTotal * orderTax) + subtotal; 
    console.log(taxableTotal)
    finalTotal = newTotal.toFixed(2);
}

async function fetchOrder() {
    const orderResponse = await fetch(`https://code-challenge-i2hz6ik37a-uc.a.run.app/orders/${process.argv[2]}`);
    const orderJson = await orderResponse.json();
    const taxResponse = await fetch(`https://code-challenge-i2hz6ik37a-uc.a.run.app/cities/${orderJson.zip_code}`);
    const taxJson = await taxResponse.json();
    const orderName = orderJson.id; 
    const orderCustomer = orderJson.shipping_name;
    const orderItems = orderJson.order_items;
    const orderTaxRate = taxJson.tax_rate * .01;
    const orderTaxes = (orderTaxRate * 10).toFixed(2);
    findTotals(orderItems, orderTaxRate);
    const orderSubtotal = finalSubtotal;
    const orderTotal = finalTotal;
    console.log('\n', 'Order:', orderName, '\n', 
                'Customer Name:', orderCustomer, '\n',
                'Subtotal:', orderSubtotal, '\n',
                'Taxes:', orderTaxes, '\n',
                'Total:', orderTotal);
}

fetchOrder();