import requests

def get_order():
    order_id = input('Please enter an order id:\n')
    response = requests.get(f'https://code-challenge-i2hz6ik37a-uc.a.run.app/orders/{order_id}')
    response_json = response.json()
    print(response_json['shipping_name'])

get_order()