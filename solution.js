const fetch = require("node-fetch");

let finalSubtotal = 0;
let finalTotal = 0;

const findTotals = (orderItems, orderTax) => {
    let subtotal = 0;
    let taxableTotal = 0;
    for (i = 0; i < orderItems.length; i++) {
        let order = orderItems[i];
        let orderPrice = order.price * .01;
        subtotal += orderPrice * order.quantity;
        if (order.taxable) {
            taxableTotal += orderPrice * order.quantity;
        }
    }
    finalSubtotal = subtotal.toFixed(2);
    const newTotal = (taxableTotal * orderTax) + taxableTotal; 
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
    const orderTax = taxJson.tax_rate * .01;
    const orderTaxes = (orderTax * 10).toFixed(2);
    findTotals(orderItems, orderTax);
    const orderSubtotal = finalSubtotal;
    const orderTotal = finalTotal;
    console.log('\n', 'Order:', orderName, '\n', 
                'Customer Name:', orderCustomer, '\n',
                'Subtotal:', orderSubtotal, '\n',
                'Taxes:', orderTaxes, '\n',
                'Total:', orderTotal);
}

fetchOrder();