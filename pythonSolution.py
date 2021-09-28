import requests

subtotal = 0
total = 0

def find_order_totals(order_items, order_tax_rate):
    for item in order_items:
        global subtotal
        global total
        taxable_total = 0
        order_price = item['price'] * .01
        raw_subtotal = subtotal + order_price * item['quantity']
        subtotal = round(raw_subtotal, 2)
        if item['taxable']:
            taxable_total += order_price * item['quantity']
        raw_total = (taxable_total * order_tax_rate) + taxable_total
        total = round(raw_total, 2)

def get_order():
    global subtotal
    global total
    order_id = input('Please enter an order id:\n')
    order_response = requests.get(f'https://code-challenge-i2hz6ik37a-uc.a.run.app/orders/{order_id}')
    order_json = order_response.json()
    order_zip = order_json['zip_code']
    tax_response = requests.get(f'https://code-challenge-i2hz6ik37a-uc.a.run.app/cities/{order_zip}')
    tax_json = tax_response.json()
    order_name = order_json['id']
    order_customer = order_json['shipping_name']
    order_items = order_json['order_items']
    order_tax_rate = tax_json['tax_rate'] * .01
    raw_order_taxes = (order_tax_rate * 10)
    order_taxes = round(raw_order_taxes, 2)
    find_order_totals(order_items, order_tax_rate)
    order_subtotal = subtotal
    order_total = total
    print(f'\n Order: {order_name}\n Customer Name: {order_customer}\n Subtotal: {order_subtotal:.2f}\n Taxes: {order_taxes:.2f}\n Total: {order_total:.2f}')

get_order()