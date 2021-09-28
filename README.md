# Order-Calculator

A JavaScript project using CLI arguments to fetch the order ID, customer name, order subtotal, taxes related to the customer shipping address, and order total for any order in this third-party API: https://code-challenge-i2hz6ik37a-uc.a.run.app/docs

To run, npm install the node-fetch dependency by entering the following into your terminal:
```
npm i node-fetch
```

Then, enter the following into your terminal with the placeholder text updated to reflect the desired order id (example ids: sfg47, sfg34, or dub49): 
```
node solution.js PLACEHOLDER
```

In your terminal, the order details should be displayed like this:
```
Order: sfg47 
Customer Name: Johnny Cueto 
Subtotal: 9.98 
Taxes: 0.72 
Total: 10.70
```

