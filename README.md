# Order-Calculator
Use CLI arguments to fetch the order ID, customer name, order subtotal, local tax rates, and order total for any order in this third-party API: https://code-challenge-i2hz6ik37a-uc.a.run.app/docs. Solutions are provided using either Python or JavaScript.  


## Python Instructions
To run, pip install requests by entering the following into your terminal:
```
pip install requests
```

Then, navigate to pythonSolution.py in the project directory and run the code. In the terminal, you will be prompted with the following:
```
Please enter an order id:
```

In your terminal, enter an order id (example ids: sfg47, sfg34, or dub49).

After hitting 'enter', the order details should be displayed like this:
```
Please enter an order id:
sfg47

 Order: sfg47
 Customer Name: Johnny Cueto
 Subtotal: 9.98
 Taxes: 0.72
 Total: 10.70
```  

## JavaScript Instructions

To run, npm install node-fetch by entering the following into your terminal:
```
npm i node-fetch
```

Then, enter the following into your terminal with the placeholder text updated to reflect the desired order id (example ids: sfg47, sfg34, or dub49): 
```
node js-solution.js PLACEHOLDER
```

In your terminal, the order details should be displayed like this:
```
Order: sfg47 
Customer Name: Johnny Cueto 
Subtotal: 9.98 
Taxes: 0.72 
Total: 10.70
```

