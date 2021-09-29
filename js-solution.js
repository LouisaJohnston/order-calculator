const fetch = require("node-fetch");

let subtotal = 0;
let taxes = 0;

const findTotals = (orderItems, orderTaxRate) => {
  let taxableTotal = 0;
  orderItems.forEach((item) => {
    let orderPrice = item.price * 0.01;
    subtotal += orderPrice * item.quantity;
    if (item.taxable) {
      taxableTotal += orderPrice * item.quantity;
      taxes = taxableTotal * orderTaxRate;
    }
  });
};

async function fetchOrder() {
  const orderResponse = await fetch(
    `https://code-challenge-i2hz6ik37a-uc.a.run.app/orders/${process.argv[2]}`
  );
  const orderJson = await orderResponse.json();
  const taxResponse = await fetch(
    `https://code-challenge-i2hz6ik37a-uc.a.run.app/cities/${orderJson.zip_code}`
  );
  const taxJson = await taxResponse.json();
  const orderName = orderJson.id;
  const orderCustomer = orderJson.shipping_name;
  const orderItems = orderJson.order_items;
  const orderTaxRate = taxJson.tax_rate * 0.01;
  findTotals(orderItems, orderTaxRate);
  const orderSubtotal = subtotal;
  const orderTaxes = taxes;
  const orderTotal = subtotal + orderTaxes;
  console.log(
    `\nOrder: ${orderName}\nCustomer Name: ${orderCustomer}\nSubtotal: ${orderSubtotal.toFixed(2)}\nTaxes: ${orderTaxes.toFixed(2)}\nTotal: ${orderTotal.toFixed(2)}`
  );
}

fetchOrder();
